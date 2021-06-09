import React from 'react';

const ImageCard = ({ image }) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img
        src={image.webformatURL}
        alt=""
        className="w-full h-64 object-cover"
      />
      <div className="px-6 py-4">
        <ul className="flex justify-between">
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ImageCard;
