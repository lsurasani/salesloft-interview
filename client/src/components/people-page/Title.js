import React from 'react'
import PrimaryButton from '../styled/PrimaryButton';

const UserPageTitle = (props) => (
  <div style={{ display: 'inline', margin: '30px 0' }}>
    <h1 style={{ textAlign: "left", display: 'inline' }}>Users</h1>
    <PrimaryButton onClick={props.toggleModal}>Show Frequencies</PrimaryButton>
  </div>
)

export default UserPageTitle;
