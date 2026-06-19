import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Folder, Image as ImageIcon, Lightbulb, Star } from 'lucide-react';

const FloppyDisk3D = lazy(() => import('./FloppyDisk3D.jsx'));

function ImagePortfolioEntry() {
  const entryRef = useRef(null);
  const [shouldLoadDisk, setShouldLoadDisk] = useState(false);
  const imagePortfolioUrl = `${import.meta.env.BASE_URL}image-portfolio`;

  useEffect(() => {
    const node = entryRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadDisk(true);
          observer.disconnect();
        }
      },
      { rootMargin: '520px 0px', threshold: 0.01 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={entryRef} className="image-portfolio-entry" aria-label="Image Portfolio">
      <div className="shell image-portfolio-entry-inner">
        <div className="entry-copy">
          <span className="entry-kicker">
            <i />
            CREATIVE ARCHIVE
          </span>
          <h2>
            IMAGE
            <br />
            PORTFOLIO
          </h2>
          <p>视觉档案 / 海报设计 / 创意实验</p>
          <div className="entry-arrow" aria-hidden="true">
            <svg viewBox="0 0 220 96" role="img">
              <path d="M8 58 C54 18, 113 18, 174 46" />
              <path d="M154 18 L185 52 L139 61" />
            </svg>
            <span>
              点击软盘查看视觉作品集 <ArrowUpRight size={20} />
            </span>
          </div>
        </div>

        <a className="floppy-link" href={imagePortfolioUrl} aria-label="点击软盘查看视觉作品集">
          <span className="floppy-shadow" />
          <span className="portfolio-scrap scrap-typo" aria-hidden="true">
            <strong>
              TYPO
              <br />
              GRAPHY
            </strong>
            <i />
            <small>POSTER SERIES&nbsp;&nbsp;2024</small>
          </span>
          <span className="portfolio-scrap scrap-riso" aria-hidden="true">
            <strong>
              RISO
              <br />
              PRINT
            </strong>
            <i />
            <b />
          </span>
          <span className="portfolio-scrap scrap-photo" aria-hidden="true">
            <i />
            <b>...</b>
          </span>
          <span className="portfolio-note" aria-hidden="true">
            <strong>
              <em>24</em> Projects
            </strong>
            <span>Branding</span>
            <span>Posters</span>
            <span>Editorial</span>
          </span>
          <Suspense fallback={<span className="floppy-loading" aria-hidden="true" />}>
            {shouldLoadDisk ? <FloppyDisk3D /> : <span className="floppy-loading" aria-hidden="true" />}
          </Suspense>
        </a>

        <div className="entry-notes" aria-hidden="true">
          <span>
            <Folder size={16} />
            VISUAL ARCHIVE
          </span>
          <span>
            <Lightbulb size={16} />
            灵感 / 创意
          </span>
          <span>
            <ImageIcon size={16} />
            海报 / 设计 / IMAGE
          </span>
          <span>
            <Star size={16} />
            CURATED WORKS
          </span>
        </div>
      </div>
    </section>
  );
}

export default ImagePortfolioEntry;
