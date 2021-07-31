import React from "react";
import styled from "styled-components";

const StyleContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const StyleUr = styled.ul`
  padding: 0px 10px;
  text-decoration: none;
  display: flex;
  text-decoration: none;
`;
const StyleLi = styled.li`
  padding: 0px 10px;
  text-decoration: none;
  list-style: none;
`;
const StyleButton = styled.button`
  background-color: #DEE1E4;
  color: #444c56;
  font-weight: bold;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  font-family: "Varela Round", sans-serif;
  cursor: pointer;
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  &:hover{
  background-color: #adbac780;
  color: white;
  }
`;

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <StyleContainer>
      <StyleUr>
        {pageNumbers.map((number) => (
          <StyleLi key={number}>
            <StyleButton onClick={() => paginate(number)}>{number}</StyleButton>
          </StyleLi>
        ))}
      </StyleUr>
    </StyleContainer>
  );
};

export default Pagination;
