import React from 'react';
import { useI18n } from '../Components/i18nContext';
import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';

export default function Contacte() {
  const { translations } = useI18n();

  return (
    <div className="flex-col items-center justify-center text-center">
      <h1 className="text-5xl desktop:text-6xl pb-12 p-5 font-bold text-white">
        {translations.titles.contact}
      </h1>
      <div className="flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.6332084795445!2d1.8204971764964035!3d41.72843307477101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4580d736c2c79%3A0xcf0af0fca977fed9!2sCarrer%20de%20Carri%C3%B3%2C%2022%2C%2008242%20Manresa%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1731952799717!5m2!1ses!2ses"
          style={{ width: '80%', height: '500px' }}
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex-color w-full h-44 items-center justify-center text-center">
        <div className="flex justify-center pt-4">
          <ul className="flex flex-col items-center justify-center md:items-start">
            <li className="flex items-center my-2 gap-2 text-text hover:underline">
              <MapPinIcon className="h-6 w-6" />
              <span>
                <a
                  href="https://maps.app.goo.gl/5RJqMXFDqSaJkfdMA"
                  className="font-bold"
                >
                  Carrer de Carrió, 22, 08242 Manresa, Barcelona
                </a>
              </span>
            </li>
            <li className="flex items-center justify-start my-2 gap-2 text-text hover:underline">
              <EnvelopeIcon className="h-6 w-6" />
              <a
                className="cursor-pointer font-semibold"
                href="esplai.cancristu@gmail.com"
              >
                esplai.cancristu@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
