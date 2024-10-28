import React, { useEffect, useState } from 'react';

type RecountCardProps = {
    count: number;
    color: string;
    subText: string;
};

const RecountCard = ({ count, color, subText }: RecountCardProps) => {
    const [currentCount, setCurrentCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = count;
        const duration = 1000;
        const incrementTime = Math.abs(Math.floor(duration / end));
        const timer = setInterval(() => {
            start += 1;
            setCurrentCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);
        return () => clearInterval(timer);
    }, [count]);

    return (
        <div className={`${color} text-white shadow-md rounded-lg p-6 text-center`}>
            <div className="text-4xl font-bold text-white">
                {currentCount}
            </div>
            <div className="text-lg mt-2">
                {subText}
            </div>
        </div>
    );
};

export default RecountCard;