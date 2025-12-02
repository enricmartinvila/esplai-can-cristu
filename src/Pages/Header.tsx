// src/Components/Header.jsx
import React, { useState, useEffect } from "react";
import { useI18n } from "../Components/i18nContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { translations, handleSelectLanguage, currLang } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    handleSelectLanguage(newLanguage);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { to: "/", label: translations.menu.main },
    { to: "/qui-som", label: translations.menu.who },
    { to: "/ideari", label: translations.menu.ideas },
    { to: "/calendari", label: translations.menu.calendar },
    { to: "/inscripcions", label: translations.menu.inscriptions },
    { to: "/contacte", label: translations.menu.contact },
  ];

  return (
    <>
      <header
        className={[
          "fixed inset-x-0 top-0 z-30",
          "transition-all duration-300",
          "border-b border-gray-200",
          "backdrop-blur bg-white/95",
          isScrolled ? "py-2" : "py-4",
        ].join(" ")}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 tablet:px-6">
          {/* IZQUIERDA: logo + nombre simplificado */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            >
              <img
                src="/images/logo1.jpeg"
                alt="Esplai Can Cristu"
                className={`rounded-full border border-text/40 object-cover transition-all duration-300 ${
                  isScrolled ? "h-10 w-10" : "h-12 w-12"
                }`}
              />
              <span className="hidden tablet:inline text-sm font-semibold uppercase tracking-[0.18em] text-text">
                Esplai Can Cristu
              </span>
            </Link>
          </div>

          {/* Botón hamburguesa (móvil) */}
          <button
            onClick={toggleMenu}
            className="tablet:hidden text-text"
            aria-label="Obrir menú"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Menú escritorio */}
          <nav className="hidden tablet:flex items-center gap-8">
            <ul className="flex items-center gap-6 font-semibold text-sm laptop:text-base">
              {menuItems.map((item) => (
                <li
                  key={item.to}
                  className="transition-transform duration-200 hover:scale-105"
                >
                  <Link
                    to={item.to}
                    className="text-text hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Selector idioma */}
            <div className="relative ml-4">
              <select
                value={currLang}
                onChange={handleChange}
                className="appearance-none rounded-full border border-gray-300 bg-white pr-8 pl-3 py-1 text-xs font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-text"
              >
                <option value="ca">CA</option>
                <option value="es">ES</option>
                <option value="en">EN</option>
              </select>

              {/* icono flecha */}
              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </nav>
        </div>
      </header>

      {/* Menú mòbil pantalla completa */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-gradient-to-b from-sky-100 via-blue-50 to-sky-100 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-text"
            aria-label="Tancar menú"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <nav className="flex flex-col items-center gap-8">
            <ul className="flex flex-col items-center gap-6 text-2xl font-bold text-text">
              {menuItems.map((item) => (
                <li
                  key={item.to}
                  className="transition-transform duration-200 hover:scale-110"
                >
                  <Link to={item.to} onClick={toggleMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Selector idioma en móvil */}
            <div className="relative mt-8">
              <select
                value={currLang}
                onChange={handleChange}
                className="appearance-none rounded-full border border-gray-300 bg-white pr-8 pl-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-text"
              >
                <option value="ca">Català</option>
                <option value="es">Castellano</option>
                <option value="en">English</option>
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
