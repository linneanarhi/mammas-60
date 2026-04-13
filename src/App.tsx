import './App.scss';
import { Hero } from './components/Hero/Hero';
import { StorySection } from './components/StorySection/StorySection';
import { EventDetails } from './components/EventDetails/EventDetails';
import { GallerySection } from './components/GallerySection/GallerySection';
import { RSVPSection } from './components/RSVPSection/RSVPSection';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="site-shell">
      <Hero />
      <StorySection />
      <EventDetails />
      <GallerySection />
      <RSVPSection />
      <Footer />
    </div>
  );
}

export default App;