import { motion } from 'framer-motion';
import { Download, Eye, Mail, Phone } from 'lucide-react';
import { profile } from '../data/profile.js';

function AboutResume({ onPreview }) {
  return (
    <section id="about" className="section about-section">
      <div className="shell about-grid">
        <motion.div
          className="about-copy"
          initial={{ opacity: 0, y: 34, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
        >
          <span className="section-kicker">about me / resume</span>
          <h2>不是展示经历，而是展示解决问题的路径。</h2>
          <div className="profile-strip">
            <img src={profile.assets.avatar} alt="刁帅头像" />
            <div>
              <strong>{profile.name}</strong>
              <span>{profile.englishName}</span>
            </div>
          </div>
          <div className="info-grid">
            <span><Phone size={17} />{profile.phone}</span>
            <span><Mail size={17} />{profile.email}</span>
          </div>
          <div className="position-tags">
            {profile.positioning.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="intro-lines">
            {profile.intro.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="stat-row">
            {profile.stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="resume-showcase"
          initial={{ opacity: 0, y: 38, rotate: 1.5 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <div className="resume-toolbar">
            <span>我的简历</span>
            <div>
              <button
                type="button"
                className="icon-button"
                onClick={() =>
                  onPreview({
                    type: 'image',
                    src: profile.assets.resumeImage,
                    title: '简历视觉页',
                  })
                }
                aria-label="查看完整简历"
              >
                <Eye size={18} />
              </button>
              <a className="icon-button" href={profile.resumePdf} download aria-label="下载简历 PDF">
                <Download size={18} />
              </a>
            </div>
          </div>
          <button
            type="button"
            className="resume-image-button"
            onClick={() =>
              onPreview({
                type: 'image',
                src: profile.assets.resumeImage,
                title: '简历视觉页',
              })
            }
          >
            <img src={profile.assets.resumeImage} alt="刁帅个人简历视觉页" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutResume;
