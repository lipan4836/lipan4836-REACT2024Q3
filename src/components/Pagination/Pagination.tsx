import { useNavigate, useSearchParams } from 'react-router-dom';

interface PaginationProps {
  totalPages: number;
}

function Pagination({ totalPages }: PaginationProps) {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const navigate = useNavigate();

  const handlePageChange = (page: number) => {
    navigate(`?page=${page}`);
  };

  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i += 1) {
      pages.push(
        <button
          className={currentPage === i ? 'active' : ''}
          key={i}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>,
      );
    }

    return pages;
  };

  return <div className="pagination">{renderPageNumbers()}</div>;
}

export default Pagination;
