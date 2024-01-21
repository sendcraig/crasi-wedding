import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import './global.module.scss';
import './config/i18n';
import reportWebVitals from './reportWebVitals';
import {
  Outlet,
  RootRoute,
  Route,
  Router,
  RouterProvider,
} from '@tanstack/react-router';
import { SaveTheDate } from './components/SaveTheDate/SaveTheDate';
import { InfoWebsite } from './components/InfoWebsite/InfoWebsite';

const rootRoute = new RootRoute({
  component: Outlet,
});

const stdRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SaveTheDate,
});

const infoRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/info',
  component: InfoWebsite,
});

const routeTree = rootRoute.addChildren([stdRoute, infoRoute]);
const router = new Router({ routeTree });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
