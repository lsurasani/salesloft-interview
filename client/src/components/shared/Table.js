import React from 'react';
import styled from 'styled-components';

const StyledTable = styled.table`
  margin: auto;
  width: 100%;
  display: table;
  border: 1px solid gray;
`;

const Table = props => {
  const { header, body } = props;
  return (
    <StyledTable>
      <thead>{header}</thead>
      <tbody>{body}</tbody>
    </StyledTable>
  );
};

export default Table;
