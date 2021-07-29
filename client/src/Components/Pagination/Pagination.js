import React from 'react';
import moduleStile from "./Pagination.module.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className={moduleStile.container}>
      <ul className={moduleStile.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={moduleStile.a}>
            <button className={moduleStile.boton}  onClick={() => paginate(number)} >{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
