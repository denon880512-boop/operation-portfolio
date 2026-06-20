import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutResume from './components/AboutResume.jsx';
import Projects from './components/Projects.jsx';
import PortfolioGallery from './components/PortfolioGallery.jsx';
import VisualCircularShowcase from './components/VisualCircularShowcase.jsx';
import ImagePortfolioEntry from './components/ImagePortfolioEntry.jsx';
import ImagePortfolioPage from './components/ImagePortfolioPage.jsx';
import Advantages from './components/Advantages.jsx';
import ContactFooter from './components/ContactFooter.jsx';
import CursorSpot from './components/CursorSpot.jsx';
import Lightbox from './components/Lightbox.jsx';

function App() {
  const [preview, setPreview] = useState(null);
  const [route, setRoute] = useState(() => ({
    pathname: window.location.pathname,
    search: window.location.search,
    hash: window.location.hash,
  }));
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  const pagePath = route.pathname.replace(basePath, '') || '/';
  const isImagePortfolioPage = pagePath === '/image-portfolio' || route.hash === '#image-portfolio';

  useEffect(() => {
    const updateRoute = () => {
      setRoute({
        pathname: window.location.pathname,
        search: window.location.search,
        hash: window.location.hash,
      });
    };

    window.addEventListener('hashchange', updateRoute);
    window.addEventListener('popstate', updateRoute);

    return () => {
      window.removeEventListener('hashchange', updateRoute);
      window.removeEventListener('popstate', updateRoute);
    };
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.85,
    });

    const scrollToTop = () => {
      if (window.location.hash && !isImagePortfolioPage) {
        window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
        setRoute({
          pathname: window.location.pathname,
          search: window.location.search,
          hash: '',
        });
      }
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      lenis.scrollTo(0, { immediate: true });
    };

    requestAnimationFrame(scrollToTop);
    const topScrollTimer = window.setTimeout(scrollToTop, 700);

    let frame = 0;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      window.clearTimeout(topScrollTimer);
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
            <VisualCircularShowcase />
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
