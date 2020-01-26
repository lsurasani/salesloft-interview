import React from 'react'
import styled from 'styled-components'

import NavBar from './NavBar'
import ConnectedPeoplePage from '../containers/ConnectedPeoplePage'

const Page = styled.div`
  display: grid;
  grid-template 46px 1fr / 1fr;
  height: 100%;
  width: 100%;
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LandingPage = () => (
  <Page>
    <NavBar />
    <FlexBox>
      <ConnectedPeoplePage />
    </FlexBox>
  </Page>
);
