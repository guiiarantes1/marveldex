import React from "react";
import "../components/Pagination.css"

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5; 
    const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage = currentPage - halfMaxPagesToShow;
    let endPage = currentPage + halfMaxPagesToShow;

    if (startPage < 1) {
      startPage = 1;
      endPage = Math.min(totalPages, maxPagesToShow);
    }
    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
          onClick={() => onPageChange(i)}
        >
          <a className="page-link">{i}</a>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="navConteiner">
      <nav aria-label="navPag">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <a
              className="page-link"
              onClick={() => onPageChange(currentPage - 1)}
            >
              <i className="bi bi-arrow-left"></i>
            </a>
          </li>
          {renderPageNumbers()}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <a
              className="page-link"
              onClick={() => onPageChange(currentPage + 1)}
            >
              <i className="bi bi-arrow-right"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
