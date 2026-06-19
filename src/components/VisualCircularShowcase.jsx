import CircularGallery from './CircularGallery.jsx';
import portfolio01 from '../assets/image-portfolio-01.webp';
import portfolio02 from '../assets/image-portfolio-02.webp';
import portfolio03 from '../assets/image-portfolio-03.webp';
import portfolio04 from '../assets/image-portfolio-04.webp';
import portfolio05 from '../assets/image-portfolio-05.webp';
import portfolio06 from '../assets/image-portfolio-06.webp';
import portfolio07 from '../assets/image-portfolio-07.webp';
import portfolio10 from '../assets/image-portfolio-10.webp';
import portfolio13 from '../assets/image-portfolio-13.webp';
import portfolio14 from '../assets/image-portfolio-14.webp';
import portfolio15 from '../assets/image-portfolio-15.webp';
import portfolio16 from '../assets/image-portfolio-16.webp';

const galleryItems = [
  portfolio01,
  portfolio03,
  portfolio02,
  portfolio04,
  portfolio05,
  portfolio07,
  portfolio06,
  portfolio10,
  portfolio13,
  portfolio14,
  portfolio15,
  portfolio16,
].map((image, index) => ({
  image,
  text: `VISUAL ${String(index + 1).padStart(2, '0')}`,
}));

function VisualCircularShowcase() {
  return (
    <section className="circular-gallery-band" aria-label="视觉作品弧形预览">
      <div className="shell circular-gallery-section">
        <div className="circular-gallery-stage">
          <CircularGallery
            items={galleryItems}
            bend={2.6}
            textColor="#111111"
            borderRadius={0.035}
            font="bold 28px Arial"
            scrollSpeed={1.7}
            scrollEase={0.045}
          />
        </div>
      </div>
    </section>
  );
}

export default VisualCircularShowcase;
