import React, { useState } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Modal from './Modal';
import Button from './Button';

const API_KEY = '37927880-98ff7edd967c320635f1b9b6a';
const BASE_URL = 'https://pixabay.com/api/';

const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${BASE_URL}?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(response.data.hits);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${BASE_URL}?q=${query}&page=${Math.ceil(
          images.length / 12 + 1
        )}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setImages(prevImages => [...prevImages, ...response.data.hits]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <Searchbar
        value={query}
        onChange={e => setQuery(e.target.value)}
        onSubmit={handleSearch}
      />
      {loading ? (
        <Loader />
      ) : (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {images.length > 0 && !loading && (
        <Button onClick={handleLoadMore}>Load More</Button>
      )}
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
