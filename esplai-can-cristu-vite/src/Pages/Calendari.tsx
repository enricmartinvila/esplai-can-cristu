import React from 'react';
import { calendarText } from '../constants/CalendarConstants';
import Timeline from '../Components/Timeline';
import { useI18n } from '../Components/i18nContext';

const Calendari = () => {
  const { translations, handleSelectLanguage } = useI18n();

  return (
    <div className="w-full flex flex-col items-center text-center p-4">
      <h1 className="text-2xl mobile:text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl mb-4 text-custom-text">
        {translations.calendarPage.title}
      </h1>
      <p className="text-base mobile:text-lg tablet:text-xl laptop:text-2xl desktop:text-3xl mb-8 text-custom-text">
        {translations.calendarPage.text}
      </p>
      <div className="w-full flex justify-center items-center">
        <Timeline />
      </div>
    </div>
  );
};

export default Calendari;