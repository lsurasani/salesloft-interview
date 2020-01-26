import React from 'react'
import styled from 'styled-components'
import PeopleRow from '../people-page/PeopleRow';
import PeopleTableHeader from '../people-page/PeopleTableHeader';

const StyledTable = styled.table`
  margin: auto;
  width: 100%;
  display: table;
  border: 1px solid gray;
`

const Table = (props) => {

  return (
    <StyledTable>
      <thead>
        <PeopleTableHeader />
      </thead>
      <tbody>
        <PeopleRow people={props.people} />
      </tbody>
    </StyledTable>
  )
}

export default Table;
