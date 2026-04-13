import './EventDetails.scss';
import { motion } from 'framer-motion';
import { partyData } from '../../data/partyData';

export function EventDetails() {
  return (
    <section className="details section" id="details">
      <div className="site-container">
        <motion.div
          className="details__header"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Praktiskt</span>
          <h2 className="section-title">{partyData.detailsHeading}</h2>
          <p className="section-copy">{partyData.detailsLead}</p>
        </motion.div>

        <div className="details__list">
          {partyData.details.map((item, index) => (
            <motion.article
              key={item.title}
              className="details__item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <span className="details__label">{item.title}</span>
              <div className="details__body">
                <h3>{item.value}</h3>
                <p>{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
