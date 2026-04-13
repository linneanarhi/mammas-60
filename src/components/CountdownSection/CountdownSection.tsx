import './CountdownSection.scss';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { partyData } from '../../data/partyData';

type CountdownUnit = {
  label: string;
  value: number;
};

function getTimeLeft(targetDate: string): CountdownUnit[] {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return [
      { label: 'Dagar', value: 0 },
      { label: 'Timmar', value: 0 },
      { label: 'Minuter', value: 0 },
      { label: 'Sekunder', value: 0 },
    ];
  }

  const totalSeconds = Math.floor(difference / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    { label: 'Dagar', value: days },
    { label: 'Timmar', value: hours },
    { label: 'Minuter', value: minutes },
    { label: 'Sekunder', value: seconds },
  ];
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(partyData.targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft(partyData.targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="countdown section" aria-labelledby="countdown-title">
      <div className="site-container">
        <motion.div
          className="countdown__intro"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Nedräkning</span>
          <h2 className="section-title" id="countdown-title">
            {partyData.countdownTitle}
          </h2>
          <p className="section-copy">{partyData.countdownText}</p>
        </motion.div>

        <motion.div
          className="countdown__band"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
          role="timer"
          aria-live="polite"
        >
          {timeLeft.map((unit) => (
            <article key={unit.label} className="countdown__item">
              <strong>{String(unit.value).padStart(2, '0')}</strong>
              <span>{unit.label}</span>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
