import ImgGalleryItem from 'components/ImgGalleryItem/ImgGalleryItem';
import ImgGalleryList from './ImgGallery.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'; // Подключите свои стили

const ImgGallery = ({ images, handleModal }) => {
  return (
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {images &&
        images.map((image, index) => (
          <SwiperSlide key={index}>
            <ImgGalleryList>
              <ImgGalleryItem
                imageData={image}
                onShowModal={() => handleModal(image)}
              />
            </ImgGalleryList>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ImgGallery;
