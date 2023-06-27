import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <div className="ImageGallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={() => onImageClick(image)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
