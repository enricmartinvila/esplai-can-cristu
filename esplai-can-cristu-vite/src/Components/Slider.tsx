import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { imagesUrls } from '../constants/SliderConstants';

export default function Slider() {
 
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? imagesUrls.length - 1 : prevImage - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImage((prevImage) =>
      prevImage === imagesUrls.length - 1 ? 0 : prevImage + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) =>
        prevImage === imagesUrls.length - 1 ? 0 : prevImage + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesUrls.length]);

  return (
    <div className="relative w-full h-full">
      <div className="flex justify-center items-center">
        <button
          onClick={handlePrevClick}
          className="absolute left-0 bg-gray-400/40 text-white p-2 rounded-r-md"
        >
          <ChevronLeftIcon className="size-5" />
        </button>
        <img
          src={imagesUrls[currentImage]}
          alt={`Slide ${currentImage}`}
          className="w-full h-full object-cover"
        />
        <button
          onClick={handleNextClick}
          className="absolute right-0 bg-gray-400/40 text-white p-2 rounded-l-md"
        >
          <ChevronRightIcon className="size-4 tablet:size-6" />
        </button>
      </div>
    </div>
  );
}