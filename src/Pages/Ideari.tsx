import React from "react";
import Instrument from "../Components/Instrument";
import { useI18n } from "../Components/i18nContext";

export const Ideari = () => {
  const { translations } = useI18n();
  const titles = translations.titles || {};
  const pageTitle = titles.ideas || "Ideari";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <header className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-text">
            Esplai Can Cristu
          </p>
          <h1 className="text-balance text-4xl desktop:text-5xl font-extrabold tracking-tight text-text">
            {pageTitle}
          </h1>
        </header>

        <div className="rounded-2xl bg-white/5 p-4 tablet:p-6 laptop:p-8 shadow-lg shadow-black/40 ring-1 ring-white/10">
          <Instrument />
        </div>
      </section>
    </main>
  );
};
