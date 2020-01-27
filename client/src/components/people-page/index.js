import React, { useState } from 'react';
import styled from 'styled-components';
import Table from '../shared/Table';
import Modal from '../shared/Modal';
import UserPageTitle from './Title';
import PageButtons from './PageButtons';
import FrequencyModal from './FrequencyModal';
import DuplicateModal from './DuplicateModal';
import PeopleRow from '../people-page/TableRow';
import PeopleTableHeader from '../people-page/TableHeader';

const Box = styled.div`
  display: grid;
  box-shadow: 0 0 6px 0 rgba(58, 58, 58, 0.24);
  width: 90%;
  height: 90%;
  grid-template: 30% 1fr / 1fr;
`;

const PeopleBox = styled.div`
  margin-left: 30px;
  margin-right: 30px;

  p {
    font-size: 20px;
  }
`;

const PeoplePage = props => {
  const [isFrequencyOpen, setIsFrequencyOpen] = useState(false);
  const [isDuplicateOpen, setIsDuplicateOpen] = useState(false);

  const toggleFrequencyModal = () => setIsFrequencyOpen(!isFrequencyOpen);
  const toggleDuplicateModal = () => setIsDuplicateOpen(!isDuplicateOpen);

  const emails = props.people.data
    ? props.people.data.map(data => data.email_address)
    : null;

  return (
    <Box>
      <PeopleBox>
        <UserPageTitle
          toggleFrequencyModal={toggleFrequencyModal}
          toggleDuplicateModal={toggleDuplicateModal}
        />
        <Modal
          isOpen={isFrequencyOpen}
          toggleModal={toggleFrequencyModal}
          content={<FrequencyModal emails={emails} />}
          title="Frequency of Email Address Letters"
        />
        <Modal
          isOpen={isDuplicateOpen}
          toggleModal={toggleDuplicateModal}
          content={<DuplicateModal emails={emails} />}
          title="Potential Duplicate Email Addresses"
        />
        {props.people.data === undefined ? (
          <div>Loading.. </div>
        ) : (
          <div>
            <Table
              body={<PeopleRow people={props.people.data} />}
              header={<PeopleTableHeader />}
            />
            <PageButtons
              data={props.people.metadata}
              updatePage={props.onUpdatePage}
            />
          </div>
        )}
      </PeopleBox>
    </Box>
  );
};

export default PeoplePage;
