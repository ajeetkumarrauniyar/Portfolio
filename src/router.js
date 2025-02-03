import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import JSMinorProjects from './pages/JSMinorProjects.jsx';
import Challenges from './pages/Challenges.jsx';
import ComingSoon from './pages/ComingSoon.jsx';
import NotFound from './pages/NotFound.jsx';

// Define coming soon routes
const comingSoonRoutes = [
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/services',
  '/react-minors',
];

// Create route configurations
const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/javascript-playground',
        element: <JSMinorProjects />,
      },
      {
        path: '/challenges',
        element: <Challenges />,
      },
      {
        path: '/coming-soon',
        element: <ComingSoon />,
      },
      // Coming Soon routes
      ...comingSoonRoutes.map((path) => ({
        path,
        element: <ComingSoon />,
      })),
      // 404 route
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
