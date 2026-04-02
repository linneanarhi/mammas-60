import './App.scss';
import { Hero } from './components/Hero/Hero';
import { PartyDetails } from './components/PartyDetails/PartyDetails';
import { RSVP } from './components/RSVP/RSVP';
import { Gallery } from './components/Gallery/Gallery';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="site-shell">
      <Hero />
      <PartyDetails />
      <RSVP />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;