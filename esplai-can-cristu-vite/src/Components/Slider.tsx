import React, { useState, useEffect } from 'react';

export default function Slider() {
  const images = [
    'images/img1.webp',
    'images/img2.webp',
    'images/img3.webp',
    'images/img4.webp',
    'images/img5.webp',
    'images/img6.webp',
    'images/img7.webp',
    'images/img8.webp',
    'images/img9.webp',
    'images/img10.webp',
    'images/img11.webp',
    'images/img12.jpg',
    'images/img13.webp',
    'images/img14.webp',
    'images/img15.webp',
    'images/img16.webp',
    'images/img17.jpg',
    'images/img18.jpg',
    'images/img19.jpg',
    'images/img20.jpg',
    'images/img21.jpg',
  ];
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === images.length - 1 ? 0 : prevImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      <div className="flex justify-center items-center">
        <button
          onClick={handlePrevClick}
          className="absolute left-0 bg-gray-800 text-white p-2 rounded-full"
        >
          {"<"}
        </button>
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleNextClick}
          className="absolute right-0 bg-gray-800 text-white p-2 rounded-full"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}