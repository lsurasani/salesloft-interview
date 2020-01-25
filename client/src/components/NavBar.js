import React from 'react'
import styled from 'styled-components'

const NAV_HEIGHT = 46;
const AVATAR_HEIGHT = 40;

const StyledNavBar = styled.nav`
  display: flex;
  align-content: center;

  margin: 10px;
  padding 0px;
  height: ${NAV_HEIGHT}px;
  width: calc(100vw - 10);
`;

let NavText = styled.p`
  padding-right: 10px;
  padding-left: 10px;
  color: white;
`;

const Badge = styled.div`
  margin: 3px;
  display: flex;
  min-width: 152px;
  align-items: center;
  overflow: hidden;
  border-radius: 7px;
  border 2px solid #4a90e2;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  background-color: #4a90e2;
`;

let NavBar = () => (
  <StyledNavBar>
    <img src="/logo.png" height={AVATAR_HEIGHT} />
    <Badge><NavText>SalesLoft Interview Challenge</NavText></Badge>
  </StyledNavBar>
);

export default NavBar
