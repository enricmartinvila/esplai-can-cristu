import React, { useState } from "react";
import { useI18n } from "../Components/i18nContext";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={handleOutsideClick}
    >
      <div className="relative w-full max-w-3xl rounded-2xl border border-gray-200 bg-white px-6 py-6 tablet:px-8 tablet:py-8 shadow-2xl shadow-gray-300">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text">Taula de grups</h2>
          <button
            className="text-gray-600 hover:text-gray-900 transition-colors"
            onClick={onClose}
            aria-label="Tancar"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

const Inscripcions = () => {
  const { translations } = useI18n();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50 text-gray-800">
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 pb-16">
        {/* Títol */}
        <header className="mb-6 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-text">
            Esplai Can Cristu
          </p>
          <h1 className="text-4xl desktop:text-5xl font-extrabold tracking-tight text-text">
            {translations.inscripcions.title}
          </h1>
        </header>

        {/* Ajuda + icona info */}
        <button
          type="button"
          onClick={openModal}
          className="mb-6 inline-flex items-center justify-center gap-2 rounded-full border border-text/40 bg-white px-4 py-2 text-sm mobile:text-base text-gray-700 shadow-sm shadow-gray-200 transition-transform hover:scale-105 hover:bg-sky-50"
        >
          <InformationCircleIcon className="h-5 w-5 text-text" />
          <span className="text-center">{translations.inscripcions.help}</span>
        </button>

        {/* Formulari (iframe) */}
        <div className="w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-lg shadow-gray-200">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdztNhBJTgHhbqXwgKznc4052USWdizVr6GPCf2hH2xYmCgAA/viewform?embedded=true"
            className="h-[900px] w-full"
          >
            S&#39;està carregant…
          </iframe>
        </div>
      </section>

      {/* Modal tabla de grupos */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <table className="min-w-full border-separate border-spacing-0">
            <thead className="bg-text/90">
              <tr>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white">
                  {translations.inscripcions.year}
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-wide text-white">
                  {translations.inscripcions.group}
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { year: "2018 - 2019", group: "Xalaps" },
                { year: "2016 - 2017", group: "Mixus" },
                { year: "2014 - 2015", group: "Buxis" },
                { year: "2012 - 2013", group: "Paxops" },
                { year: "2010 - 2011", group: "Xirucs" },
                { year: "2008 - 2009", group: "Xirois" },
              ].map((row) => (
                <tr
                  key={row.year}
                  className="border-t border-gray-200 bg-sky-50 hover:bg-sky-100"
                >
                  <td className="px-4 py-3 text-center text-sm text-gray-700">
                    {row.year}
                  </td>
                  <td className="px-4 py-3 text-center text-sm font-semibold text-text">
                    {row.group}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Modal>
    </main>
  );
};

export default Inscripcions;
