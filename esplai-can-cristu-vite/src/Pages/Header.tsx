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
    <header className={`w-full bg-[#F4C3C9] mb-2 text-black py-4 flex items-center shadow-md fixed top-0 z-10 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      {/* Logo */}
      <div className="flex items-center mx-10">
        <img src="/images/logo1.jpeg" alt="Logo" className={`transition-all duration-300 ${isScrolled ? 'w-12' : 'w-16'}`} />
      </div>

      {/* Contenedor centrado para el texto del menú */}
      <div className="w-full flex mx-16">
        <nav className={"w-full mobile:hidden tablet:block transition-transform duration-300 ease-in-out"}>
          <ul className="flex flex-row justify-between md:flex-row gap-2 font-bold text-[#9e3841] mobile:text-xs tablet:text-base laptop:text-xl">
            <li>
              <Link to={'/'}>{translations.menu.main}</Link>
            </li>
            <li>
              <Link to={'/qui-som'}>{translations.menu.who}</Link>
            </li>
            <li>
              <Link to={'/ideari'}>{translations.menu.ideas}</Link>
            </li>
            <li>
              <Link to={'/calendari'}>{translations.menu.calendar}</Link>
            </li>
            <li>
              <Link to={'/inscripcions'}>{translations.menu.inscriptions}</Link>
            </li>
            <li>
              <Link to={'/contacte'}>{translations.menu.contact}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    </>
  );
}