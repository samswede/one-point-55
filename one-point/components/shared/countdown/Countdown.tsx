import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC<{ targetDate: string }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="countdown" style={{ textAlign: 'center' }}>
        <div className="countdown-title" style={{ marginBottom: '20px' }}>
          Countdown title
          <p>Use this section to create urgency.</p>
        </div>
        <button style={{ marginBottom: '20px' }}>BOOK NOW</button>
        <div className="countdown-timer" style={{ display: 'flex' }}>
          <div className="countdown-item" style={{ margin: '0 10px' }}>
            {timeLeft.days}
            <span>DAYS</span>
          </div>
          <div className="countdown-item" style={{ margin: '0 10px' }}>
            {timeLeft.hours}
            <span>HOURS</span>
          </div>
          <div className="countdown-item" style={{ margin: '0 10px' }}>
            {timeLeft.minutes}
            <span>MINUTES</span>
          </div>
          <div className="countdown-item" style={{ margin: '0 10px' }}>
            {timeLeft.seconds}
            <span>SECONDS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
