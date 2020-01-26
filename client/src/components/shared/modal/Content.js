import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  grid-area: main;
  height: auto;
  overflow: scroll;
`;

const Content = props => <StyledContent>{props.content}</StyledContent>;

export default Content;
