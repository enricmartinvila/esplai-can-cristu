import React, { useState, useEffect } from 'react';
import { useI18n } from './i18nContext';

const TextSlider = () => {
  const { translations } = useI18n();
  const titles = Object.values(translations.mainPage['text-slider-titles']);
  const texts = Object.values(translations.mainPage['text-slider-textes']);
  const [index, setIndex] = useState(0);

  const nextText = () => {
    setIndex((index + 1) % texts.length);
  };

  useEffect(() => {
    const interval = setInterval(nextText, 20000); // Change text every 20 seconds
    return () => clearInterval(interval);
  }, [texts.length]);

  const highlightEveryFewWords = (text, interval = 5) => {
    const words = text.split(' ');
    const highlightedWords = words.map((word, i) => {
      if ((i + 1) % interval === 0) {
        return `<span style="color: #9e3841">${word}</span>`;
      }
      return word;
    });
    return highlightedWords.join(' ');
  };

  return (
    <div className="text-slider">
      <h1 className="text-4xl font-bold text-text">{titles[index]}</h1>
      <p
        className="pt-12 text-xl text-white font-semibold"
        dangerouslySetInnerHTML={{ __html: highlightEveryFewWords(texts[index]) }}
      ></p>
      <div className="flex justify-center mt-4">
        {texts.map((_, dotIndex) => (
          <div
            key={dotIndex}
            className={`w-3 h-3 cursor-pointer mx-1 rounded-full ${
              dotIndex === index ? 'bg-text' : 'bg-white'
            }`}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default TextSlider;