import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { FaTimes, FaRobot, FaChartLine, FaStore, FaTruck, FaWarehouse, FaExclamationTriangle, FaDollarSign, FaRoad, FaShieldAlt } from 'react-icons/fa';
import AarothLogo from '../assets/AAROTHLOGOPNG-min.png';

const LearnMoreModal = ({ isOpen, onClose }) => {
  // Add style tag for hiding scrollbar in WebKit browsers
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
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

  // Animation variants for slide & scale effect
  const slideFromLeft = {
    hidden: { opacity: 0, x: -50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 }
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: { opacity: 1, x: 0, scale: 1 }
  };

  const challenges = [
    {
      icon: FaExclamationTriangle,
      title: "Market Instability",
      description: "Multi-layer middlemen manipulation and lack of transparency in pricing and information"
    },
    {
      icon: FaDollarSign,
      title: "Unfair Pricing",
      description: "Price determination influenced by syndicates, depriving farmers of fair earnings"
    },
    {
      icon: FaRoad,
      title: "Limited Market Access",
      description: "Farmers lack direct connection to all buyer segments and market opportunities"
    },
    {
      icon: FaTruck,
      title: "High Transportation Costs",
      description: "Inefficient routing and bulk-to-small quantity logistics increase operational expenses"
    }
  ];

  const solutions = [
    {
      icon: FaRobot,
      title: "AI-Powered Marketplace",
      description: "Transparent, intelligent platform connecting farmers directly with buyers using real-time data"
    },
    {
      icon: FaChartLine,
      title: "Real-Time & Forecasted Pricing",
      description: "Regional price data and AI-driven forecasts ensure full transparency for all market participants"
    },
    {
      icon: FaStore,
      title: "Direct Market Access",
      description: "Multivendor B2B/B2C platform eliminating middlemen and empowering farmers with fair prices"
    },
    {
      icon: FaWarehouse,
      title: "Smart Collection Hubs",
      description: "Decentralized aggregation system with AI-powered logistics for efficient nationwide distribution"
    }
  ];

  const scrollToSection = (sectionId) => {
    onClose();
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

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
          <div className="absolute inset-0 z-0 bg-earthy-brown/90 backdrop-blur-md" />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Positioned outside glass card for proper z-index layering */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute -top-4 -right-4 z-[100] bg-white hover:bg-earthy-yellow text-earthy-brown p-3 rounded-full shadow-2xl ring-2 ring-white/50 transition-colors duration-200"
              aria-label="Close modal"
            >
              <FaTimes className="text-xl" />
            </motion.button>

            {/* Glass Card Container */}
            <div className="relative bg-white/15 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl">
              {/* Gradient Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-earthy-yellow/20 via-olive/20 to-earthy-tan/20 rounded-2xl blur-lg opacity-40 -z-10" />

              {/* Content */}
              <div
                className="relative p-6 md:p-10 max-h-[85vh] overflow-y-auto overflow-x-hidden hide-scrollbar"
                style={{
                  scrollbarWidth: 'none', /* Firefox */
                  msOverflowStyle: 'none', /* IE and Edge */
                }}
              >
                {/* Header - Logo */}
                <motion.div
                  variants={slideFromLeft}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center mb-8"
                >
                  <div className="bg-white rounded-2xl p-6 md:p-8 inline-block shadow-2xl">
                    <img
                      src={AarothLogo}
                      alt="Aaroth - Redefining the Agricultural Supply Chain"
                      className="max-w-xs md:max-w-md w-full"
                    />
                  </div>
                </motion.div>

                {/* The Challenge - Slide from Right */}
                <motion.div
                  variants={slideFromRight}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    The Challenge We're Solving
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {challenges.map((challenge, index) => {
                      const Icon = challenge.icon;
                      return (
                        <div key={index} className="bg-white/25 backdrop-blur-sm border border-white/40 rounded-xl p-4 shadow-lg">
                          <div className="flex items-start gap-3">
                            <div className="bg-red-500/30 p-2.5 rounded-lg shrink-0">
                              <Icon className="text-red-300 text-lg" />
                            </div>
                            <div>
                              <h4 className="text-white font-bold text-sm mb-1">
                                {challenge.title}
                              </h4>
                              <p className="text-white/95 text-xs leading-relaxed">
                                {challenge.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* The Aaroth Solution - Alternating Slide Animation */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-6"
                >
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    The Aaroth Solution
                  </h3>
                  <div className="grid md:grid-cols-2 gap-5">
                    {solutions.map((solution, index) => {
                      const Icon = solution.icon;
                      const variants = index % 2 === 0 ? slideFromLeft : slideFromRight;

                      return (
                        <motion.div
                          key={index}
                          variants={variants}
                          initial="hidden"
                          animate="visible"
                          transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                          className="bg-white/30 backdrop-blur-sm border border-white/40 rounded-xl p-5 hover:bg-white/40 hover:border-white/50 transition-all duration-300 shadow-lg"
                        >
                          <div className="flex items-start gap-4">
                            <div className="bg-green-500/30 p-3 rounded-lg shrink-0">
                              <Icon className="text-green-300 text-2xl" />
                            </div>
                            <div>
                              <h4 className="text-white font-bold mb-2">
                                {solution.title}
                              </h4>
                              <p className="text-white/95 text-sm leading-relaxed">
                                {solution.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>

                {/* Impact Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-gradient-to-r from-earthy-yellow/30 via-olive/30 to-earthy-tan/30 backdrop-blur-sm border border-white/50 rounded-xl p-6 mb-6 text-center shadow-xl"
                >
                  <h4 className="text-xl font-bold text-white mb-3">
                    Transforming Farm to Market
                  </h4>
                  <p className="text-white text-sm md:text-base leading-relaxed">
                    Empowering farmers with direct market access, fair pricing, and cutting-edge technology — revolutionizing how Bangladesh's agricultural products reach consumers while ensuring transparency and profitability for every stakeholder in the supply chain.
                  </p>
                </motion.div>

                {/* Action Buttons - Slide from Bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('why-aaroth')}
                    className="bg-earthy-yellow text-earthy-brown px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-shadow duration-200"
                  >
                    Explore Our Approach
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('contact')}
                    className="backdrop-blur-lg bg-white/20 border border-white/30 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-white/30 transition-colors duration-200"
                  >
                    Get In Touch
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LearnMoreModal;
