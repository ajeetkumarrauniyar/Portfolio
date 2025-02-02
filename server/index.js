import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import arcjet, { shield, detectBot, tokenBucket } from '@arcjet/node';
import emailValidator from 'email-validator';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 5000;
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

// Improved logging function
const log = {
  info: (msg) => console.log(`[SERVER] ℹ️ ${msg}`),
  success: (msg) => console.log(`[SERVER] ✅ ${msg}`),
  error: (msg) => console.log(`[SERVER] ❌ ${msg}`),
  warn: (msg) => console.log(`[SERVER] ⚠️ ${msg}`),
};

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);
log.info('Resend client initialized');

// Initialize Arcjet
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ['ip.src'], // Track requests by IP
  rules: [
    shield({ mode: 'LIVE' }),
    detectBot({
      mode: 'LIVE', // Blocks requests. Use "DRY_RUN" to log only
      allow: ['CATEGORY:SEARCH_ENGINE'], // Google, Bing, etc
    }),
    // Create a token bucket rate limit. Other algorithms are supported.
    tokenBucket({
      mode: 'LIVE',
      refillRate: 3, // 3 contact form submissions
      interval: 60, // per minute
      capacity: 3, // maximum burst
    }),
  ],
});
log.info('Arcjet protection initialized');

// Configure CORS for development
app.use(
  cors({
    origin: CLIENT_URL,
    methods: ['POST'],
    credentials: true,
  })
);
app.use(express.json());

log.info('Middleware configured: CORS, JSON parsing');

// Email validation middleware
const validateEmail = (req, res, next) => {
  const { email } = req.body;
  if (!emailValidator.validate(email)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid email address',
    });
  }
  next();
};

// Form validation middleware
const validateForm = (req, res, next) => {
  const { name, email, projectType, message } = req.body;

  if (!name || !email || !projectType || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields are required',
    });
  }

  if (message.length < 10) {
    return res.status(400).json({
      success: false,
      error: 'Message must be at least 10 characters long',
    });
  }

  next();
};

// Replace the protectEmail middleware with Arcjet protection
const protectEmail = async (req, res, next) => {
  try {
    const decision = await aj.protect(req, { requested: 1 });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res.status(429).json({
          success: false,
          error: 'Too many requests. Please try again later.',
        });
      } else if (decision.reason.isBot()) {
        return res.status(403).json({
          success: false,
          error: 'Automated submissions are not allowed.',
        });
      } else {
        return res.status(403).json({
          success: false,
          error: 'Request denied for security reasons.',
        });
      }
    }

    next();
  } catch (error) {
    log.error(`Arcjet error: ${error.message}`);
    next(); // Fail open if Arcjet errors
  }
};

app.post(
  '/api/send',
  validateForm,
  validateEmail,
  protectEmail,
  async (req, res) => {
    log.info(`Received contact form submission from ${req.body.email}`);

    try {
      const { name, email, projectType, message } = req.body;

      const data = await resend.emails.send({
        from: 'Ajeet Kumar <onboarding@resend.dev>',
        to: ['rauniyarajeet5487@gmail.com'],
        reply_to: email,
        subject: `New Project Inquiry from ${name}`,
        html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      });

      log.success(`Email sent successfully to rauniyarajeet5487@gmail.com`);
      res.json({ success: true, data });
    } catch (error) {
      log.error(`Email sending failed: ${error.message}`);
      res.status(500).json({
        success: false,
        error: error.message || 'Failed to send email',
      });
    }
  }
);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
  });
});

// Start server
app.listen(SERVER_PORT, () => {
  log.success(`
    🚀 Server is running!
    📡 PORT: ${SERVER_PORT}
    🌍 URL: http://localhost:${SERVER_PORT}
    🔌 API Endpoints:
       - POST /api/send
       - GET /health
    🌐 Accepting requests from: ${CLIENT_URL}
  `);
});

// Error handling
process.on('unhandledRejection', (reason, promise) => {
  log.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  log.error('Uncaught Exception:', error);
  process.exit(1);
});
