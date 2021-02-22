import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPeople, handlePagination }) => {
  Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPeople: PropTypes.number.isRequired,
    handlePagination: PropTypes.func.isRequired,
  };

  const pageNumbers = [];
  const paginationLimit = 10;

  const renderPagination = () => {
    if (totalPeople > paginationLimit) {
      for (let i = 1; i <= paginationLimit; i + 1) {
        pageNumbers.push(i);
      }
    } else {
      for (let i = 1; i <= totalPeople; i + 1) {
        pageNumbers.push(i);
      }
    }
  };

  renderPagination();

  return (
    <footer className="mb-5">
      <ul className="pagination pagination-sm justify-content-center border-0">
        {pageNumbers.map((number) => {
          let pageClass = 'page-item ';
          if (number === currentPage) {
            pageClass += 'active';
          }

          return (
            <button
              key={number}
              onClick={() => handlePagination(number)}
              className={pageClass}
              type="button"
            >
              <a href="/" className="page-link">
                {number}
              </a>
            </button>
          );
        })}
      </ul>
    </footer>
  );
};

export default Pagination;
