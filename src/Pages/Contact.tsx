import React from "react";
import { useI18n } from "../Components/i18nContext";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Contacte() {
  const { translations } = useI18n();

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-16 text-center">
        {/* Título */}
        <header className="mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-text">
            Esplai Can Cristu
          </p>
          <h1 className="text-balance text-4xl desktop:text-5xl font-extrabold tracking-tight text-text">
            {translations.titles.contact}
          </h1>
        </header>

        {/* Mapa */}
        <div className="relative mx-auto mb-10 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl shadow-black/60">
          <iframe
            title="Ubicació Esplai Can Cristu"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.6332084795445!2d1.8204971764964035!3d41.72843307477101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4580d736c2c79%3A0xcf0af0fca977fed9!2sCarrer%20de%20Carri%C3%B3%2C%2022%2C%2008242%20Manresa%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1731952799717!5m2!1ses!2ses"
            loading="lazy"
            className="w-full h-[450px] tablet:h-[500px]"
          ></iframe>
        </div>

        {/* Tarjeta de contacto */}
        <div className="mx-auto flex max-w-md flex-col items-center gap-6 rounded-2xl bg-white/5 p-6 shadow-lg shadow-black/40 ring-1 ring-white/10">
          <ul className="flex flex-col gap-4 text-sm laptop:text-base">
            <li className="flex items-center justify-center gap-3 text-text transition-transform hover:scale-105">
              <MapPinIcon className="h-6 w-6" />
              <a
                href="https://maps.app.goo.gl/5RJqMXFDqSaJkfdMA"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover:underline"
              >
                Carrer de Carrió, 22 · 08242 Manresa, Barcelona
              </a>
            </li>

            <li className="flex items-center justify-center gap-3 text-text transition-transform hover:scale-105">
              <EnvelopeIcon className="h-6 w-6" />
              <a
                href="mailto:esplai.cancristu@gmail.com"
                className="font-semibold hover:underline"
              >
                esplai.cancristu@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
