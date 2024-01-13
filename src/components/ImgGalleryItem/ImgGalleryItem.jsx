// import { Component } from 'react';
import { ImgGalleryLi, ImgGalleryLiImage } from './ImgGalleryItem.styled';

const ImgGalleryItem = props => {
  const showModal = () => {
    props.onShowModal();
  };

  const { id, webformatURL } = props.imageData;
  return (
    <ImgGalleryLi key={id}>
      <ImgGalleryLiImage
        src={webformatURL}
        alt="imageStock"
        onClick={showModal}
      />
    </ImgGalleryLi>
  );
};

export default ImgGalleryItem;
