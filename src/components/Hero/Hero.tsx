import './Hero.scss';
import { motion } from 'framer-motion';
import { partyData } from '../../data/partyData';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="hero">
      <div className="site-container hero__grid">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.span variants={fadeUp} className="eyebrow">
            {partyData.title}
          </motion.span>

          <motion.h1 variants={fadeUp} className="hero__title section-title">
            {partyData.heroTitle}
          </motion.h1>

          <motion.p variants={fadeUp} className="section-copy hero__copy">
            {partyData.heroSubtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="hero__meta">
            <div>
              <span>Datum</span>
              <strong>{partyData.date}</strong>
            </div>

            <div>
              <span>Plats</span>
              <strong>{partyData.location}</strong>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="hero__actions">
            <a href="#osa" className="btn btn--primary">
              OSA här
            </a>

            <a href="#details" className="btn btn--secondary">
              Läs mer
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__image-wrap"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="hero__image-card surface">
            <div className="hero__image-frame">
              <motion.img
                src={partyData.galleryImages[0]}
                alt="Festlig hero-bild"
                className="hero__image"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>

            <div className="hero__floating-note panel">
              <p>En kväll att minnas</p>
              <span>{partyData.rsvpLabel}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}