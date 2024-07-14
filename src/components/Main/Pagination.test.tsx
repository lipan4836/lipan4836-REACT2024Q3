import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Pagination from './Pagination';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ pageId: '3' }),
}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('Pagination component', () => {
  test('updates URL query parameter when page changes', () => {
    const totalPages = 5;

    render(
      <MemoryRouter initialEntries={['/page/3']}>
        <Routes>
          <Route path="/page/:pageId" element={<Pagination totalPages={totalPages} />} />
        </Routes>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText('4'));

    expect(mockNavigate).toHaveBeenCalledWith('/page/4');
  });
});

describe('Render Pagination component', () => {
  const renderPagination = (initialEntries = ['/page/1'], totalPages = 20) => {
    return render(
      <MemoryRouter initialEntries={initialEntries}>
        <Routes>
          <Route path="/page/:pageId" element={<Pagination totalPages={totalPages} />} />
        </Routes>
      </MemoryRouter>,
    );
  };

  it('renders the first page and dots at the start when current page is far from the start', () => {
    renderPagination(['/page/10'], 20);

    expect(screen.getByText('1')).toBeInTheDocument();
    const dots = screen.getAllByText('...');
    expect(dots).toHaveLength(2);
    expect(dots[0]).toBeInTheDocument();
  });

  it('renders the last page and dots at the end when current page is far from the end', () => {
    renderPagination(['/page/10'], 20);

    expect(screen.getByText('20')).toBeInTheDocument();
    const dots = screen.getAllByText('...');
    expect(dots).toHaveLength(2);
    expect(dots[1]).toBeInTheDocument();
  });

  it('renders the previous and next buttons correctly', () => {
    renderPagination(['/page/10'], 20);

    const prevButton = screen.getByText('◀');
    const nextButton = screen.getByText('▶');

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(screen.getByText('9')).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(screen.getByText('11')).toBeInTheDocument();
  });

  it('navigates to the correct page when page button is clicked', () => {
    renderPagination(['/page/10'], 20);

    const pageButton = screen.getByText('5');
    fireEvent.click(pageButton);

    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
