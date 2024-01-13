// import { Component } from 'react';
import Searchbar from '../SearchBar/SearchBar';
import imgFinder from '../../api/imgFinder.js';
import ImgGallery from '../ImgGallery/ImgGallery.jsx';
import Loader from '../Loader/Loader.jsx';
import Button from '../Button/Button.jsx';
import Modal from '../Modal/Modal.jsx';
import StyledApp from './App.styled.jsx';
import { useEffect, useState } from 'react';

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState(1);
  const [loadMore, setLoadMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true);
        const resp = await imgFinder(query, page);
        const totalHits = resp.totalHits;
        const hits = resp.hits.map(({ id, webformatURL, largeImageURL }) => ({
          id,
          webformatURL,
          largeImageURL,
        }));
        setImages(prevState => [...prevState, ...hits]);
        setLoadMore(page < Math.ceil(totalHits / 12));
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (!query) return;
    getImages();
  }, [query, page]);

  const handleFormSubmit = inputValue => {
    setQuery(inputValue);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const handleModal = image => {
    setShowModal(prevState => !prevState);
    setSelectedImage(image);
  };

  return (
    <StyledApp>
      <Searchbar onSubmit={handleFormSubmit} />

      <ImgGallery images={images} handleModal={handleModal} />
      {showModal && (
        <Modal imageData={selectedImage} onHideModal={handleModal} />
      )}
      {isLoading && <Loader />}
      {loadMore && <Button loadMore={handleLoadMore} />}
    </StyledApp>
  );
};

export default App;
