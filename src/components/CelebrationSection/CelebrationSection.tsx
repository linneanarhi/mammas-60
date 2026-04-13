import './CelebrationSection.scss';
import { motion } from 'framer-motion';
import { partyData } from '../../data/partyData';

export function CelebrationSection() {
  const [primaryPhone, secondaryPhone] = partyData.contactPhones;
  const [primaryEmail, secondaryEmail] = partyData.contactEmails;

  return (
    <section className="celebration section">
      <div className="site-container celebration__grid">
        <motion.div
          className="celebration__image"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <img src={partyData.galleryImages.detail} alt="Detaljbild på mamma" />
        </motion.div>

        <motion.div
          className="celebration__content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <span className="eyebrow">Tal och överraskningar</span>
          <h2 className="section-title">{partyData.speechHeading}</h2>
          <p className="section-copy">{partyData.speechText}</p>

          <div className="celebration__contact">
            <a href={`tel:${primaryPhone}`}>{primaryPhone}</a>
            <a href={`tel:${secondaryPhone}`}>{secondaryPhone}</a>
            <a href={`mailto:${primaryEmail}`}>{primaryEmail}</a>
            <a href={`mailto:${secondaryEmail}`}>{secondaryEmail}</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
