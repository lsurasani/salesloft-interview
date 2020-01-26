import React from 'react';
import PrimaryButton from '../styled/PrimaryButton';

const UserPageTitle = props => (
  <div style={{ display: 'inline-block', margin: '30px 0', width: '100%' }}>
    <h1 style={{ textAlign: 'left', display: 'inline' }}>Users</h1>
    <PrimaryButton
      onClick={props.toggleFrequencyModal}
      style={{ float: 'right' }}
    >
      Show Frequencies
    </PrimaryButton>
    <PrimaryButton
      onClick={props.toggleDuplicateModal}
      style={{ float: 'right' }}
    >
      Show Duplicates
    </PrimaryButton>
  </div>
);

export default UserPageTitle;
