import React, { useState, useEffect, useMemo } from "react";
import { useI18n } from "./i18nContext";

const ROTATION_MS = 16000;

const TextSlider = () => {
  const { translations } = useI18n();
  const mainPage = translations.mainPage || {};

  const titleMap = mainPage["text-slider-titles"] || {};
  const textMap = mainPage["text-slider-textes"] || {};

  const keysOrder = ["what", "how", "who", "when"];

  const items = useMemo(
    () =>
      keysOrder
        .map((key) => {
          const title = titleMap[key];
          const text = textMap[key];
          if (!title || !text) return null;
          return { key, title, text };
        })
        .filter(Boolean),
    [titleMap, textMap]
  );

  const [index, setIndex] = useState(0);
  const total = items.length;

  useEffect(() => {
    if (total <= 1) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, ROTATION_MS);

    return () => clearInterval(id);
  }, [total]);

  if (!total) {
    return (
      <div className="text-xs text-gray-600">
        Configura <code>mainPage.text-slider-titles</code> i{" "}
        <code>mainPage.text-slider-textes</code> a les traduccions.
      </div>
    );
  }

  const current = items[index];

  const renderText = (text) => {
    const words = text.split(" ");
    return words.map((word, i) => {
      const highlight = (i + 1) % 7 === 0;
      return (
        <span key={i} className={highlight ? "text-text" : "text-gray-700"}>
          {word}
          {i < words.length - 1 && " "}
        </span>
      );
    });
  };

  return (
    <div className="w-full">
      {/* Tabs / Títols */}
      <div className="mb-4 flex flex-wrap gap-2">
        {items.map((item, i) => {
          const isActive = i === index;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setIndex(i)}
              className={[
                "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                isActive
                  ? "bg-text text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              ].join(" ")}
            >
              {item?.title}
            </button>
          );
        })}
      </div>

      {/* Contenedor de texto con altura fija */}
      <div className="relative overflow-hidden">
        <div
          key={current.key}
          className="transition-all duration-700 ease-in-out"
          style={{ minHeight: "7rem" }} // altura fija (~112px)
        >
          <h2 className="text-sm font-semibold uppercase tracking-wide text-text mb-2">
            {current?.title}
          </h2>
          <p className="text-sm leading-relaxed text-gray-700">
            {renderText(current?.text)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TextSlider;
