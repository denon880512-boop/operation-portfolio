import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

function Lightbox({ item, onClose }) {
  return (
    <AnimatePresence>
      {item ? (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`lightbox-panel ${item.type === 'video' ? 'lightbox-video-panel' : ''}`}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="lightbox-top">
              <strong>{item.title}</strong>
              <button type="button" onClick={onClose} aria-label="关闭预览">
                <X size={22} />
              </button>
            </div>
            {item.type === 'image' && <img src={item.src} alt={item.title} />}
            {item.type === 'video' && (
              <video
                src={item.src}
                controls
                autoPlay
                playsInline
                preload="auto"
              />
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default Lightbox;
