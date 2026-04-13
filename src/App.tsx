import './App.scss';
import { Hero } from './components/Hero/Hero';
import { StorySection } from './components/StorySection/StorySection';
import { EventDetails } from './components/EventDetails/EventDetails';
import { CountdownSection } from './components/CountdownSection/CountdownSection';
import { RSVPSection } from './components/RSVPSection/RSVPSection';
import { CelebrationSection } from './components/CelebrationSection/CelebrationSection';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className="site-shell">
      <main className="invitation-paper">
        <Hero />
        <CountdownSection />
        <StorySection />
        <EventDetails />
        <RSVPSection />
        <CelebrationSection />
        <Footer />
      </main>
    </div>
  );
}

export default App;
