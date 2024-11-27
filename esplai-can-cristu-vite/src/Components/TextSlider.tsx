import React, { useState, useEffect } from 'react';
import { useI18n } from './i18nContext';

const TextSlider = () => {
  const { translations } = useI18n();
  const { titles, texts } = translations.textSlider;
  const [index, setIndex] = useState(0);

  const nextText = () => {
    setIndex((index + 1) % texts.length);
  };

  useEffect(() => {
    const interval = setInterval(nextText, 20000); // Change text every 20 seconds
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="text-slider">
      <h2>{titles[index]}</h2>
      <p>{texts[index]}</p>
      <button onClick={nextText}>Siguiente</button>
    </div>
  );
};

export default TextSlider;