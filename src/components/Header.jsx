import { motion } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-earthy-beige shadow-md fixed w-full z-50"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <span className="text-earthy-brown text-2xl font-display font-bold">AAROTH</span>
          </motion.div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-earthy-brown focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Why Aaroth', 'Company Plan', 'Mission', 'Roadmap', 'Team', 'Contact'].map((item) => (
              <motion.a 
                key={item}
                whileHover={{ scale: 1.1, color: '#8C644A' }}
                className="text-earthy-brown font-medium cursor-pointer"
                href={`#${item.toLowerCase().replace(' ', '-')}`}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4"
          >
            <div className="flex flex-col space-y-4">
              {['Home', 'Why Aaroth', 'Company Plan', 'Mission', 'Roadmap', 'Team', 'Contact'].map((item) => (
                <motion.a 
                  key={item}
                  whileTap={{ scale: 0.95 }}
                  className="text-earthy-brown font-medium py-2"
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;