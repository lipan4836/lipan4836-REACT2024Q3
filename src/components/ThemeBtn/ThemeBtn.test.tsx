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
});
