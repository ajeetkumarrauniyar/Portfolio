require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
// const Arcjet = require('@arcjet/node');
const emailValidator = require('email-validator');

const app = express();
const SERVER_PORT = 5000;
const CLIENT_PORT = 3000;

// Improved logging function
const log = {
  info: (msg) => console.log(`[SERVER] ℹ️ ${msg}`),
  success: (msg) => console.log(`[SERVER] ✅ ${msg}`),
  error: (msg) => console.log(`[SERVER] ❌ ${msg}`),
  warn: (msg) => console.log(`[SERVER] ⚠️ ${msg}`)
};

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);
log.info('Resend client initialized');

// Initialize Arcjet
// const aj = new Arcjet.default({
//   key: process.env.ARCJET_API_KEY,
//   mode: process.env.ARCJET_ENV === 'production' ? 'live' : 'test',
// });
// log.info('Arcjet protection initialized in ' + process.env.ARCJET_ENV + ' mode');

// Configure CORS for development
app.use(cors({
  origin: `http://localhost:${CLIENT_PORT}`,
  methods: ['POST'],
  credentials: true
}));
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

// Rate limiting middleware (simple version without Arcjet)
const rateLimiter = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3;

const protectEmail = async (req, res, next) => {
  const ip = req.ip;
  const now = Date.now();
  
  if (!rateLimiter.has(ip)) {
    rateLimiter.set(ip, { count: 1, firstRequest: now });
    return next();
  }

  const userLimit = rateLimiter.get(ip);
  
  if (now - userLimit.firstRequest > RATE_LIMIT_WINDOW) {
    // Reset if window has passed
    rateLimiter.set(ip, { count: 1, firstRequest: now });
    return next();
  }

  if (userLimit.count >= MAX_REQUESTS) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please try again later.',
    });
  }

  userLimit.count++;
  next();
};

// Cleanup old rate limit entries every minute
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimiter.entries()) {
    if (now - data.firstRequest > RATE_LIMIT_WINDOW) {
      rateLimiter.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW);

app.post('/api/send', validateForm, validateEmail, protectEmail, async (req, res) => {
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
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
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
    🌐 Accepting requests from: http://localhost:${CLIENT_PORT}
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
