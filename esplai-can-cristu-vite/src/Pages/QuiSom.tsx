import React from 'react';
import RecountCard from '../Components/ReccountCard';
import { useI18n } from '../Components/i18nContext';

const QuiSom = () => {
  const { translations } = useI18n();

  return (
    <div className="flex flex-col w-full items-center justify-center p-4">
      <h1 className="text-5xl desktop:text-6xl mt-20 mb-24 text-white">{translations.quisom.title}</h1>
      <div className="flex-col mobile:flex-col tablet:flex-row justify-center gap-8 mb-8">
        <div className="flex flex-col gap-4 mobile:gap-4 tablet:gap-10 tablet:flex-row">
          <RecountCard
            count={54}
            color="bg-[#9e3841]"
            subText={translations.reccountCardsSubTexts.firstText}
          />
          <RecountCard
            count={6}
            color="bg-[#8b3a3e]"
            subText={translations.reccountCardsSubTexts.secondText}
          />
          <RecountCard
            count={112}
            color="bg-[#b85562]"
            subText={translations.reccountCardsSubTexts.thirdText}
          />
        </div>
      </div>
      <div className="mb-8 text-xl p-12 desktop:text-2xl items-center laptop:p-20 desktop:p-24 text-white">
        <p className="mb-8">{translations.quisom.text1}</p>
        <p className="mb-8">{translations.quisom.text2}</p>
        <p className="mb-8">{translations.quisom.text3}</p>
      </div>
      <div>
        <div>
          <h1 className="text-5xl desktop:text-6xl mb-12 text-center text-white">
            {translations.historiaDelCentre.title}
          </h1>
        </div>
        <div className="mb-8 text-xl p-12 desktop:text-2xl items-center laptop:p-20 desktop:p-24 text-white">
          <p className="mb-12">{translations.historiaDelCentre.text1}</p>
          <p className="mb-12">{translations.historiaDelCentre.text2}</p>
          <p className="mb-12">{translations.historiaDelCentre.text3}</p>
        </div>
      </div>
    </div>
  );
};

export default QuiSom;
