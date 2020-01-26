import React from 'react';
import Modal from 'styled-react-modal';
import Header from './modal/Header';
import Footer from './modal/Footer';
import Content from './modal/Content';

const StyledReactModal = Modal.styled`
  width: 30rem;
  height: 30rem;
  background-color: white;
  display: grid;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-gap: 5px;
  padding: 20px;
`;

const StyledModal = props => {
  const { isOpen, toggleModal, title, content } = props;

  return (
    <StyledReactModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
    >
      <Header title={title} close={toggleModal} />
      <Content content={content} />
      <Footer close={toggleModal} />
    </StyledReactModal>
  );
};

export default StyledModal;
