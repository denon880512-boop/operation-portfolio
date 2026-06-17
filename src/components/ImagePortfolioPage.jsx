import { ArrowLeft } from 'lucide-react';
import portfolio01 from '../assets/image-portfolio-01.webp';
import portfolio02 from '../assets/image-portfolio-02.webp';
import portfolio03 from '../assets/image-portfolio-03.webp';
import portfolio04 from '../assets/image-portfolio-04.webp';
import portfolio05 from '../assets/image-portfolio-05.webp';
import portfolio06 from '../assets/image-portfolio-06.webp';
import portfolio07 from '../assets/image-portfolio-07.webp';
import portfolio08 from '../assets/image-portfolio-08.webp';
import portfolio09 from '../assets/image-portfolio-09.webp';
import portfolio10 from '../assets/image-portfolio-10.webp';
import portfolio11 from '../assets/image-portfolio-11.webp';
import portfolio13 from '../assets/image-portfolio-13.webp';
import portfolio14 from '../assets/image-portfolio-14.webp';
import portfolio15 from '../assets/image-portfolio-15.webp';
import portfolio16 from '../assets/image-portfolio-16.webp';
import portfolio17 from '../assets/image-portfolio-17.webp';
import portfolio18 from '../assets/image-portfolio-18.webp';
import portfolio19 from '../assets/image-portfolio-19.webp';

const works = [
  { image: portfolio01, alt: 'Furlan Marri watch poster' },
  { image: portfolio03, alt: 'Zisha banner design' },
  { image: portfolio02, alt: 'Zisha teapot illustration' },
  { image: portfolio04, alt: 'Watch editorial collage' },
  { image: portfolio05, alt: 'Zisha clay infographic' },
  { image: portfolio07, alt: 'GEO infographic' },
  { image: portfolio06, alt: 'Pattern illustration' },
  { image: portfolio10, alt: 'Colorful watch still life' },
  { image: portfolio13, alt: 'Diving watch history infographic' },
  { image: portfolio14, alt: 'Bezel watch comparison' },
  { image: portfolio15, alt: 'Squale blue watch closeup' },
  { image: portfolio16, alt: 'Squale watch kit layout' },
  { image: portfolio17, alt: 'Furlan Marri watch still life' },
  { image: portfolio18, alt: 'Skeleton watch closeup' },
  { image: portfolio19, alt: 'Maen watch wrist shot' },
  { image: portfolio08, alt: 'Tea set scene' },
  { image: portfolio09, alt: 'Tea set detail' },
  { image: portfolio11, alt: 'Watch material display' },
];

function ImagePortfolioPage() {
  return (
    <main className="image-portfolio-page">
      <header className="portfolio-page-top shell">
        <a className="portfolio-back" href="/">
          <ArrowLeft size={16} />
          返回首页
        </a>
        <div className="portfolio-page-count" aria-label="page count">
          <span>PAGE</span>
          <strong>01 / 18</strong>
          <i />
        </div>
      </header>

      <section className="shell image-portfolio-hero">
        <div>
          <span className="portfolio-kicker">VISUAL ARCHIVE</span>
          <h1>Image Portfolio</h1>
          <p>视觉作品归档 / 海报 / 摄影 / 品牌实验</p>
        </div>
        <aside>以纯白空间建立秩序，用紧凑瀑布流呈现视觉作品的尺度、材质与情绪。</aside>
      </section>

      <section className="shell image-portfolio-grid" aria-label="图片视觉作品">
        <div className="portfolio-grid-marker">Selected Works · 18</div>
        {works.map((work, index) => (
          <article className="portfolio-work" key={`${work.alt}-${index}`}>
            <figure>
              <img src={work.image} alt={work.alt} loading="eager" />
            </figure>
          </article>
        ))}
      </section>

      <footer className="shell portfolio-page-footer">
        <span>© 2026 Portfolio</span>
        <span>
          Keep Exploring <i />
        </span>
      </footer>
    </main>
  );
}

export default ImagePortfolioPage;
