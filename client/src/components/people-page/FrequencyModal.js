import React from 'react';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const FrequencyModal = props => {
  const { isOpen, toggleModal } = props;

  return (
    <StyledModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      <span>I am a modal!</span>
      <button onClick={toggleModal}>Close me</button>
    </StyledModal>
  );
};

export default FrequencyModal;
