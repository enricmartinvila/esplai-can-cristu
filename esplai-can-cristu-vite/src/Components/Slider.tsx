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
    'images/img12.webp',
    'images/img13.webp',
    'images/img14.webp',
    'images/img15.webp',
    'images/img16.webp',
    'images/img17.png',
    'images/img18.png',
    'images/img19.png',
    'images/img20.png',
    'images/img21.png',
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
          className="object-cover"
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