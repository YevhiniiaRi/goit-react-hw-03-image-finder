import React from 'react';

const ImageGalleryItem = ({ image, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        alt=""
        onClick={onClick}
      />
    </li>
  );
};

export default ImageGalleryItem;
