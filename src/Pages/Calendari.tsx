import React from "react";
import Timeline from "../Components/Timeline";
import { useI18n } from "../Components/i18nContext";

const Calendari = () => {
  const { translations } = useI18n();
  const calendar = translations.calendarPage || {};

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50 text-gray-800">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-16 text-center">
        <header className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-text">
            Esplai Can Cristu
          </p>
          <h1 className="text-balance text-4xl desktop:text-5xl font-extrabold tracking-tight text-text">
            {calendar.title || "Calendari"}
          </h1>
          <p className="mt-4 max-w-2xl text-sm mobile:text-base laptop:text-lg text-gray-700">
            {calendar.text ||
              "Consulta totes les activitats, sortides i esdeveniments programats durant el curs."}
          </p>
        </header>

        <div className="mt-6 w-full rounded-2xl bg-white/90 p-4 tablet:p-6 laptop:p-8 shadow-lg shadow-gray-200 ring-1 ring-gray-200">
          <Timeline />
        </div>
      </section>
    </main>
  );
};

export default Calendari;
