import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/index2.css';
import './styles/TechStack.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
