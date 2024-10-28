import React from 'react';
import RecountCard from '../Components/ReccountCard';
import { useI18n } from '../Components/i18nContext';

const QuiSom = () => {
  const { translations, handleSelectLanguage } = useI18n();

  return (
    <div className="flex flex-col w-full items-center justify-center p-4">
      <h1 className="text-4xl mb-8">{translations.quisom.title}</h1>
      <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 gap-8">
        <RecountCard count={115} color="bg-[#9e3841]" subText={translations.reccountCardsSubTexts.firstText} />
        <RecountCard count={6} color="bg-[#8b3a3e]" subText={translations.reccountCardsSubTexts.secondText} />
        <RecountCard count={114} color="bg-[#b85562]" subText={translations.reccountCardsSubTexts.thirdText} />
      </div>
    </div>
  );
};

export default QuiSom;
