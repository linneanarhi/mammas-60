import './RSVP.scss';
import { partyData } from '../../data/partyData';

export function RSVP() {
  return (
    <section className="section rsvp" id="osa">
      <div className="section-container rsvp__layout">
        <div className="card rsvp__content">
          <p className="rsvp__eyebrow">OSA</p>
          <h2>Anmäl dig här</h2>
          <p>
            Fyll i formuläret för att meddela om du kommer, hur många ni blir
            och om du har någon specialkost.
          </p>

          <a
            className="btn btn--primary"
            href={partyData.formUrl.replace('?embedded=true', '')}
            target="_blank"
            rel="noreferrer"
          >
            Öppna formuläret i ny flik
          </a>
        </div>

        <div className="card rsvp__form-wrapper">
          <iframe
            title="OSA till mammas 60-årsfest"
            src={partyData.formUrl}
            className="rsvp__iframe"
          />
        </div>
      </div>
    </section>
  );
}