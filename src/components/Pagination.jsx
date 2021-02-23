import React, { useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPeople, handlePagination }) => {
  Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPeople: PropTypes.number.isRequired,
    handlePagination: PropTypes.func.isRequired,
  };

  const [pageNumbers, setPageNumbers] = useState([]);
  const paginationLimit = useRef(10);
  const totalPages = useRef(
    useMemo(() => Math.ceil(totalPeople / paginationLimit.current), [totalPeople, paginationLimit])
  );

  useEffect(() => {
    const renderPagination = () => {
      if (totalPages.current) {
        for (let page = 1; page <= totalPages.current; page += 1) {
          setPageNumbers((oldPageArray) => [...oldPageArray, page]);
        }
      }
    };

    renderPagination();
  }, [totalPages, paginationLimit]);

  return (
    pageNumbers.length > 0 && (
      <footer className="mb-5">
        <ul className="pagination pagination-sm justify-content-center border-0">
          {pageNumbers.map((number) => {
            let pageClass = 'page-item ';
            if (number === currentPage) {
              pageClass += 'active';
            }

            return (
              <li key={number} className={pageClass}>
                <a
                  href="/"
                  className="page-link"
                  onClick={(event) => handlePagination(event, number)}
                >
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    )
  );
};

export default Pagination;
