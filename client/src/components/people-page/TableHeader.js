import React from 'react';
import TableHeaderCell from '../styled/TableHeaderCell';

const PeopleTableHeader = () => (
  <tr>
    <TableHeaderCell>Name</TableHeaderCell>
    <TableHeaderCell>Email Address</TableHeaderCell>
    <TableHeaderCell>Job Title</TableHeaderCell>
  </tr>
);

export default PeopleTableHeader;
