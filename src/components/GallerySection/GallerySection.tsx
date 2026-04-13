import './GallerySection.scss';
import { motion } from 'framer-motion';
import { partyData } from '../../data/partyData';

export function GallerySection() {
  return (
    <section className="gallery section">
      <div className="site-container">
        <motion.div
          className="gallery__header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Galleri</span>
          <h2 className="section-title">Minnen, stämning och vackra ögonblick</h2>
          <p className="section-copy">
            Här kan du lägga in riktiga familjebilder senare. Layouten är byggd
            för stora fotografier och en lugn, exklusiv känsla.
          </p>
        </motion.div>

        <div className="gallery__layout">
          <motion.div
            className="gallery__large surface"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >
            <img src={partyData.galleryImages[2]} alt="Galleri huvudbild" />
          </motion.div>

          <div className="gallery__side">
            <motion.div
              className="gallery__small panel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.08 }}
            >
              <img src={partyData.galleryImages[3]} alt="Galleri bild 2" />
            </motion.div>

            <motion.div
              className="gallery__small panel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: 0.16 }}
            >
              <img src={partyData.galleryImages[4]} alt="Galleri bild 3" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}