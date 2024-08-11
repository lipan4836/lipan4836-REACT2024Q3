import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useRouter } from 'next/router';
import Pagination from '../../components/Main/Pagination';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Pagination', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/page',
      query: {},
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the correct number of page buttons', () => {
    render(<Pagination totalPages={5} currentPage={1} searchQuery="" />);

    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(6);
  });

  it('should call router.push with correct query parameters when a page number is clicked', () => {
    render(<Pagination totalPages={5} currentPage={1} searchQuery="naruto" />);

    const page2Button = screen.getByText('2');
    fireEvent.click(page2Button);

    expect(mockPush).toHaveBeenCalledWith({
      pathname: '/page',
      query: { page: 2, searchQuery: 'naruto' },
    });
  });

  it('should display "..." when there are more than 10 pages and the current page is in the middle', () => {
    render(<Pagination totalPages={20} currentPage={10} searchQuery="" />);

    const dots = screen.getAllByText('...');

    expect(dots).toHaveLength(2);
  });

  it('should not render the previous button when on the first page', () => {
    render(<Pagination totalPages={5} currentPage={1} searchQuery="" />);

    expect(screen.queryByText('◀')).not.toBeInTheDocument();
  });

  it('should not render the next button when on the last page', () => {
    render(<Pagination totalPages={5} currentPage={5} searchQuery="" />);

    expect(screen.queryByText('▶')).not.toBeInTheDocument();
  });

  it('should render the previous and next buttons correctly', () => {
    render(<Pagination totalPages={5} currentPage={3} searchQuery="" />);

    expect(screen.getByText('◀')).toBeInTheDocument();
    expect(screen.getByText('▶')).toBeInTheDocument();
  });
});
