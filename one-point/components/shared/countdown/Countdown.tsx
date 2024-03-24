import React, { useState, useEffect } from 'react';

import { CalendarDemo } from '@/components/shared/calendar/CalendarDemo';
import { Button } from '@/components/ui/button';

import { FormWaitlist } from '@/components/shared/form/FormWaitlist';

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
    <div className="bg-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="countdown" style={{ textAlign: 'center' }}>
        <div className="countdown-title text-primary-foreground" style={{ marginBottom: '20px' }}>
          <h1 className="mx-auto mt-4 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
            Join the Waitlist
          </h1>
          
          <p 
            className="mx-auto mt-4 max-w-[700px] px-2 text-sm">
              Express your interest — limited spaces mean a chance for an exclusive invite.
          </p>
          
        </div>

      

        <FormWaitlist />


        <div className="countdown-title text-primary-foreground mt-4" style={{ marginBottom: '20px' }}>
          <h1 className="mx-auto text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
            Registration Closes in
          </h1> 
        </div>
        

        <div className="countdown-timer text-primary-foreground mx-auto text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl" style={{ display: 'flex', marginBottom: '20px' }}>
          <div className="countdown-item flex-col mt-2" style={{ margin: '0 10px' }}>
            <div>{timeLeft.days}</div>
            <div> DAYS</div>
          </div>
          <div className="countdown-item flex-col mt-2" style={{ margin: '0 10px' }}>
            <div>{timeLeft.hours}</div>
            <div> HOURS</div>
          </div>
          <div className="countdown-item flex-col mt-2" style={{ margin: '0 10px' }}>
            <div>{timeLeft.minutes}</div>
            <div> MINUTES</div>
          </div>
          <div className="countdown-item flex-col mt-2" style={{ margin: '0 10px' }}>
            <div>{timeLeft.seconds}</div>
            <div> SECONDS</div>
          </div>
        </div>

        

        
      </div>


    </div>
  );
};

export default Countdown;

// Use

//<Countdown targetDate="2024-12-31T23:59:59" />
