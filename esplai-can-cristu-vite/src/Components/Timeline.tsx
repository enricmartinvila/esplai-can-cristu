import React from 'react';
import { calendarText } from '../constants/CalendarConstants';

const Timeline = () => {
  return (
    <ol className="relative border-s border-gran">
      {calendarText.map((item, index) => (
        <li key={index} className="mb-14 ms-6">
          <div className="absolute w-4 h-4 bg-gran rounded-full mt-2 -start-2 border border-white"></div>
          <time className="mb-2 text-lg font-normal leading-none text-gray-400">
            {item.date}
          </time>
          <h3 className="text-2xl font-semibold text-[#9e3841]">
            {item.title}
          </h3>
          <p className="mb-6 text-lg font-normal text-gray-500">{item.text}</p>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
