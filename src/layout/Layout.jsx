import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className="antialiased text-gray-800 min-h-screen flex flex-col">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" 
         className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black">
         Skip to main content
      </a>

      <header className="relative z-50 bg-white dark:bg-gray-900">
        {/* Header content */}
      </header>

      <main id="main-content" className="flex-1 relative">
        {children}
      </main>
    </div>
  )
}

export default Layout