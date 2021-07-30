import React from 'react';
import styled from "styled-components";

const StyledNavBar=styled.div`
width:100%;
background:#2d333b;
height :60px
`;
const NavBar = () => {
    return (
        <StyledNavBar>
            <h2>NavBar</h2>
        </StyledNavBar>
    );
};

export default NavBar;