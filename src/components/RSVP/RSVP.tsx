import './RSVP.scss';
import { partyData } from '../../data/partyData';

export function RSVP() {
  return (
    <section className="rsvp section" id="osa">
      <div className="section-container">
        <div className="rsvp__wrapper paper-card">
          <div className="rsvp__intro">
            <span className="sticker">RSVP / OSA</span>
            <h2 className="section-title">Säg gärna till om du kommer</h2>
            <p className="section-copy">
              Fyll i formuläret med namn, antal gäster och eventuell specialkost.
              Vi vill gärna veta så vi kan planera kvällen på bästa sätt.
            </p>

            <div className="rsvp__actions">
              <a
                className="btn btn--primary"
                href={partyData.formUrlPlain}
                target="_blank"
                rel="noreferrer"
              >
                Öppna formuläret i ny flik
              </a>
            </div>

            <div className="rsvp__mini-note panel-card">
              <p className="rsvp__mini-label">tiny note</p>
              <p>
                Om formuläret känns litet i mobilen är det bättre att öppna det i
                en egen flik.
              </p>
            </div>
          </div>

          <div className="rsvp__form panel-card">
            <iframe
              title="OSA till mammas 60-årsfest"
              src={partyData.formUrl}
              className="rsvp__iframe"
            />
          </div>
        </div>
      </div>
    </section>
  );
}