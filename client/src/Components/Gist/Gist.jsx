import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #2d333b;
  border-radius: 10px;
  position: relative;
  width: 160px;
  height: 220px;
  margin: 12px;
  align-items: flex-start;
  cursor: pointer;
  padding: 5px;
  transition: all .4s ease-in-out;
  &:hover{
  background-color: #656c7580;
  }
`;
const StyledImg = styled.img`
  margin-top: 10px;
  width: 100px;
  height: auto;
  border: 2px solid #444c56;
  border-radius: 50%;
`;
const StyledH2 = styled.h2`
  line-height: 1.5;
  letter-spacing: 1.15;
  font-family: "Segoe UI";
  font-size: 15px;
  color: #539bf5;
`;
const StyledH3 = styled.h3`
  line-height: 1.5;
  letter-spacing: 1.15;
  font-family: "Segoe UI Emoji";
  font-size: 10px;
  color: #adbac7;
  padding-left: 10px;
  padding-right: 10px;
`;
//-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji
const Gist = ({id, name, image, description }) => {
  return (
    <Container>
      <StyledImg src={image} alt="not found" />
      <StyledH2>{name}</StyledH2>
      <StyledH3>{description}</StyledH3>
    </Container>
  );
};

export default Gist;
