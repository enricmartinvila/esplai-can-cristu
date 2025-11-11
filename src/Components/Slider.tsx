// src/Components/Slider.jsx
import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { imagesUrls } from "../constants/SliderConstants";

export default function Slider() {
  const [currentImage, setCurrentImage] = useState(0);
  const total = imagesUrls.length || 1;

  const goPrev = () => {
    setCurrentImage((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentImage((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (total <= 1) return;

    const id = setInterval(() => {
      setCurrentImage((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(id);
  }, [total]);

  if (!imagesUrls || imagesUrls.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center text-sm text-slate-300">
        Afegeix imatges al SliderConstants.
      </div>
    );
  }

  const currentSrc = imagesUrls[currentImage];

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {total > 1 && (
        <button
          type="button"
          aria-label="Imatge anterior"
          onClick={goPrev}
          className="absolute left-3 z-10 inline-flex items-center justify-center rounded-full bg-black/40 p-2 backdrop-blur transition-colors hover:bg-black/70"
        >
          <ChevronLeftIcon className="h-5 w-5 text-white" />
        </button>
      )}

      <img
        src={currentSrc}
        alt={`Activitats de l'esplai ${currentImage + 1}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />

      {total > 1 && (
        <button
          type="button"
          aria-label="Imatge següent"
          onClick={goNext}
          className="absolute right-3 z-10 inline-flex items-center justify-center rounded-full bg-black/40 p-2 backdrop-blur transition-colors hover:bg-black/70"
        >
          <ChevronRightIcon className="h-5 w-5 text-white" />
        </button>
      )}

      {total > 1 && (
        <div className="pointer-events-none absolute bottom-4 flex w-full items-center justify-center gap-2">
          {imagesUrls.map((_, index) => (
            <span
              key={index}
              className={`h-1.5 rounded-full transition-all ${
                index === currentImage ? "w-6 bg-text" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
