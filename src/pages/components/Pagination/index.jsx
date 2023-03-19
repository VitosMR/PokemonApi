import React, { useState } from 'react';
import './style.css';

const Pagination = ({ currentPage, postsPerPage, totalPosts, paginate }) => {
  const [activePage, setActivePage] = useState(currentPage);
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number) => {
    paginate(number);
    setActivePage(number);
  };

  return (
    <ul className="peg">
      {pageNumbers.map((number) => (
        <li key={number} className="peg1">
          <a
            href="#"
            className={number === activePage ? 'active' : ''}
            onClick={() => handleClick(number)}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
