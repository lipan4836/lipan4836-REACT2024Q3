import React from 'react';
import { useRouter } from 'next/router';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  searchQuery: string;
}

function Pagination({ totalPages, currentPage, searchQuery }: PaginationProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page,
        searchQuery,
      },
    });
  };

  const renderPageNumbers = () => {
    const maxPageButtons = 10;
    const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);
    const pages = [];

    if (startPage > 1) {
      pages.push(
        <button className="pagBtn" key={1} onClick={() => handlePageChange(1)}>
          1
        </button>,
      );
      if (startPage > 2) {
        pages.push(
          <span className="pagDots" key="dots-start">
            ...
          </span>,
        );
      }
    }

    for (let i = startPage; i <= endPage; i += 1) {
      pages.push(
        <button
          className={currentPage === i ? 'pagBtn active' : 'pagBtn'}
          key={i}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>,
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span className="pagDots" key="dots-end">
            ...
          </span>,
        );
      }
      pages.push(
        <button className="pagBtn" key={totalPages} onClick={() => handlePageChange(totalPages)}>
          {totalPages}
        </button>,
      );
    }

    return pages;
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button className="pagBtn" onClick={() => handlePageChange(currentPage - 1)}>
          ◀
        </button>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <button className="pagBtn" onClick={() => handlePageChange(currentPage + 1)}>
          ▶
        </button>
      )}
    </div>
  );
}

export default Pagination;
