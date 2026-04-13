import './EventDetails.scss';
import { motion } from 'framer-motion';
import { partyData } from '../../data/partyData';

export function EventDetails() {
  return (
    <section className="details section" id="details">
      <div className="site-container">
        <motion.div
          className="details__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Praktisk information</span>
          <h2 className="section-title">Everything you need to know</h2>
          <p className="section-copy">
            Här hittar du det viktigaste inför firandet. Vi håller informationen
            tydlig och enkel så att sidan känns lugn, elegant och lätt att läsa.
          </p>
        </motion.div>

        <div className="details__grid">
          {partyData.details.map((item, index) => (
            <motion.article
              key={item.title}
              className="details__card panel"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <span className="details__card-label">{item.title}</span>
              <h3>{item.value}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}