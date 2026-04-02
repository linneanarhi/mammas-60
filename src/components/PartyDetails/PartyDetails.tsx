import './PartyDetails.scss';
import { partyData } from '../../data/partyData';

export function PartyDetails() {
  return (
    <section className="details section" id="info">
      <div className="section-container">
        <div className="details__header">
          <span className="sticker">party information</span>
          <h2 className="section-title">Allt du behöver veta inför kvällen</h2>
          <p className="section-copy">
            Här finns tid, plats, klädkod och lite annan praktisk information.
            Tanken är att det ska kännas enkelt, tydligt och festligt.
          </p>
        </div>

        <div className="details__layout">
          <div className="details__grid">
            <article className="details__card panel-card details__card--yellow">
              <p className="details__card-label">datum</p>
              <h3>{partyData.dateLabel}</h3>
            </article>

            <article className="details__card panel-card details__card--rose">
              <p className="details__card-label">tid</p>
              <h3>{partyData.timeLabel}</h3>
            </article>

            <article className="details__card panel-card details__card--mint">
              <p className="details__card-label">plats</p>
              <h3>{partyData.locationLabel}</h3>
            </article>

            <article className="details__card panel-card details__card--sky">
              <p className="details__card-label">klädkod</p>
              <h3>{partyData.dressCode}</h3>
            </article>
          </div>

          <aside className="details__note paper-card">
            <p className="details__note-kicker">little reminder</p>
            <h3 className="details__note-title">
              Kom hungrig, glad och redo att fira
            </h3>
            <p>
              Det här är en kväll för skratt, minnen och kärlek. Har du frågor
              innan festen går det bra att kontakta oss.
            </p>
            <span className="sticker">best dressed energy welcome</span>
          </aside>
        </div>
      </div>
    </section>
  );
}