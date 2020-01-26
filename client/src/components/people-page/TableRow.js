import React from 'react';
import styled from 'styled-components';

const TableCell = styled.td`
  border: 1px solid gray;
  text-align: left;
`;

const PeopleRow = props => {
  const people = props.people;

  const list = people.data.map(person => {
    return (
      <tr key={person.id}>
        <TableCell>{`${person.first_name} ${person.last_name}`}</TableCell>
        <TableCell>{person.email_address}</TableCell>
        <TableCell>{person.title}</TableCell>
      </tr>
    );
  });

  return list;
};

export default PeopleRow;
