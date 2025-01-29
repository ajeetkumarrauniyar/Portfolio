import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import JSMinorProjects from './pages/JSMinorProjects';
import NotFound from './pages/NotFound';
import ComingSoon from './pages/ComingSoon';
import Challenges from './pages/Challenges';
const comingSoonRoutes = [
  '/about',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
  '/services'
];

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/js-projects',
    element: <JSMinorProjects />,
  },
  {
    path: '/challenges',
    element: <Challenges />,
  },
  // Coming Soon routes
  ...comingSoonRoutes.map(path => ({
    path,
    element: <ComingSoon />
  })),
  // 404 route - must be last
  {
    path: '*',
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
