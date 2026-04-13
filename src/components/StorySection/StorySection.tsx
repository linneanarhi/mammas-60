import './StorySection.scss';
import { motion } from 'framer-motion';
import { partyData } from '../../data/partyData';

export function StorySection() {
  return (
    <section className="story section">
      <div className="site-container story__grid">
        <motion.div
          className="story__image panel"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <img src={partyData.galleryImages[1]} alt="Stämningsfull bild" />
        </motion.div>

        <motion.div
          className="story__content"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="eyebrow">Om dagen</span>
          <h2 className="section-title">{partyData.introHeading}</h2>
          <div className="decor-line" />
          <p className="section-copy story__copy">{partyData.introText}</p>
        </motion.div>
      </div>
    </section>
  );
}