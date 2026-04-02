import './Hero.scss';
import { partyData } from '../../data/partyData';
import { Countdown } from '../Countdown/Countdown';

export function Hero() {
  return (
    <section className="hero section">
      <div className="section-container hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow">60-årsfest</p>
          <h1>{partyData.heroTitle}</h1>
          <p className="hero__text">{partyData.heroText}</p>

          <div className="hero__actions">
            <a href="#osa" className="btn btn--primary">
              OSA här
            </a>
            <a href="#info" className="btn btn--secondary">
              Se festinfo
            </a>
          </div>
        </div>

        <Countdown />
      </div>
    </section>
  );
}