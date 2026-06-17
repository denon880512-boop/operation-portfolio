import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutResume from './components/AboutResume.jsx';
import Projects from './components/Projects.jsx';
import PortfolioGallery from './components/PortfolioGallery.jsx';
import ImagePortfolioEntry from './components/ImagePortfolioEntry.jsx';
import ImagePortfolioPage from './components/ImagePortfolioPage.jsx';
import Advantages from './components/Advantages.jsx';
import ContactFooter from './components/ContactFooter.jsx';
import CursorSpot from './components/CursorSpot.jsx';
import Lightbox from './components/Lightbox.jsx';

function App() {
  const [preview, setPreview] = useState(null);
  const isImagePortfolioPage = window.location.pathname === '/image-portfolio';

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    lenis.scrollTo(0, { immediate: true });

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CursorSpot />
      {isImagePortfolioPage ? (
        <ImagePortfolioPage />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <AboutResume onPreview={setPreview} />
            <Projects onPreview={setPreview} />
            <PortfolioGallery onPreview={setPreview} />
            <ImagePortfolioEntry />
            <Advantages />
            <ContactFooter />
          </main>
        </>
      )}
      <Lightbox item={preview} onClose={() => setPreview(null)} />
    </>
  );
}

export default App;
