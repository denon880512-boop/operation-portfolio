import { motion } from 'framer-motion';
import { ArrowUpRight, Eye, PlayCircle } from 'lucide-react';
import { portfolioItems } from '../data/profile.js';

function PortfolioGallery({ onPreview }) {
  return (
    <section id="portfolio" className="section portfolio-section">
      <div className="shell">
        <div className="section-heading split-heading">
          <div>
            <span className="section-kicker">portfolio gallery</span>
            <h2>一屏一件作品，让内容资产被认真看见。</h2>
          </div>
          <p>
            这里展示我独立制作的品牌网页与 AI 视频作品，每一件都按照 PC 端观看比例完整呈现。
          </p>
        </div>
        <div className="gallery-list">
          {portfolioItems.map((item, index) => (
            <motion.article
              className="gallery-item"
              key={item.id}
              initial={{ opacity: 0, y: 46, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ duration: 0.7 }}
            >
              <div className="gallery-meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <small>{item.label}</small>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="gallery-actions">
                  {item.type === 'image' ? (
                    <button
                      type="button"
                      className="button button-dark"
                      onClick={() => onPreview({ type: 'image', src: item.image, title: item.title })}
                    >
                      查看大图 <Eye size={17} />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="button button-dark"
                      onClick={() => onPreview({ type: 'video', src: item.video, title: item.title })}
                    >
                      播放视频 <PlayCircle size={17} />
                    </button>
                  )}
                  {item.url && (
                    <a
                      className="button button-light"
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {item.actionLabel || '访问网站'} <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>
              </div>
              <div className={`gallery-media ${item.type === 'video' ? 'gallery-video' : ''}`}>
                {item.type === 'image' ? (
                  <button
                    type="button"
                    onClick={() => onPreview({ type: 'image', src: item.image, title: item.title })}
                  >
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="gallery-video-button"
                    onClick={() => onPreview({ type: 'video', src: item.video, title: item.title })}
                  >
                    <img src={item.poster} alt={`${item.title}视频封面`} loading="lazy" />
                    <span className="gallery-play-overlay">
                      <PlayCircle size={26} />
                      点击播放完整视频
                    </span>
                  </button>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioGallery;
