import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import portfolio01 from '../assets/image-portfolio-01.webp';
import portfolio02 from '../assets/image-portfolio-02.webp';
import portfolio03 from '../assets/image-portfolio-03.webp';
import portfolio04 from '../assets/image-portfolio-04.webp';
import portfolio05 from '../assets/image-portfolio-05.webp';
import portfolio06 from '../assets/image-portfolio-06.webp';

const CircularGalleryCanvas = lazy(() => import('./CircularGalleryCanvas.jsx'));

const fallbackItems = [
  { image: portfolio01, text: 'VISUAL 01' },
  { image: portfolio02, text: 'VISUAL 02' },
  { image: portfolio03, text: 'VISUAL 03' },
  { image: portfolio04, text: 'VISUAL 04' },
  { image: portfolio05, text: 'VISUAL 05' },
  { image: portfolio06, text: 'VISUAL 06' },
];

function VisualCircularShowcase() {
  const sectionRef = useRef(null);
  const [shouldLoadGallery, setShouldLoadGallery] = useState(false);
  const [isGalleryReady, setIsGalleryReady] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 900px)');
    const sync = () => setIsCompact(query.matches);
    sync();
    if (query.addEventListener) {
      query.addEventListener('change', sync);
      return () => query.removeEventListener('change', sync);
    }
    query.addListener(sync);
    return () => query.removeListener(sync);
  }, []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isCompact) {
          setShouldLoadGallery(true);
          observer.disconnect();
        }
      },
      { rootMargin: '560px 0px', threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [isCompact]);

  return (
    <section ref={sectionRef} className="circular-gallery-band" aria-label="视觉作品弧形预览">
      <div className="shell circular-gallery-section">
        <div className="circular-gallery-stage">
          <div className={`circular-gallery-fallback ${isGalleryReady ? 'is-hidden' : ''}`} aria-hidden="true">
            {fallbackItems.map((item) => (
              <figure key={item.text}>
                <img src={item.image} alt="" loading="lazy" />
                <figcaption>{item.text}</figcaption>
              </figure>
            ))}
          </div>
          {shouldLoadGallery ? (
            <Suspense fallback={null}>
              <CircularGalleryCanvas onReady={() => setIsGalleryReady(true)} />
            </Suspense>
          ) : null}
          <div className="circular-gallery-mobile-strip" aria-hidden="true">
            {fallbackItems.map((item) => (
              <figure key={`mobile-${item.text}`}>
                <img src={item.image} alt="" loading="lazy" />
                <figcaption>{item.text}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisualCircularShowcase;
