import { render, screen, fireEvent } from '@testing-library/react';
import ThemeBtn from './ThemeBtn';
import useAppContext from '../AppContext/useAppContext';

jest.mock('../AppContext/useAppContext');

describe('Theme button', () => {
  it('renders without crashing', () => {
    (useAppContext as jest.Mock).mockReturnValue({
      darkTheme: false,
      toggleTheme: jest.fn(),
    });

    render(<ThemeBtn />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('calls toggleTheme on button click', () => {
    const toggleTheme = jest.fn();
    (useAppContext as jest.Mock).mockReturnValue({
      darkTheme: false,
      toggleTheme,
    });

    render(<ThemeBtn />);
    fireEvent.click(screen.getByRole('button'));
    expect(toggleTheme).toHaveBeenCalled();
  });

  it('displays light theme icon with correct alt text when darkTheme is true', () => {
    (useAppContext as jest.Mock).mockReturnValue({
      darkTheme: true,
      toggleTheme: jest.fn(),
    });

    render(<ThemeBtn />);
    const icon = screen.getByRole('img') as HTMLImageElement;
    expect(icon.alt).toBe('switcher to light theme');
  });

  it('displays dark theme icon with correct alt text when darkTheme is false', () => {
    (useAppContext as jest.Mock).mockReturnValue({
      darkTheme: false,
      toggleTheme: jest.fn(),
    });

    render(<ThemeBtn />);
    const icon = screen.getByRole('img') as HTMLImageElement;
    expect(icon.alt).toBe('switcher to dark theme');
  });
});
