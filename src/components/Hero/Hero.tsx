import './Hero.scss';
import { motion } from 'framer-motion';
import decorOne from '../../assets/decor-1.png';
import { partyData } from '../../data/partyData';

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div
        className="hero__media"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img src={partyData.galleryImages.hero} alt="Porträtt av mamma" className="hero__image" />
        <div className="hero__overlay" />
      </motion.div>

      <div className="site-container">
        <motion.div
          className="hero__card"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
        >
          <img src={decorOne} alt="" aria-hidden="true" className="hero__decor hero__decor--corner" />

          <motion.span variants={fadeUp} className="eyebrow">
            {partyData.heroBadge}
          </motion.span>

          <motion.h1 variants={fadeUp} className="section-title hero__title">
            {partyData.heroTitle}
          </motion.h1>

          <motion.p variants={fadeUp} className="hero__subtitle">
            {partyData.heroSubtitle}
          </motion.p>

          <motion.p variants={fadeUp} className="hero__invitation">
            {partyData.invitationLine}
          </motion.p>

          <motion.div variants={fadeUp} className="hero__meta">
            <p>{partyData.date}</p>
            <span />
            <p>{partyData.location}</p>
            <span />
            <p>{partyData.time}</p>
          </motion.div>

          <motion.div variants={fadeUp} className="hero__actions">
            <a href="#osa" className="btn btn--primary">
              OSA
            </a>
            <a href="#details" className="btn btn--secondary">
              Läs detaljer
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
