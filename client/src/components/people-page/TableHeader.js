import React from 'react';
import styled from 'styled-components';

const TableHeaderCell = styled.th`
  border: 1px solid gray;
  text-align: left;
`;

const PeopleTableHeader = () => (
  <tr>
    <TableHeaderCell>Name</TableHeaderCell>
    <TableHeaderCell>Email Address</TableHeaderCell>
    <TableHeaderCell>Job Title</TableHeaderCell>
  </tr>
);

export default PeopleTableHeader;
