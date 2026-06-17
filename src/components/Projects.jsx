import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Eye } from 'lucide-react';
import { projects } from '../data/projects.js';

function ProjectVisual({ project, onPreview }) {
  if (project.gallery?.length) {
    return (
      <div
        className={`project-gallery ${
          project.layout === 'phone-screens' ? 'project-gallery-phone' : ''
        }`}
      >
        {project.gallery.map((item, galleryIndex) => (
          <button
            key={item.src}
            type="button"
            className={`project-gallery-item item-${galleryIndex + 1}`}
            onClick={() =>
              onPreview({
                type: 'image',
                src: item.src,
                title: item.title,
              })
            }
          >
            <img src={item.src} alt={item.title} loading="lazy" />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <button
      type="button"
      className="project-image"
      onClick={() =>
        onPreview({
          type: 'image',
          src: project.cover,
          title: project.name,
        })
      }
    >
      <img src={project.cover} alt={`${project.name}截图`} loading="lazy" />
      <span>
        <Eye size={17} />
        查看账号图
      </span>
    </button>
  );
}

function TiltProjectCard({ project, index, onPreview }) {
  const cardRef = useRef(null);

  const handleMove = (event) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = (x / rect.width - 0.5) * 8;
    const rotateX = (0.5 - y / rect.height) * 8;
    card.style.setProperty('--rx', `${rotateX}deg`);
    card.style.setProperty('--ry', `${rotateY}deg`);
  };

  const handleLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--rx', '0deg');
    card.style.setProperty('--ry', '0deg');
  };

  return (
    <motion.article
      ref={cardRef}
      className={`project-card ${project.gallery ? 'project-card-gallery' : ''}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <ProjectVisual project={project} onPreview={onPreview} />

      <div className="project-content">
        <div className="project-label">
          <span>{project.accountName}</span>
          <span>{project.accountId}</span>
        </div>
        <h3>{project.name}</h3>
        <p className="project-type">{project.type}</p>
        <p>{project.background}</p>
        <div className="role-box">
          <strong>我的角色</strong>
          <span>{project.role}</span>
        </div>
        <ul className="action-list">
          {project.actions.map((action) => (
            <li key={action}>{action}</li>
          ))}
        </ul>
        <div className="metric-grid">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
        <div className="project-actions">
          <button
            type="button"
            className="button button-dark"
            onClick={() =>
              onPreview({
                type: 'image',
                src: project.cover,
                title: project.name,
              })
            }
          >
            查看项目 <Eye size={17} />
          </button>
          {project.link && (
            <a
              className="button button-light"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              打开链接 <ArrowUpRight size={17} />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function Projects({ onPreview }) {
  return (
    <section id="projects" className="section projects-section">
      <div className="shell">
        <div className="section-heading">
          <span className="section-kicker">selected works / projects</span>
          <h2>社媒账号不是陈列页，是用户进入关系链路的入口。</h2>
        </div>
        <div className="project-stack">
          {projects.map((project, index) => (
            <TiltProjectCard
              key={project.id}
              project={project}
              index={index}
              onPreview={onPreview}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
