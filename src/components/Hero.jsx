import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile.js';

function Hero() {
  const [isReady, setIsReady] = useState(false);

  return (
    <section id="home" className="hero-section">
      <video
        className={`hero-video ${isReady ? 'is-ready' : ''}`}
        src={profile.assets.heroVideo}
        poster={profile.assets.heroPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedData={() => setIsReady(true)}
        onCanPlay={() => setIsReady(true)}
      />
      <div
        className="hero-poster"
        style={{ backgroundImage: `url(${profile.assets.heroPoster})` }}
        aria-hidden="true"
      />
      <div className="hero-tint" />
      <div className="hero-inner shell">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <span className="section-kicker">{profile.hero.eyebrow}</span>
          <h1>
            {profile.hero.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p>{profile.hero.subtitle}</p>
          <div className="hero-chips" aria-label="运营能力标签">
            {profile.hero.chips.map((chip) => (
              <span key={chip}>{chip}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">
              联系我 <ArrowUpRight size={18} />
            </a>
            <a className="button button-light" href="#portfolio">
              查看作品 <ArrowDown size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
