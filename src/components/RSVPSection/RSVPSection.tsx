import './RSVPSection.scss';
import { motion } from 'framer-motion';
import decorOne from '../../assets/decor-1.png';
import { partyData } from '../../data/partyData';

export function RSVPSection() {
  const [primaryPhone, secondaryPhone] = partyData.contactPhones;
  const [primaryEmail, secondaryEmail] = partyData.contactEmails;

  return (
    <section className="rsvp section" id="osa">
      <div className="site-container">
        <div className="rsvp__stripe" />
        <div className="rsvp__panel">
          <motion.div
            className="rsvp__content"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65 }}
          >
            <img src={decorOne} alt="" aria-hidden="true" className="rsvp__decor" />
            <span className="eyebrow">OSA</span>
            <h2 className="section-title">{partyData.rsvpHeading}</h2>
            <p className="section-copy">{partyData.rsvpText}</p>

            <div className="rsvp__facts">
              <p>
                <strong>Senast:</strong> {partyData.rsvpDeadline}
              </p>
              <p>
                <strong>Kontakt:</strong> {partyData.contactName}
              </p>
              <p>
                <strong>Telefon:</strong>{' '}
                <a href={`tel:${primaryPhone}`}>{primaryPhone}</a> eller{' '}
                <a href={`tel:${secondaryPhone}`}>{secondaryPhone}</a>
              </p>
              <p>
                <strong>E-post:</strong>{' '}
                <a href={`mailto:${primaryEmail}`}>{primaryEmail}</a> eller{' '}
                <a href={`mailto:${secondaryEmail}`}>{secondaryEmail}</a>
              </p>
            </div>

            <div className="rsvp__actions">
              <a
                href={partyData.formUrlPlain}
                target="_blank"
                rel="noreferrer"
                className="btn btn--primary"
              >
                Öppna formuläret
              </a>
            </div>
          </motion.div>

          <motion.div
            className="rsvp__form"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, delay: 0.08 }}
          >
            <iframe
              title="OSA till mammas 60-årsfest"
              src={partyData.formUrl}
              className="rsvp__iframe"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
