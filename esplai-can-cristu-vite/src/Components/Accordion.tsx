import React, { useState } from 'react';
import { ideariText } from '../constants/IdeariConstants';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(1); // Set the second accordion to be open by default
  const [openSubIndex, setOpenSubIndex] = useState({});

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSubToggle = (index, subIndex) => {
    setOpenSubIndex((prevState) => ({
      ...prevState,
      [index]: prevState[index] === subIndex ? null : subIndex,
    }));
  };

  return (
    <>
      {ideariText.ideari.map((item, index) => (
        <div key={index}>
          <h2>
            <button
              type="button"
              className={`flex items-center bg-transparent justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-[#9e3841] gap-3 ${
                index === 0
                  ? 'rounded-t-xl'
                  : index === ideariText.ideari.length - 1 && openIndex !== 1
                    ? 'rounded-b-xl'
                    : ''
              }`}
              onClick={() => handleToggle(index)}
            >
              <span className="text-[#9e3841] font-semibold text-base mobile:text-lg tablet:text-xl laptop:text-xl desktop:text-2xl">
                {item.title}
              </span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 ${openIndex === index ? '' : 'rotate-180'} shrink-0`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="#9e3841"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div className={`${openIndex === index ? '' : 'hidden'}`}>
            <div className="p-5 border border-b border-[#9e3841] bg-transparent">
              <p className="mb-2 text-[#9e3841] text-sm mobile:text-base tablet:text-lg laptop:text-xl desktop:text-2xl">
                {item.text}
              </p>
              {item.valors && (
                <div>
                  {item.valors.map((valor, subIndex) => (
                    <div key={subIndex}>
                      <h2>
                        <button
                          type="button"
                          className="flex items-center justify-between w-full p-5 py-3 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 gap-3"
                          onClick={() => handleSubToggle(index, subIndex)}
                        >
                          <span className="text-[#9e3841] font-semibold text-base mobile:text-lg tablet:text-base laptop:text-xl desktop:text-2xl">
                            {valor.title}
                          </span>
                          <svg
                            data-accordion-icon
                            className={`w-3 h-3 ${openSubIndex[index] === subIndex ? '' : 'rotate-180'} shrink-0`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="#9e3841"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5 5 1 1 5"
                            />
                          </svg>
                        </button>
                      </h2>
                      <div
                        className={`${openSubIndex[index] === subIndex ? '' : 'hidden'}`}
                      >
                        <div className="p-5 border border-b-0 border-gray-200">
                          <p className="text-[#9e3841] text-sm mobile:text-base tablet:text-lg laptop:text-xl desktop:text-2xl">
                            {valor.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Accordion;
