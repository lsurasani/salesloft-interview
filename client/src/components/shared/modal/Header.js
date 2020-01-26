import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const StyledHeading = styled.div`
  grid-area: header;
`;

const Header = props => {
  const { title, close } = props;

  return (
    <StyledHeading>
      <h2 style={{ display: 'inline' }}>{title}</h2>
      <FontAwesomeIcon
        style={{ cursor: 'pointer', float: 'right' }}
        onClick={close}
        icon={faTimes}
      />
    </StyledHeading>
  );
};

export default Header;
