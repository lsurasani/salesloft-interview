import React from 'react';
import styled from 'styled-components';
import PrimaryButton from '../../styled/PrimaryButton';

const StyledFooter = styled.div`
  grid-area: footer;
  align-self: last baseline;
`;

const Footer = props => {
  return (
    <StyledFooter>
      <PrimaryButton onClick={props.close} style={{ float: 'right' }}>
        Close
      </PrimaryButton>
    </StyledFooter>
  );
};

export default Footer;
