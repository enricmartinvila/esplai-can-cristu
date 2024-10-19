import React from 'react';
import Slider from '../Components/Slider';
import { useI18n } from '../Components/i18nContext';

export default function MainPage() {
  const { translations } = useI18n();

  return (
    <>
      <div id="main" className="mb-20 relative">
        <div className="text-center font-bold relative">
          <div className="w-full relative">
            <Slider />
          </div>
        </div>
      </div>
    </>
  );
}
