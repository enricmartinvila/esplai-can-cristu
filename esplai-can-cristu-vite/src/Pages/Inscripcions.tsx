import React from 'react';
import { useI18n } from '../Components/i18nContext';

const Inscripcions = () => {
  const { translations, handleSelectLanguage } = useI18n();

  return (
    <>
      <div className="w-full h-screen flex flex-wrap tablet:flex-col laptop:flex-row">
        <div className="w-full h-1/2 tablet:w-full tablet:h-1/2 laptop:w-2/5 laptop:h-full border border-red overflow-auto bg-text">
          <table className="w-full h-fit border border-gray-200">
            <thead className=" text-white">
              <tr className="flex w-full py-3 border-b">
                <th className="flex-1 text-center uppercase">Year</th>
                <th className="flex-1 text-center uppercase">Group</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="flex w-full py-3">
                <td className="flex-1 text-center text-white">2018 - 2019</td>
                <td className="flex-1 text-center text-white">Mixus</td>
              </tr>
              <tr className="flex w-full py-3">
                <td className="flex-1 text-center text-white">2016 - 2017</td>
                <td className="flex-1 text-center text-white">Mixus</td>
              </tr>
              <tr className="flex w-full py-3">
                <td className="flex-1 text-center text-white">2014 - 2015</td>
                <td className="flex-1 text-center text-white">Buxis</td>
              </tr>
              <tr className="flex w-full py-3 ">
                <td className="flex-1 text-center text-white">2012 - 2013</td>
                <td className="flex-1 text-center text-white">Paxops</td>
              </tr>
              <tr className="flex w-full py-3">
                <td className="flex-1 text-center text-white">2010 - 2011</td>
                <td className="flex-1 text-center text-white">Xirucs</td>
              </tr>
              <tr className="flex w-full py-3 ">
                <td className="flex-1 text-center text-white">2008 - 2009</td>
                <td className="flex-1 text-center text-white">Xirois</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full justify-center h-1/2 tablet:w-full tablet:h-1/2 laptop:w-3/5 laptop:h-full border border-blue flex">
          <div className="flex flex-col text-center items-center">
            <h1 className="text-5xl desktop:text-6xl mt-20 mb-20 text-center  text-white">
              {translations.inscripcions.title}
            </h1>
            <p className="p-6 text-xl desktop:text-3xl text-text pb-6">
              Completa el seguent formulari per inscriure el teu infant a
              l'esplai:
            </p>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdztNhBJTgHhbqXwgKznc4052USWdizVr6GPCf2hH2xYmCgAA/viewform?embedded=true"
              className="w-full h-full hidden laptop:block"
            >
              S&#39;està carregant…
            </iframe>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdztNhBJTgHhbqXwgKznc4052USWdizVr6GPCf2hH2xYmCgAA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center text-xl font-bold h-14 rounded-md bg-bg laptop:hidden flex items-center justify-center"
            >
              {translations.inscripcions.enter_form_button}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inscripcions;
