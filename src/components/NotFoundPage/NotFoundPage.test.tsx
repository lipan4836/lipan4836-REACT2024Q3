import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('NotFoundPage component', () => {
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
});
