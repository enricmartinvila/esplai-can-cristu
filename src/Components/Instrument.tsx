import React, { useState } from "react";
import { ideariText } from "../constants/IdeariConstants";

type Valor = { title: string; text: string };
type IdeariItem = { title: string; text: string; valors?: Valor[] };

const Instrument = () => {
  const items = (ideariText.ideari || []) as IdeariItem[];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!items.length) {
    return (
      <p className="text-sm text-gray-600">
        No hay contenido configurado para el ideario.
      </p>
    );
  }

  const active = items[activeIndex];

  return (
    <div className="flex flex-col gap-6">
      {/* Pestañas superiores */}
      <div className="flex gap-2 overflow-x-auto rounded-full bg-gray-100 p-1 w-fit">
        {items.map((item, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={[
                "whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold transition-colors",
                isActive
                  ? "bg-text text-white"
                  : "bg-transparent text-gray-700 hover:bg-gray-200",
              ].join(" ")}
            >
              {item.title}
            </button>
          );
        })}
      </div>

      {/* Contenido principal del bloque activo */}
      <section className="rounded-2xl bg-white/90 p-5 tablet:p-6 laptop:p-8 shadow-lg shadow-gray-200 ring-1 ring-gray-200">
        <h2 className="mb-3 text-lg font-semibold text-text">{active.title}</h2>
        <p className="text-sm mobile:text-base laptop:text-lg leading-relaxed text-gray-700">
          {active.text}
        </p>
      </section>

      {/* Valors del bloque activo, si existen */}
      {active.valors && active.valors.length > 0 && (
        <section className="space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-text">
            Valors relacionats
          </h3>
          <div className="grid gap-3 tablet:grid-cols-2">
            {active.valors.map((valor, idx) => (
              <article
                key={idx}
                className="rounded-2xl bg-sky-50 p-4 shadow-inner shadow-gray-100 border border-gray-200"
              >
                <h4 className="mb-2 text-sm font-semibold text-text">
                  {valor.title}
                </h4>
                <p className="text-xs mobile:text-sm leading-relaxed text-gray-700">
                  {valor.text}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Instrument;
