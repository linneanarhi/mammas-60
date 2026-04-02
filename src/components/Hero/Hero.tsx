import './Hero.scss';
import { partyData } from '../../data/partyData';
import { Countdown } from '../Countdown/Countdown';

export function Hero() {
  return (
    <section className="hero section">
      <div className="section-container">
        <div className="hero__window paper-card">
          <div className="hero__window-top">
            <div className="browser-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>

            <p className="hero__window-label">{partyData.introLabel}</p>
          </div>

          <div className="hero__search panel-card">
            <span className="hero__search-text">Searching for the best birthday ever...</span>
          </div>

          <div className="hero__content">
            <div className="hero__left">
              <span className="sticker hero__sticker hero__sticker--top">60 years of icon energy</span>

              <p className="hero__eyebrow">{partyData.heroEyebrow}</p>
              <h1 className="hero__title">
                <span className="script">Happy</span> Birthday
              </h1>

              <h2 className="hero__headline section-title">{partyData.heroTitle}</h2>
              <p className="section-copy">{partyData.heroSubtitle}</p>

              <div className="hero__actions">
                <a href="#osa" className="btn btn--primary">
                  OSA här
                </a>
                <a href="#info" className="btn btn--secondary">
                  Se festinfo
                </a>
              </div>

              <div className="hero__facts">
                {partyData.tinyFacts.map((fact) => (
                  <span key={fact}>{fact}</span>
                ))}
              </div>
            </div>

            <div className="hero__right">
              <div className="hero__collage">
                <div className="hero__photo hero__photo--large panel-card">
                  <img src={partyData.photos[0]} alt="Festlig inspirationsbild" />
                </div>

                <div className="hero__photo hero__photo--small panel-card">
                  <img src={partyData.photos[1]} alt="Porträtt inspirationsbild" />
                </div>

                <div className="hero__note sticker">main character vibes</div>
              </div>

              <Countdown />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}