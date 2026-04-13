import './StorySection.scss';
import { motion } from 'framer-motion';
import { partyData } from '../../data/partyData';

export function StorySection() {
  return (
    <section className="story section">
      <div className="site-container story__grid">
        <motion.div
          className="story__image"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <img src={partyData.galleryImages.intro} alt="Porträtt av mamma i vinden" />
        </motion.div>

        <motion.div
          className="story__content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.08 }}
        >
          <span className="eyebrow">Om kvällen</span>
          <h2 className="section-title">{partyData.introHeading}</h2>
          <p className="section-copy story__copy">{partyData.introText}</p>
          <p className="story__quote">{partyData.introQuote}</p>
        </motion.div>
      </div>
    </section>
  );
}
