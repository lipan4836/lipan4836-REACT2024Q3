import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.tsx';
import './index.scss';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import ErrorContent from './components/ErrorBoundary/ErrorContent.tsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.tsx';
import MainContent from './components/Main/MainContent.tsx';
import CardDetail from './components/CardDetail/CardDetail.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainContent />,
      },
      {
        path: 'page/:pageId',
        element: <MainContent />,
        children: [
          {
            path: 'details/:id',
            element: <CardDetail />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<ErrorContent error={null} errorInfo={null} />}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </React.StrictMode>,
);
