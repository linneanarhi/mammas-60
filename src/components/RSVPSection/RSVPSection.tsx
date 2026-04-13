import './RSVPSection.scss';
import { motion } from 'framer-motion';
import { partyData } from '../../data/partyData';

export function RSVPSection() {
  return (
    <section className="rsvp section" id="osa">
      <div className="site-container rsvp__grid">
        <motion.div
          className="rsvp__content"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <span className="eyebrow">OSA</span>
          <h2 className="section-title">Vi hoppas att du vill komma</h2>
          <p className="section-copy">
            Anmäl dig gärna via formuläret. Där kan du meddela om du kommer,
            ange eventuell specialkost och lämna en hälsning om du vill.
          </p>

          <div className="rsvp__info">
            <div>
              <span>Sista svarsdag</span>
              <strong>{partyData.rsvpDeadline}</strong>
            </div>

            <div>
              <span>Kontakt</span>
              <strong>{partyData.contactName}</strong>
            </div>
          </div>

          <div className="rsvp__actions">
            <a
              href={partyData.formUrlPlain}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              Öppna OSA-formulär
            </a>
          </div>
        </motion.div>

        <motion.div
          className="rsvp__form surface"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65 }}
        >
          <iframe
            title="OSA till mammas 60-årsfest"
            src={partyData.formUrl}
            className="rsvp__iframe"
          />
        </motion.div>
      </div>
    </section>
  );
}