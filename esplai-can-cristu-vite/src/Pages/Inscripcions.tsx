import React, { useState } from 'react';
import { useI18n } from '../Components/i18nContext';
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
    >
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <div className="flex justify-between items-center pb-8">
          <h1 className="text-xl font-bold">Taula de grups</h1>
          <button className="text-gray-600 cursor-pointer" onClick={onClose}>
            <XMarkIcon className="w-6 h-6" />
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
    <>
      <div className="flex flex-wrap tablet:flex-col laptop:flex-row overflow-y-auto overflow-x-hidden">
        <div className="w-full justify-center h-1/2 tablet:w-full tablet:h-1/2 laptop:h-full flex">
          <div className="flex flex-col text-center items-center min-w-[700px]">
            <h1 className="text-5xl desktop:text-6xl mt-20 mb-20 text-center text-white">
              {translations.inscripcions.title}
            </h1>
            <div
              className="flex cursor-pointer items-center justify-center duration-300 ease-in-out transform hover:scale-105"
              onClick={openModal}
            >
              <p className="py-6 px-3 text-base desktop:text-xl text-text pb-6 ">
                {translations.inscripcions.help}
              </p>
              <InformationCircleIcon className="w-8 h-8 text-white" />
            </div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdztNhBJTgHhbqXwgKznc4052USWdizVr6GPCf2hH2xYmCgAA/viewform?embedded=true"
              className="w-1/2 tablet:w-full min-h-[1000px]"
            >
              S&#39;està carregant…
            </iframe>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <table className="w-full h-fit border rounded border-gray-200 bg-gradient-to-tl from-text to-[#dd853e]">
          <thead className=" text-text ">
            <tr className="flex w-full py-3 border-b font-bold text-xl">
              <th className="flex-1 text-center text-white uppercase">
                {translations.inscripcions.year}
              </th>
              <th className="flex-1 text-center text-white uppercase">
                {translations.inscripcions.group}
              </th>
            </tr>
          </thead>
          <tbody className="bg-gradient-to-tl from-text to-[#dd853e] font-semibold">
            <tr className="flex w-full py-3">
              <td className="flex-1 text-center text-white">2018 - 2019</td>
              <td className="flex-1 text-center text-white">Xalaps</td>
            </tr>
            <tr className="flex w-full py-3">
              <td className="flex-1 text-center text-white">2016 - 2017</td>
              <td className="flex-1 text-center text-white">Mixus</td>
            </tr>
            <tr className="flex w-full py-3">
              <td className="flex-1 text-center text-white">2014 - 2015</td>
              <td className="flex-1 text-center text-white">Buxis</td>
            </tr>
            <tr className="flex w-full py-3">
              <td className="flex-1 text-center text-white">2012 - 2013</td>
              <td className="flex-1 text-center text-white">Paxops</td>
            </tr>
            <tr className="flex w-full py-3">
              <td className="flex-1 text-center text-white">2010 - 2011</td>
              <td className="flex-1 text-center text-white">Xirucs</td>
            </tr>
            <tr className="flex w-full py-3">
              <td className="flex-1 text-center text-white">2008 - 2009</td>
              <td className="flex-1 text-center text-white">Xirois</td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </>
  );
};

export default Inscripcions;
