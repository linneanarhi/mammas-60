import './PartyDetails.scss';
import { partyData } from '../../data/partyData';

export function PartyDetails() {
  return (
    <section className="section" id="info">
      <div className="section-container">
        <div className="details">
          <div className="details__intro">
            <h2>Praktisk information</h2>
            <p>Här hittar du allt du behöver veta inför festen.</p>
          </div>

          <div className="details__grid">
            <article className="card details__item">
              <h3>Datum</h3>
              <p>{partyData.dateLabel}</p>
            </article>

            <article className="card details__item">
              <h3>Tid</h3>
              <p>{partyData.timeLabel}</p>
            </article>

            <article className="card details__item">
              <h3>Plats</h3>
              <p>{partyData.locationLabel}</p>
            </article>

            <article className="card details__item">
              <h3>Klädkod</h3>
              <p>{partyData.dressCode}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}