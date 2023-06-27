import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <div className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        alt=""
        onClick={onClick}
      />
    </div>
  );
};

export default ImageGalleryItem;
