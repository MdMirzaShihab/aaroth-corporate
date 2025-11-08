import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  // Extract YouTube video ID from the URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  // Handle ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-earthy-brown/80 backdrop-blur-md" />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass Card Container */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
              {/* Gradient Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-earthy-yellow/30 via-olive/30 to-earthy-tan/30 rounded-2xl blur-xl opacity-60" />

              {/* Content */}
              <div className="relative">
                {/* Close Button */}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute -top-4 -right-4 z-20 bg-earthy-brown hover:bg-earthy-yellow text-white p-3 rounded-full shadow-lg transition-colors duration-200"
                  aria-label="Close modal"
                >
                  <FaTimes className="text-xl" />
                </motion.button>

                {/* Video Container */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  {videoId ? (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-2xl"
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-earthy-beige/20 rounded-2xl">
                      <p className="text-white text-lg">Invalid video URL</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
