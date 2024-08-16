import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.tsx';
import UnCtrlForm from './components/UnCtrlForm/UnCtrlForm.tsx';
import CtrlForm from './components/CtrlForm/CtrlForm.tsx';
import { Provider } from 'react-redux';
import store from './store/store.ts';
import Page404 from './components/404/Page404.tsx';

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
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
