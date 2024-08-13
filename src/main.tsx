import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.tsx';
import UnCtrlForm from './components/UnCtrlForm/UnCtrlForm.tsx';
import CtrlForm from './components/CtrlForm/CtrlForm.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/unctrl',
        element: <UnCtrlForm />,
      },
      {
        path: '/ctrl',
        element: <CtrlForm />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
