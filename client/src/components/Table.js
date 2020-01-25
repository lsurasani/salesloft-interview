import React from 'react'
import styled from 'styled-components'
import { fetchPeople } from '../actions/AsyncActions'

const Box = styled.div`
  display: grid;
  box-shadow: 0 0 6px 0 rgba(58,58,58,0.24);
  width: 90%;
  height: 90%;
  grid-template: 30% 1fr / 1fr;
`

const PeopleBox = styled.div`
  margin-left: 30px;
  margin-right: 30px;

  p {
    font-size: 20px;
  }
`

const TableHeaderCell = styled.th`
  border: 1px solid gray;
  text-align: left;
`

const TableCell = styled.td`
  border: 1px solid gray;
  text-align: left;
`

const StyledTable = styled.table`
  margin: auto;
  width: 100%;
  display: table;
  border: 1px solid gray;
`

const PageButton = styled.button`
  margin: 5px;
  font-size: 16px;
  margin: 0 5px;
  display: inline;
  border: 2px solid #4a90e2;
  background-color: #4a90e2;
  border-radius: 3px;
  padding: 7px;
  color: white;
  cursor: pointer;
`

const PeopleList = (props) => {
  const people = props.people

  const list = people.data.map((person) => {
    return (
      <tr key={person.id}>
        <TableCell>{`${person.first_name} ${person.last_name}`}</TableCell>
        <TableCell>{person.email_address}</TableCell>
        <TableCell>{person.title}</TableCell>
      </tr>
    )
  })

  return list
}

const Page = (props) => {
  const data = props.data
  const pages = data.paging
  console.log(pages)
  const itemStyling = {
    fontSize: 16,
    margin: "0 5px",
    display: "inline"
  }

  return (
    <div style={{ marginTop: 10, textAlign: 'center' }}>
      <PageButton onClick={() => fetchPeople(1)}>{"<< First Page"}</PageButton>
      <PageButton onClick={() => fetchPeople(pages.prev_page)}>{"< Previous Page"}</PageButton>
      <p style={itemStyling}>{`Page ${pages.current_page}`}</p>
      <PageButton onClick={() => fetchPeople(pages.next_page)}>{"Next Page >"}</PageButton>
      <PageButton onClick={() => fetchPeople(pages.total_pages)}>{"Last Page >>"}</PageButton>
    </div>
  )
}

const People = (props) => (
  <PeopleBox>
    <h1 style={{ textAlign: "left" }}>Users</h1>
    {props.people.data === undefined ?
      <div>Loading.. </div> :
      <div>
        <StyledTable>
          <thead>
            <tr>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email Address</TableHeaderCell>
              <TableHeaderCell>Job Title</TableHeaderCell>
            </tr>
          </thead>
          <tbody>
            <PeopleList people={props.people} />
          </tbody>
        </StyledTable>
        <Page data={props.people.metadata} />
      </div>
    }
  </PeopleBox>
)

export const Table = (props) => (
  <Box>
    {console.log(props)}
    <People people={props.people}/>
  </Box>
);
