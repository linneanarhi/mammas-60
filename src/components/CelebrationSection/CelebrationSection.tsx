import './CelebrationSection.scss';
import { motion } from 'framer-motion';
import frameImage from '../../assets/frame-om-kvallen.jpg';
import { partyData } from '../../data/partyData';

export function CelebrationSection() {
  const [linneaPhone, lovisaPhone] = partyData.contactPhones;
  const [linneaEmail, lovisaEmail] = partyData.contactEmails;

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
          <div
            className="celebration__frame"
            style={{ backgroundImage: `url(${frameImage})` }}
          >
            <div className="celebration__frame-inner">
              <img src={partyData.galleryImages.detail} alt="Detaljbild på mamma" />
            </div>
          </div>
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
            <p>
              <span>Linnea</span>{' '}
              <a href={`tel:${linneaPhone}`}>{linneaPhone}</a>{' '}
              <a href={`mailto:${linneaEmail}`}>{linneaEmail}</a>
            </p>
            <p>
              <span>Lovisa</span>{' '}
              <a href={`tel:${lovisaPhone}`}>{lovisaPhone}</a>{' '}
              <a href={`mailto:${lovisaEmail}`}>{lovisaEmail}</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
