export function VanillaChallenge() {
  return (
    <section
      id="vanilla-challenge"
      className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
            30-Day Vanilla JS/CSS Challenge
          </h2>
          <p className="mb-16 text-center text-xl text-gray-600 dark:text-gray-300">
            "No Frameworks, No Libraries – Pure Problem-Solving"
          </p>

          {/* Timeline Section */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-blue-200 dark:bg-blue-900"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Day 1-10 */}
              <TimelineItem
                title="Days 1-10: DOM Fundamentals"
                description="Built pure CSS parallax scroll and implemented vanilla JS drag-and-drop functionality without external libraries."
                image="https://placehold.co/600x300?text=DOM+Manipulation+Demo"
                imageAlt="DOM Projects"
                position="left"
              />

              {/* Day 11-20 */}
              <TimelineItem
                title="Days 11-20: API Integration"
                description="Created custom HTTP request handlers and implemented real-time data visualization using Canvas API."
                image="https://placehold.co/600x300?text=API+Integration+Demo"
                imageAlt="API Projects"
                position="right"
              />

              {/* Day 21-30 */}
              <TimelineItem
                title="Days 21-30: Advanced Animations"
                description="Developed complex CSS animations and implemented custom state management without frameworks."
                image="https://placehold.co/600x300?text=Animation+Demo"
                imageAlt="Animation Projects"
                position="left"
              />
            </div>
          </div>

          {/* View All Challenges Button */}
          <div class="mt-12 text-center">
            <button class="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-8 py-3 transition-colors hover:bg-blue-700">
              <span>View All 30 Challenges</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Progress Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard
              number="30"
              label="Days Completed"
              textColor="text-blue-400"
            />
            <StatCard
              number="1,500+"
              label="Lines of Vanilla JS"
              textColor="text-blue-400"
            />
            <StatCard
              number="15"
              label="CSS Animations"
              textColor="text-blue-400"
            />
            <StatCard
              number="10"
              label="Canvas Projects"
              textColor="text-blue-400"
            />
          </div>

          {/* Key Learnings */}
          <div className="mt-20 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Key Learnings
            </h3>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <LearningCard
                icon={<BoltIcon />}
                title="Core Understanding"
                description="Gained deep understanding of JavaScript fundamentals and browser APIs."
                color="blue"
              />
              <LearningCard
                icon={<CheckCircleIcon />}
                title="Problem Solving"
                description="Enhanced ability to solve complex problems without relying on external libraries."
                color="green"
              />
              <LearningCard
                icon={<SpeedIcon />}
                title="Performance"
                description="Learned to write efficient, optimized code without framework overhead."
                color="purple"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ title, description, image, imageAlt, position }) {
  return (
    <div className="relative flex items-center justify-between">
      {/* Left side content */}
      {position === 'left' ? (
        <div className="w-5/12 pr-8">
          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
            <img
              src={image}
              alt={imageAlt}
              className="mt-4 w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <div className="w-5/12"></div>
      )}

      {/* Timeline dot */}
      <div className="absolute left-1/2 h-8 w-8 -translate-x-1/2 transform rounded-full border-4 border-white bg-blue-500 dark:border-gray-900"></div>

      {/* Right side content */}
      {position === 'right' ? (
        <div className="w-5/12 pl-8">
          <div className="rounded-xl bg-white p-6 shadow-lg dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{description}</p>
            <img
              src={image}
              alt={imageAlt}
              className="mt-4 w-full rounded-lg"
              loading="lazy"
            />
          </div>
        </div>
      ) : (
        <div className="w-5/12"></div>
      )}
    </div>
  );
}

function LearningCard({ icon, title, description, color }) {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-100 dark:bg-blue-900',
      text: 'text-blue-600 dark:text-blue-300',
    },
    green: {
      bg: 'bg-green-100 dark:bg-green-900',
      text: 'text-green-600 dark:text-green-300',
    },
    purple: {
      bg: 'bg-purple-100 dark:bg-purple-900',
      text: 'text-purple-600 dark:text-purple-300',
    },
  };

  return (
    <div className="space-y-4">
      <div
        className={`h-12 w-12 ${colorClasses[color].bg} flex items-center justify-center rounded-full`}
      >
        <div className={`h-6 w-6 ${colorClasses[color].text}`}>{icon}</div>
      </div>
      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

// Icons
function BoltIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}

function StatCard({ number, label, textColor }) {
  return (
    <div className="bg-gray-800 rounded-xl p-6 text-center">
      <div className={`text-4xl font-bold ${textColor} mb-2`}>{number}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}
