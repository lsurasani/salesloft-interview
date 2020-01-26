import React, { useState } from 'react'
import styled from 'styled-components'
import Table from '../shared/Table';
import FrequencyModal from './PeopleFrequencyModal';
import UserPageTitle from './PeoplePageTitle';
import PageButtons from './PeoplePageButtons';

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

const PeoplePage = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = () => ( setIsOpen(!isOpen) )

  return (
    <Box>
      <PeopleBox>
        <UserPageTitle
          toggleModal={toggleModal}
        />
        <FrequencyModal
          isOpen={isOpen}
          toggleModal={toggleModal}
        />
        {props.people.data === undefined ?
          <div>Loading.. </div> :
          <div>
            <Table
              people={props.people}
            />
            <PageButtons data={props.people.metadata} updatePage={props.onUpdatePage} />
          </div>
        }
      </PeopleBox>
    </Box>
  )
}

export default PeoplePage;