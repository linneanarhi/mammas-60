import './Footer.scss';
import { motion } from 'framer-motion';
import { partyData } from '../../data/partyData';

export function Footer() {
  return (
    <footer className="footer section">
      <div className="site-container">
        <motion.div
          className="footer__layout"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer__copy">
            <span className="eyebrow">Välkommen</span>
            <h2 className="footer__title">{partyData.closingHeading}</h2>
            <p className="section-copy">
              {partyData.closingText} Har du frågor innan dagen är det bara att
              höra av dig till {partyData.contactName}.
            </p>
          </div>

          <div className="footer__image">
            <img src={partyData.galleryImages.accent} alt="Lekfull bild på mamma" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
