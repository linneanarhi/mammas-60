import './Countdown.scss';
import { useEffect, useState } from 'react';

const targetDate = new Date('2026-08-15T15:00:00').getTime();

function getTimeLeft() {
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="countdown panel-card" aria-label="Nedräkning till festen">
      <p className="countdown__label">countdown to party time</p>
      <h3 className="countdown__title">Snart är det dags 🎉</h3>

      <div className="countdown__grid">
        <div>
          <strong>{timeLeft.days}</strong>
          <span>dagar</span>
        </div>
        <div>
          <strong>{timeLeft.hours}</strong>
          <span>timmar</span>
        </div>
        <div>
          <strong>{timeLeft.minutes}</strong>
          <span>minuter</span>
        </div>
        <div>
          <strong>{timeLeft.seconds}</strong>
          <span>sekunder</span>
        </div>
      </div>
    </section>
  );
}