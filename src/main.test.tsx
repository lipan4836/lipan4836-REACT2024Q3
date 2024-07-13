import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from './App';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ErrorContent from './components/ErrorBoundary/ErrorContent';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import MainContent from './components/Main/MainContent';
import CardDetail from './components/CardDetail/CardDetail';
import { ReactNode } from 'react';

jest.mock('./components/Header/Header', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Header</div>,
  };
});
jest.mock('./components/AppContext/AppProvider', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  };
});
jest.mock('./components/ErrorBoundary/ErrorBoundary', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  };
});
jest.mock('./components/ErrorBoundary/ErrorContent', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Error Content</div>,
  };
});
jest.mock('./components/NotFoundPage/NotFoundPage', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Not Found Page</div>,
  };
});
jest.mock('./components/Main/MainContent', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Main Content</div>,
  };
});
jest.mock('./components/CardDetail/CardDetail', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Card Detail</div>,
  };
});

describe('Check all routes', () => {
  const renderRoutes = (initialEntries = ['/']) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <ErrorBoundary fallback={<ErrorContent error={null} errorInfo={null} />}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<MainContent />} />
              <Route path="page/:pageId" element={<MainContent />} />
              <Route path="page/:pageId/details/:id" element={<CardDetail />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </ErrorBoundary>
      </MemoryRouter>,
    );
  };

  it('should render MainContent at the root path', () => {
    renderRoutes(['/']);
    expect(screen.getByText('Mocked Main Content')).toBeInTheDocument();
  });

  it('should render MainContent with pageId path', () => {
    renderRoutes(['/page/1']);
    expect(screen.getByText('Mocked Main Content')).toBeInTheDocument();
  });

  it('should render CardDetail for details route', () => {
    renderRoutes(['/page/1/details/123']);
    expect(screen.getByText('Mocked Card Detail')).toBeInTheDocument();
  });

  it('should render NotFoundPage for unknown routes', () => {
    renderRoutes(['/unknown']);
    expect(screen.getByText('Mocked Not Found Page')).toBeInTheDocument();
  });
});
