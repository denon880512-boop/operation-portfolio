import { motion } from 'framer-motion';
import { capabilities } from '../data/profile.js';

function Advantages() {
  return (
    <section id="advantages" className="section advantages-section">
      <div className="shell">
        <div className="section-heading">
          <span className="section-kicker">capabilities / advantages</span>
          <h2>以用户为中心，以内容建立信任，以运营完成增长闭环。</h2>
        </div>
        <div className="capability-matrix">
          {capabilities.map((item, index) => (
            <motion.article
              className="capability-card"
              key={item.title}
              initial={{ opacity: 0, y: 30, rotate: index % 2 === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -0.6 : 0.6 }}
              whileHover={{ y: -10, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Advantages;
