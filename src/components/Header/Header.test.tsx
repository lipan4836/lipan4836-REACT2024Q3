import { render, screen } from '@testing-library/react';
import Header from './Header';
import AppProvider from '../AppContext/AppProvider';
import { AppContextProps } from '../../types/AppContextProps';
import AppContext from '../AppContext/AppContext';

jest.mock('../SearchBlock/SearchBlock', () => ({
  __esModule: true,
  default: () => <div>Mocked SearchBlock</div>,
}));

describe('Header component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderWithContext = (contextValue: Partial<AppContextProps>) => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <AppContext.Provider value={contextValue as AppContextProps}>{children}</AppContext.Provider>
    );
    return render(<Header />, { wrapper });
  };

  test('renders Header component with light theme', () => {
    renderWithContext({ darkTheme: false });

    expect(screen.getByText(/naruto characters base/i)).toHaveClass('h1');
    expect(screen.getByText('Mocked SearchBlock')).toBeInTheDocument();
  });

  test('renders Header component with dark theme', () => {
    renderWithContext({ darkTheme: true });

    expect(screen.getByText(/naruto characters base/i)).toHaveClass('h1Dark');
    expect(screen.getByText('Mocked SearchBlock')).toBeInTheDocument();
  });

  test('renders the Header component correctly', () => {
    render(
      <AppProvider>
        <Header />
      </AppProvider>,
    );

    expect(screen.getByText(/naruto characters base/i)).toBeInTheDocument();
    expect(screen.getByText('Mocked SearchBlock')).toBeInTheDocument();
  });
});
