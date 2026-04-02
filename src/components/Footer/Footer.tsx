import './Footer.scss';
import { partyData } from '../../data/partyData';

export function Footer() {
  return (
    <footer className="footer section">
      <div className="section-container">
        <div className="footer__box paper-card">
          <p className="footer__eyebrow">with love</p>
          <h2 className="footer__title">
            Vi ser fram emot att fira tillsammans med dig
          </h2>
          <p className="footer__copy">
            Har du frågor innan festen? Hör av dig till {partyData.contactName} på{' '}
            <a href={`mailto:${partyData.contactEmail}`}>{partyData.contactEmail}</a>.
          </p>
          <div className="footer__tags">
            <span>birthday energy</span>
            <span>family memories</span>
            <span>cute celebration</span>
          </div>
        </div>
      </div>
    </footer>
  );
}