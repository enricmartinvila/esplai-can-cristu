// src/Pages/MainPage.jsx
import React from "react";
import Slider from "../Components/Slider";
import TextSlider from "../Components/TextSlider";
import { useI18n } from "../Components/i18nContext";
import { Link } from "react-router-dom";

export default function MainPage() {
  const { translations } = useI18n();

  const maintexts = translations.maintexts || {};
  const about = translations.aboutustexts || {};
  const recCounts = translations.reccountCardsSubTexts || {};
  const calendar = translations.calendarPage || {};
  const inscripcions = translations.inscripcions || {};

  const stats = [
    { label: recCounts.firstText, value: "54" },
    { label: recCounts.secondText, value: "6" },
    { label: recCounts.thirdText, value: "112" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50 text-gray-800">
      {/* HERO */}
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-24 pb-16 laptop:flex-row laptop:items-center laptop:gap-16">
        {/* Columna texto */}
        <div className="flex-1 space-y-8">
          <header className="space-y-3">
            <p className="inline-flex items-center rounded-full bg-text/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-text">
              Esplai · Lleure · Transformació social
            </p>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight laptop:text-5xl text-text">
              {maintexts.text || "GAUDEIX I ATURA EL TEMPS"}
            </h1>
            <p className="max-w-xl text-base text-gray-700">
              {about.firstText ||
                "Som un espai de lleure on infants i joves descobreixen el món jugant, convivint i transformant el seu entorn."}
            </p>
          </header>

          {/* TextSlider explicant Què / Com / Qui / Quan */}
          <div className="rounded-2xl bg-white/80 p-5 shadow-lg shadow-gray-200 ring-1 ring-gray-200 backdrop-blur">
            <TextSlider />
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 laptop:flex-row laptop:items-center laptop:gap-4">
            <Link
              to="inscripcions"
              className="inline-flex items-center justify-center rounded-full bg-text px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-text/40 transition-colors hover:bg-text/90"
            >
              {inscripcions.title || "Inscripcions"}
            </Link>
            <Link
              to="/calendari"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2 text-xs font-semibold text-gray-700 transition-colors hover:border-text hover:text-text"
            >
              {calendar.title || "Calendari"} ·{" "}
              {calendar.text || "Veure activitats del curs"}
            </Link>
          </div>
        </div>

        {/* Columna slider imatges */}
        <aside className="flex-1">
          <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl shadow-gray-300 laptop:h-[420px]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
            <Slider />
          </div>
        </aside>
      </section>

      {/* FRANJA DE “STATS” */}
      <section className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 tablet:flex-row tablet:items-center tablet:justify-between">
          <div className="max-w-md">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">
              {about.titleinside || "SALUT, ALIMENTACIÓ, TERRITORI I EMOCIONS."}
            </h2>
            <p className="mt-2 text-sm text-gray-700">
              {about.secondText ||
                "Eduquem en valors com la solidaritat, la cooperació, el respecte i el compromís amb l’entorn."}
            </p>
          </div>
          <div className="grid w-full grid-cols-3 gap-4 tablet:max-w-md">
            {stats.map(
              (stat) =>
                stat.label && (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-sky-100 px-3 py-3 text-center text-xs shadow-inner shadow-gray-200"
                  >
                    <div className="text-lg font-bold text-text">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[0.7rem] uppercase tracking-wide text-gray-700">
                      {stat.label}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
