import './Footer.scss';
import { partyData } from '../../data/partyData';

export function Footer() {
  return (
    <footer className="footer section">
      <div className="section-container">
        <div className="footer__box card">
          <h2>Vi ser fram emot att fira tillsammans med dig</h2>
          <p>
            Frågor? Kontakta {partyData.contactName} på {partyData.contactEmail}
          </p>
        </div>
      </div>
    </footer>
  );
}