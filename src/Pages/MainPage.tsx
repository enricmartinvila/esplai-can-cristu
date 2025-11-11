// src/Pages/MainPage.jsx
import React from "react";
import Slider from "../Components/Slider";
import TextSlider from "../Components/TextSlider";
import { useI18n } from "../Components/i18nContext";

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
    <main className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <section className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pt-24 pb-16 laptop:flex-row laptop:items-center laptop:gap-16">
        {/* Columna texto */}
        <div className="flex-1 space-y-8">
          <header className="space-y-3">
            <p className="inline-flex items-center rounded-full bg-text/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-text">
              Esplai · Lleure · Transformació social
            </p>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight laptop:text-5xl text-text">
              {maintexts.text || "GAUDEIX I ATURA EL TEMPS"}
            </h1>
            <p className="max-w-xl text-base text-slate-200">
              {about.firstText ||
                "Som un espai de lleure on infants i joves descobreixen el món jugant, convivint i transformant el seu entorn."}
            </p>
          </header>

          {/* TextSlider explicant Què / Com / Qui / Quan */}
          <div className="rounded-2xl bg-white/5 p-5 shadow-lg shadow-black/40 ring-1 ring-white/10 backdrop-blur">
            <TextSlider />
          </div>

          {/* CTAs */}
          <div className="flex flex-col gap-3 laptop:flex-row laptop:items-center laptop:gap-4">
            <a
              href="inscripcions"
              className="inline-flex items-center justify-center rounded-full bg-text px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-text/40 transition-colors hover:bg-text/90"
            >
              {inscripcions.title || "Inscripcions"}
            </a>
            <a
              href="/calendari"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-xs font-semibold text-slate-100 transition-colors hover:border-text hover:text-text"
            >
              {calendar.title || "Calendari"} ·{" "}
              {calendar.text || "Veure activitats del curs"}
            </a>
          </div>
        </div>

        {/* Columna slider imatges */}
        <aside className="flex-1">
          <div className="relative h-[320px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl shadow-black/60 laptop:h-[420px]">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <Slider />
          </div>
        </aside>
      </section>

      {/* FRANJA DE “STATS” */}
      <section className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 tablet:flex-row tablet:items-center tablet:justify-between">
          <div className="max-w-md">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-text">
              {about.titleinside || "SALUT, ALIMENTACIÓ, TERRITORI I EMOCIONS."}
            </h2>
            <p className="mt-2 text-sm text-slate-200">
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
                    className="rounded-2xl bg-white/5 px-3 py-3 text-center text-xs shadow-inner shadow-black/40"
                  >
                    <div className="text-lg font-bold text-text">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[0.7rem] uppercase tracking-wide text-slate-200">
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
