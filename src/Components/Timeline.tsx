import React, { useEffect, useState } from 'react';
import { CalendarTextItem } from '../constants/CalendarConstants';
import { ref, get } from 'firebase/database';
import { database } from '../fireBaseConfig';

const Timeline = () => {
  const [data, setData] = useState<CalendarTextItem[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(database);
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          setData(snapshot.val() as CalendarTextItem[]);
        } else {
          console.log("No data available");
          setData(null);
        }
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);  

  if (!data) {
    return <div>Els Monitors/es estem actualitzant les dades</div>;
  }

  return (
    <ul className="relative h-full border-s border-gran py-12">
      {data["calendarText"].map((calendarTextItem) => (
        <li className="mb-14 ms-6">
          <div className="absolute w-4 h-4 bg-gran rounded-full mt-2 -start-2 border border-white" />
          <time className="mb-2 text-lg font-bold leading-none text-text">
            {calendarTextItem.date}
          </time>
          <h3 className="text-2xl font-bold text-white">{calendarTextItem.title}</h3>
          <p className="mb-6 max-w-80 text-lg font-normal text-text">{calendarTextItem.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default Timeline;
