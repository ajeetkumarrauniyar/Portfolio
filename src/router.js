import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import JSMinorProjects from './pages/JSMinorProjects';
import Challenges from './pages/Challenges';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';

const comingSoonRoutes = [
  '/about',
  '/blog',
  '/contact',
  '/privacy',
  '/terms',
  '/services',
  '/react-minors',
];

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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
]);
