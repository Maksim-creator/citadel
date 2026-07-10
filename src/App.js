import { useEffect, useState } from 'react';
import './App.css';
import useReveal from './hooks/useReveal';
import Nav from './components/Nav';
import Logo from './components/Logo';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  useReveal();
  // Shared "past the hero" flag: the logo docks and the nav panel opens together
  // once the reader scrolls to the description and the big logo is nearly gone.
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      // Open the panel as the logo nears the end of its travel (150px dead-zone
      // + 150px dock).
      setDocked((prev) => {
        const y = window.scrollY;
        if (!prev && y > 260) return true;
        if (prev && y < 190) return false; // hysteresis so it can't flip-flop
        return prev;
      });
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="App">
      <Nav revealed={docked} />
      <Logo docked={docked} />
      <main>
        <Hero />
        <Services />
        <Booking />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
