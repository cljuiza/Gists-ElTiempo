import React from "react";
import styled from "styled-components";
import Git from "../../Images/icone-github-grise.png";
import back from "../../Images/atras.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const StyledNavBar = styled.div`
  width: 100%;
  background: #2d333b;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;
const StyledH2 = styled.h2`
  color: white;
  margin-left: 15px;
`;
const StyledImg = styled.img`
  width: 40px;
  height: auto;
  &:hover{
    width: 43px;
    height:auto
  }
`;
const NavBar = () => {
  const { name } = useParams();
  return (
    <StyledNavBar>
      <StyledDiv>
          <a href={"https://docs.github.com/es/rest"}>
            <StyledImg src={Git} alt="not found" />
          </a>
        <StyledH2>Githubs finder</StyledH2>
      </StyledDiv>
      {name && (
        <Link to="/">
          <StyledImg src={back} alt="not found" />
        </Link>
      )}
    </StyledNavBar>
  );
};

export default NavBar;
