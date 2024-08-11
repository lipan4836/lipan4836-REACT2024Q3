import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Custom404 from '../../pages/404';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../hooks/hooksRedux';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('../../hooks/hooksRedux', () => ({
  useAppSelector: jest.fn(),
}));

describe('Custom404 component', () => {
  let mockBack: jest.Mock;

  beforeEach(() => {
    mockBack = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      back: mockBack,
    });
    (useAppSelector as jest.Mock).mockReturnValue(false);
  });

  test('calls router.back when the Go back button is clicked', () => {
    render(<Custom404 />);

    const goBackButton = screen.getByText(/Go back/i);
    fireEvent.click(goBackButton);

    expect(mockBack).toHaveBeenCalled();
  });

  test('applies dark theme class when darkTheme is true', () => {
    (useAppSelector as jest.Mock).mockReturnValue(true);

    render(<Custom404 />);

    expect(screen.getByRole('article')).toHaveClass('notFoundPageWrap darkWrap');
  });
});
