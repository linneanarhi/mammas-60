import './Footer.scss';
import { motion } from 'framer-motion';
import { partyData } from '../../data/partyData';

export function Footer() {
  return (
    <footer className="footer section">
      <div className="site-container">
        <motion.div
          className="footer__box surface"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Med värme</span>
          <h2 className="footer__title">Vi ser fram emot att fira tillsammans med dig</h2>
          <p className="footer__copy">
            Har du frågor innan dagen är det bara att höra av dig till{' '}
            {partyData.contactName} på{' '}
            <a href={`mailto:${partyData.contactEmail}`}>{partyData.contactEmail}</a>.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}