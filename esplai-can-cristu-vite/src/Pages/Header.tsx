import React, { useState, useEffect } from 'react';
import { useI18n } from '../Components/i18nContext';
import { Link } from 'react-router-dom';

export default function Header() {
  const { translations, handleSelectLanguage } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleChange = (event) => {
    const newLanguage = event.target.value;
    handleSelectLanguage(newLanguage);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`w-full mb-2 py-4 flex items-center fixed top-0 z-10 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}
      >
        {/* Logo */}
        <div className="flex items-center mx-10 bg-transparent logo-container">
          <img
            src="/images/logo1.jpeg"
            alt="Logo"
            className={`transition-all min-w-10 duration-300 logo ${isScrolled ? 'w-12' : 'w-16'}`}
          />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="absolute top-4 right-4 tablet:hidden">
          <button onClick={toggleMenu} className="text-[#9e3841]">
            <svg
              className="w-6 h-6"
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
              ></path>
            </svg>
          </button>
        </div>

        {/* Contenedor centrado para el texto del menú */}
        <div className="w-full flex mx-16">
          <nav
            className={
              'w-full hidden tablet:block transition-transform duration-300 ease-in-out'
            }
          >
            <ul className="flex flex-row items-center md:flex-row  justify-between font-bold text-white mobile:text-xs tablet:text-base laptop:text-xl">
              <li className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                <Link to={'/'} className="text-[#9e3841]">
                  {translations.menu.main}
                </Link>
              </li>
              <li className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                <Link to={'/qui-som'} className="text-[#9e3841]">
                  {translations.menu.who}
                </Link>
              </li>
              <li className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                <Link to={'/ideari'} className="text-[#9e3841]">
                  {translations.menu.ideas}
                </Link>
              </li>
              <li className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                <Link to={'/calendari'} className="text-[#9e3841]">
                  {translations.menu.calendar}
                </Link>
              </li>
              <li className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                <Link to={'/inscripcions'} className="text-[#9e3841]">
                  {translations.menu.inscriptions}
                </Link>
              </li>
              <li className="transition-transform duration-300 ease-in-out transform hover:scale-110">
                <Link to={'/contacte'} className="text-[#9e3841]">
                  {translations.menu.contact}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-[#e6a2ab] to-[#dd853e] z-20 flex flex-col items-center justify-center">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-[#9e3841]"
          >
            <svg
              className="w-6 h-6"
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
              ></path>
            </svg>
          </button>
          <nav>
            <ul className="flex flex-col items-center gap-8 font-bold text-[#9e3841] text-2xl">
              <li className="duration-300 ease-in-out transform hover:scale-110">
                <Link to={'/'} onClick={toggleMenu}>
                  {translations.menu.main}
                </Link>
              </li>
              <li className="duration-300 ease-in-out transform hover:scale-110">
                <Link to={'/qui-som'} onClick={toggleMenu}>
                  {translations.menu.who}
                </Link>
              </li>
              <li className="duration-300 ease-in-out transform hover:scale-110">
                <Link to={'/ideari'} onClick={toggleMenu}>
                  {translations.menu.ideas}
                </Link>
              </li>
              <li className="duration-300 ease-in-out transform hover:scale-110">
                <Link to={'/calendari'} onClick={toggleMenu}>
                  {translations.menu.calendar}
                </Link>
              </li>
              <li className="duration-300 ease-in-out transform hover:scale-110">
                <Link to={'/inscripcions'} onClick={toggleMenu}>
                  {translations.menu.inscriptions}
                </Link>
              </li>
              <li className="duration-300 ease-in-out transform hover:scale-110">
                <Link to={'/contacte'} onClick={toggleMenu}>
                  {translations.menu.contact}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
