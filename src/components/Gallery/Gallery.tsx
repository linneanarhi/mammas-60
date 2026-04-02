import './Gallery.scss';
import { partyData } from '../../data/partyData';

export function Gallery() {
  return (
    <section className="gallery section">
      <div className="section-container">
        <div className="gallery__header">
          <span className="sticker">memory board</span>
          <h2 className="section-title">En sida full av känsla och minnen</h2>
          <p className="section-copy">
            Här kan du lägga in riktiga bilder på mamma, familjen, roliga gamla
            foton eller fina ögonblick som gör sidan mer personlig.
          </p>
        </div>

        <div className="gallery__board paper-card">
          <div className="gallery__grid">
            <div className="gallery__item gallery__item--a panel-card">
              <img src={partyData.photos[0]} alt="Galleri bild 1" />
            </div>

            <div className="gallery__item gallery__item--b panel-card">
              <img src={partyData.photos[2]} alt="Galleri bild 2" />
            </div>

            <div className="gallery__item gallery__item--c panel-card">
              <img src={partyData.photos[3]} alt="Galleri bild 3" />
            </div>

            <div className="gallery__item gallery__item--d panel-card">
              <img src={partyData.photos[4]} alt="Galleri bild 4" />
            </div>

            <div className="gallery__item gallery__item--e panel-card">
              <img src={partyData.photos[1]} alt="Galleri bild 5" />
            </div>
          </div>

          <div className="gallery__stickers">
            <span className="sticker">main character archive</span>
            <span className="sticker">cute memories only</span>
            <span className="sticker">birthday moodboard</span>
          </div>
        </div>
      </div>
    </section>
  );
}