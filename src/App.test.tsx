import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import '@testing-library/jest-dom';

jest.mock('./components/Header/Header', () => {
  return {
    __esModule: true,
    default: () => <div>Mocked Header</div>,
  };
});

jest.mock('./components/AppContext/AppProvider', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  };
});

describe('App component', () => {
  it('should render without crashing', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    expect(getByText('Mocked Header')).toBeInTheDocument();
  });
});
