import React from "react";
import RecountCard from "../Components/ReccountCard";
import { useI18n } from "../Components/i18nContext";

const QuiSom = () => {
  const { translations } = useI18n();

  const recCounts = translations.reccountCardsSubTexts || {};
  const quisom = translations.quisom || {};
  const historia = translations.historiaDelCentre || {};

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* QUI SOM */}
      <section className="mx-auto max-w-6xl px-6 pt-28 pb-16">
        <header className="text-center mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-text">
            Esplai Can Cristu
          </p>
          <h1 className="text-balance text-4xl desktop:text-5xl font-extrabold tracking-tight text-text">
            {quisom.title}
          </h1>
        </header>

        {/* Recount cards */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col gap-4 tablet:flex-row tablet:gap-6">
            <RecountCard
              count={54}
              color="bg-text"
              subText={recCounts.firstText}
            />
            <RecountCard
              count={6}
              color="bg-text/90"
              subText={recCounts.secondText}
            />
            <RecountCard
              count={112}
              color="bg-text/80"
              subText={recCounts.thirdText}
            />
          </div>
        </div>

        {/* Text bloque QUI SOM */}
        <article className="rounded-2xl bg-white/5 p-6 laptop:p-10 desktop:p-12 shadow-lg shadow-black/40 ring-1 ring-white/10 text-base desktop:text-lg leading-relaxed text-slate-100 space-y-6">
          <p>{quisom.text1}</p>
          <p>{quisom.text2}</p>
          <p>{quisom.text3}</p>
        </article>
      </section>

      {/* HISTÒRIA DEL CENTRE */}
      <section className="border-t border-white/10 bg-slate-900/40">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <header className="text-center mb-10">
            <h2 className="text-balance text-3xl desktop:text-4xl font-bold tracking-tight text-text">
              {historia.title}
            </h2>
          </header>

          <article className="rounded-2xl bg-white/5 p-6 laptop:p-10 desktop:p-12 shadow-lg shadow-black/40 ring-1 ring-white/10 text-base desktop:text-lg leading-relaxed text-slate-100 space-y-8">
            <p>{historia.text1}</p>
            <p>{historia.text2}</p>
            <p>{historia.text3}</p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default QuiSom;
