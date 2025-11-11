import React, { useEffect, useState } from "react";
import { CalendarTextItem } from "../constants/CalendarConstants";
import { ref, get } from "firebase/database";
import { database } from "../fireBaseConfig";

type CalendarData = {
  calendarText: CalendarTextItem[];
};

const Timeline = () => {
  const [data, setData] = useState<CalendarData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbRef = ref(database);
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
          setData(snapshot.val() as CalendarData);
        } else {
          setData(null);
        }
      } catch (err: any) {
        console.error("Error fetching data:", err);
        setError("Hi ha hagut un problema en carregar el calendari.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex w-full items-center justify-center py-8">
        <p className="text-sm text-slate-300">
          Carregant el calendari d’activitats...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-500/40 bg-red-950/40 px-4 py-6 text-sm text-red-100">
        {error}
      </div>
    );
  }

  if (!data || !data.calendarText || data.calendarText.length === 0) {
    return (
      <div className="rounded-2xl border border-white/15 bg-slate-900/60 px-4 py-6 text-sm text-slate-200">
        Els monitors i les monitores estem actualitzant les dades del calendari.
        Torna a consultar-lo ben aviat.
      </div>
    );
  }

  const items = data.calendarText;

  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <article
          key={`${item.date}-${idx}`}
          className="rounded-2xl border border-white/12 bg-slate-950/70 p-4 tablet:p-5 shadow-inner shadow-black/40"
        >
          <div className="flex flex-col gap-2 tablet:flex-row tablet:items-baseline tablet:gap-4">
            {/* Fecha en “pill” */}
            <span className="inline-flex w-max items-center rounded-full bg-text/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-text">
              {item.date}
            </span>

            <div className="flex-1">
              <h3 className="text-base laptop:text-lg font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm laptop:text-base leading-relaxed text-slate-200">
                {item.text}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Timeline;
