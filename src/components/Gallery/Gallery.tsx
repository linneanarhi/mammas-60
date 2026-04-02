import './Gallery.scss';

const images = [
  'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80',
];

export function Gallery() {
  return (
    <section className="section">
      <div className="section-container">
        <div className="gallery__intro">
          <h2>Galleri</h2>
          <p>Byt ut bilderna mot riktiga familjebilder senare.</p>
        </div>

        <div className="gallery__grid">
          {images.map((image, index) => (
            <div className="gallery__item card" key={index}>
              <img src={image} alt={`Galleri bild ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}