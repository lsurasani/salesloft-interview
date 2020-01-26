import React from 'react';
import TableCell from '../styled/TableCell';

const PeopleRow = props => {
  const people = props.people;

  const list = people.map(person => {
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
