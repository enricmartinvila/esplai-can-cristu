import React, { useState, useEffect } from 'react';

export default function Slider() {
  const images = [
    'images/img1.webp',
    'images/img2.webp',
    'images/img3.webp',
    'images/img4.webp',
    'images/img5.webp',
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
          Prev
        </button>
        <img
          src={images[currentImage]}
          alt={`Slide ${currentImage}`}
          className="w-full h-full"
        />
        <button
          onClick={handleNextClick}
          className="absolute right-0 bg-gray-800 text-white p-2 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
}