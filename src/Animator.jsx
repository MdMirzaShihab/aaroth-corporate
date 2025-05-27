import { motion } from 'framer-motion';

// Enhanced with more animation variants
export const FadeIn = ({ children, delay = 0, duration = 0.6 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, type: 'spring', bounce: 0.4 }}
    viewport={{ once: true, margin: "-50px" }}
  >
    {children}
  </motion.div>
);

export const SlideIn = ({ children, from = 'left', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: from === 'left' ? -100 : 100 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ 
      duration: 0.8, 
      delay,
      type: 'spring',
      stiffness: 60
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export const FloatIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 1, 
      delay,
      type: 'spring',
      damping: 10
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

export const GlassCard = ({ children, className = '' }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`backdrop-blur-lg bg-white/20 border border-white/10 rounded-2xl shadow-lg overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);