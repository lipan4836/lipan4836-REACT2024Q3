import { render, screen, act } from '@testing-library/react';
import AppProvider from './AppProvider';
import AppContext from './AppContext';
import { useContext } from 'react';

interface AppContextProps {
  darkTheme: boolean;
  toggleTheme: () => void;
}

describe('AppProvider', () => {
  afterEach(() => {
    localStorage.clear();
  });

  const TestComponent = () => {
    const context = useContext(AppContext);
    const { darkTheme, toggleTheme } = context as AppContextProps;
    return (
      <div>
        <span>{darkTheme ? 'Dark' : 'Light'}</span>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    );
  };

  test('loads initial theme from localStorage', () => {
    localStorage.setItem('darkTheme', 'true');
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>,
    );

    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(document.body.getAttribute('data-theme')).toBe('dark');
  });

  test('initial theme is light if not set in localStorage', () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>,
    );

    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(document.body.getAttribute('data-theme')).toBe('light');
  });

  test('toggleTheme function toggles the theme', () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>,
    );

    const button = screen.getByText('Toggle Theme');
    act(() => {
      button.click();
    });

    expect(screen.getByText('Dark')).toBeInTheDocument();
    expect(localStorage.getItem('darkTheme')).toBe('true');
    expect(document.body.getAttribute('data-theme')).toBe('dark');

    act(() => {
      button.click();
    });

    expect(screen.getByText('Light')).toBeInTheDocument();
    expect(localStorage.getItem('darkTheme')).toBe('false');
    expect(document.body.getAttribute('data-theme')).toBe('light');
  });

  test('passes darkTheme and toggleTheme to children via context', () => {
    render(
      <AppProvider>
        <TestComponent />
      </AppProvider>,
    );

    expect(screen.getByText('Light')).toBeInTheDocument();
    const button = screen.getByText('Toggle Theme');
    act(() => {
      button.click();
    });
    expect(screen.getByText('Dark')).toBeInTheDocument();
  });
});
