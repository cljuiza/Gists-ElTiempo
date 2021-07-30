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
  display:flex;
  text-decoration: none
`;
const StyleLi = styled.li`
  padding: 0px 10px;
  text-decoration: none;
  list-style:none
`;
const StyleButton = styled.button`
  background-color: #adbac7;
  color: black;
  height: 30px;
  width: 30px;
  border-radius: 5px;
  font-family: "Varela Round", sans-serif;
  cursor: pointer;

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
            <StyleButton
              onClick={() => paginate(number)}
            >
              {number}
            </StyleButton>
          </StyleLi>
        ))}
      </StyleUr>
    </StyleContainer>
  );
};

export default Pagination;
