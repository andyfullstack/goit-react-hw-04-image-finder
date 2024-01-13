import { useEffect } from 'react';
import { Overlay, ModalDiv, ModalImg } from './Modal.styled.jsx';

const Modal = ({ onHideModal, imageData }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') onHideModal();
    };

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onHideModal]);

  const { largeImageURL } = imageData;
  return (
    <Overlay onClick={onHideModal}>
      <ModalDiv>
        <ModalImg src={largeImageURL} alt="largeImage" />
      </ModalDiv>
    </Overlay>
  );
};

export default Modal;
