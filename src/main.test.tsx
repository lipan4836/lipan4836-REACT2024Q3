import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { store } from './store/store';
import App from './App';
import MainContent from './components/Main/MainContent';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import CardDetail from './components/CardDetail/CardDetail';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorContent from './components/ErrorBoundary/ErrorContent';

describe('App Routing', () => {
  const renderWithProviders = (ui: React.ReactElement, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);

    return render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <ErrorBoundary fallback={<ErrorContent error={null} errorInfo={null} />}>
            {ui}
          </ErrorBoundary>
        </MemoryRouter>
      </Provider>,
    );
  };

  test('renders MainContent at default route /', () => {
    renderWithProviders(
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MainContent />} />
        </Route>
      </Routes>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('renders MainContent at route /page/:pageId', () => {
    renderWithProviders(
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="page/:pageId" element={<MainContent />} />
        </Route>
      </Routes>,
      { route: '/page/1' },
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  test('renders CardDetail at route /page/:pageId/details/:id', () => {
    renderWithProviders(
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="page/:pageId" element={<MainContent />}>
            <Route path="details/:id" element={<CardDetail />} />
          </Route>
        </Route>
      </Routes>,
      { route: '/page/1/details/123' },
    );
    expect(screen.getByRole('button', { name: '1' })).toBeInTheDocument();
  });

  test('renders NotFoundPage at unknown route', () => {
    renderWithProviders(
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>,
      { route: '/unknown' },
    );
    expect(
      screen.getByText(/Looks like you were lost. There is no such page./i),
    ).toBeInTheDocument();
  });

  test('renders ErrorContent when an error occurs', () => {
    const ErrorComponent = () => {
      throw new Error('Test error');
    };

    renderWithProviders(
      <ErrorBoundary fallback={<ErrorContent error={null} errorInfo={null} />}>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    expect(
      screen.getByText(/Ooops!.. Something gone wrong. Please, reload page/i),
    ).toBeInTheDocument();
  });
});
