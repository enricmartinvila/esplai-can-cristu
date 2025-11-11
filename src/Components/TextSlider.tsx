// src/Components/TextSlider.jsx
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
      <div className="text-xs text-slate-300">
        Configura <code>mainPage.text-slider-titles</code> i{" "}
        <code>mainPage.text-slider-textes</code> a les traduccions.
      </div>
    );
  }

  const current = items[index];

  const renderText = (text: string) => {
    const words = text.split(" ");
    return words.map((word, i) => {
      const highlight = (i + 1) % 7 === 0;
      return (
        <span key={i} className={highlight ? "text-text" : "text-slate-100"}>
          {word}
          {i < words.length - 1 && " "}
        </span>
      );
    });
  };

  return (
    <div>
      {/* Tabs/títols */}
      <div className="mb-3 flex flex-wrap gap-2">
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
                  : "bg-white/5 text-slate-100 hover:bg-white/10",
              ].join(" ")}
            >
              {item?.title}
            </button>
          );
        })}
      </div>

      {/* Text */}
      <h2 className="text-sm font-semibold uppercase tracking-wide text-text">
        {current?.title}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-100">
        {renderText(current?.text)}
      </p>
    </div>
  );
};

export default TextSlider;
