import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import { useNavigate } from 'react-router-dom';
import useAppContext from '../AppContext/useAppContext';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../AppContext/useAppContext');

describe('NotFoundPage component', () => {
  beforeEach(() => {
    (useAppContext as jest.Mock).mockReturnValue({ darkTheme: false });
  });

  test('clicking the Go back button calls navigate with -1', () => {
    const navigateMock = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );

    const button = screen.getByRole('button', { name: /go back/i });
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledWith(-1);
  });

  test('renders not found message', () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(/Looks like you were lost. There is no such page./i),
    ).toBeInTheDocument();
  });

  test('applies dark theme class when darkTheme is true', () => {
    (useAppContext as jest.Mock).mockReturnValue({ darkTheme: true });

    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('article')).toHaveClass('darkWrap');
  });

  test('does not apply dark theme class when darkTheme is false', () => {
    (useAppContext as jest.Mock).mockReturnValue({ darkTheme: false });

    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>,
    );

    expect(screen.getByRole('article')).not.toHaveClass('darkWrap');
  });
});
