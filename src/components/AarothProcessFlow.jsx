import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaUser, 
  FaStore, 
  FaTruck, 
  FaWarehouse,
  FaUserTie,
  FaBuilding,
  FaUtensils,
  FaShoppingCart,
  FaSeedling,
  FaUserGraduate,
  FaArrowRight,
  FaArrowDown
} from 'react-icons/fa';
import { MdLocalShipping, MdStorefront } from 'react-icons/md';
import { GiGrain } from 'react-icons/gi';

const AarothProcessFlow = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const arrowVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <section className="py-16 px-4 bg-earthy-beige rounded-2xl m-5 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
           <h3 className="text-2xl md:text-3xl font-display font-semibold text-earthy-brown mb-2">
            Supply Chain <span className="text-olive">Flow Diagram</span>
          </h3>
          <div className="w-24 h-1 bg-earthy-yellow mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Top Section - Distribution Hub */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="bg-earthy-beige border-2 border-earthy-tan rounded-2xl p-8 shadow-sm">
              <div className="flex items-center gap-8 flex-wrap justify-center">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-earthy-brown/80 w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-md">
                    <FaUser className="text-2xl text-earthy-beige" />
                  </div>
                  <p className="font-display font-semibold text-earthy-brown">Person</p>
                </motion.div>
                
                <div className="bg-earthy-tan rounded-xl p-6 border border-earthy-brown/10 shadow-sm">
                  <div className="text-center">
                    <div className="text-sm font-display font-medium text-earthy-brown mb-1">Loading</div>
                    <div className="text-sm font-display font-medium text-earthy-brown mb-1">Unloading</div>
                    <div className="text-sm font-display font-medium text-earthy-brown mb-1">Grading</div>
                    <div className="text-sm font-display font-medium text-earthy-brown">Storage</div>
                  </div>
                </div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-olive/80 w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-md">
                    <FaWarehouse className="text-2xl text-earthy-beige" />
                  </div>
                  <p className="font-display font-semibold text-earthy-brown">Distribution and</p>
                  <p className="font-display font-semibold text-earthy-brown">Collection Hub</p>
                </motion.div>
                
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-earthy-brown/80 w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-md">
                    <MdLocalShipping className="text-2xl text-earthy-beige" />
                  </div>
                  <p className="font-display font-semibold text-earthy-brown">Supply chain</p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Central Hub with connecting arrows */}
          <motion.div variants={itemVariants} className="relative">
            <div className="flex justify-center mb-8">
              <motion.div 
                className="bg-olive/80 rounded-full p-8 shadow-md border-2 border-earthy-brown/10 relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaStore className="text-5xl text-earthy-beige" />
                
                {/* Floating particles */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-4 h-4 bg-earthy-yellow/80 rounded-full"
                  animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <motion.div 
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-earthy-brown rounded-full"
                  animate={{ y: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                />
              </motion.div>
            </div>

            {/* Diagonal arrows */}
            <div className="flex justify-center gap-32 mb-8">
              <motion.div variants={arrowVariants} className="text-earthy-brown/40 text-3xl">
                ↗
              </motion.div>
              <motion.div variants={arrowVariants} className="text-earthy-brown/40 text-3xl">
                ↙
              </motion.div>
            </div>
          </motion.div>

          {/* Main Flow Line */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 flex-wrap">
            {/* Supplier */}
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-earthy-tan/80 w-20 h-20 rounded-full flex items-center justify-center mb-3 shadow-md">
                <FaUser className="text-3xl text-earthy-brown" />
              </div>
              <p className="font-display font-bold text-lg text-earthy-brown">Supplier</p>
            </motion.div>
            
            <motion.div variants={arrowVariants} className="text-earthy-brown/40 text-2xl">
              <FaArrowRight />
            </motion.div>
            
            <motion.div 
              className="bg-olive/80 rounded-full p-5 border-2 border-earthy-brown/10 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaStore className="text-3xl text-earthy-beige" />
            </motion.div>
            
            <motion.div variants={arrowVariants} className="text-earthy-brown/40 text-2xl">
              <FaArrowRight />
            </motion.div>
            
            <motion.div 
              className="bg-earthy-brown/80 rounded-full p-5 border-2 border-earthy-yellow/20 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaTruck className="text-3xl text-earthy-beige" />
            </motion.div>
            
            <motion.div variants={arrowVariants} className="text-earthy-brown/40 text-2xl">
              <FaArrowRight />
            </motion.div>
            
            <motion.div 
              className="bg-earthy-yellow/80 rounded-full p-5 border-2 border-earthy-brown/10 shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdStorefront className="text-3xl text-earthy-brown" />
            </motion.div>
            
            <motion.div variants={arrowVariants} className="text-earthy-brown/40 text-2xl">
              <FaArrowRight />
            </motion.div>
            
            {/* End User */}
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-earthy-brown/80 w-20 h-20 rounded-full flex items-center justify-center mb-3 shadow-md">
                <FaUser className="text-3xl text-earthy-beige" />
              </div>
              <p className="font-display font-bold text-lg text-earthy-brown">End User</p>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div variants={itemVariants} className="flex justify-between items-start flex-wrap gap-8">
            {/* Left Side - Supplier Details */}
            <div className="flex flex-col items-center flex-1 min-w-[300px]">
              {/* Agronomist Box */}
              <motion.div 
                className="bg-earthy-tan rounded-2xl p-6 mb-6 border border-earthy-brown/10 shadow-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-earthy-brown w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
                    <FaUserGraduate className="text-xl text-earthy-beige" />
                  </div>
                  <div className="text-earthy-brown">
                    <p className="font-display font-semibold">agronomist</p>
                    <p className="text-sm font-sans">+</p>
                    <p className="font-display font-semibold">App Consultancy</p>
                    <p className="text-sm font-sans">+</p>
                    <p className="font-display font-semibold">Supplier onboarding</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Arrow down */}
              <motion.div 
                variants={arrowVariants} 
                className="text-earthy-brown/40 text-2xl mb-4"
              >
                <FaArrowDown />
              </motion.div>
              
              {/* Supplier Categories */}
              <div className="flex gap-6">
                <motion.div 
                  className="text-center bg-earthy-tan/70 rounded-xl p-6 shadow-sm border border-earthy-tan"
                  whileHover={{ scale: 1.03, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-olive w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <GiGrain className="text-xl text-earthy-beige" />
                  </div>
                  <p className="font-display font-semibold text-earthy-brown">Farmer</p>
                </motion.div>
                <motion.div 
                  className="text-center bg-earthy-tan/70 rounded-xl p-6 shadow-sm border border-earthy-tan"
                  whileHover={{ scale: 1.03, y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-earthy-brown w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                    <FaUserTie className="text-xl text-earthy-beige" />
                  </div>
                  <p className="font-display font-semibold text-earthy-brown">Supplier</p>
                </motion.div>
              </div>
            </div>

            {/* Right Side - End User Categories */}
            <div className="flex flex-col items-center flex-1 min-w-[400px]">
              {/* Arrow down */}
              <motion.div 
                variants={arrowVariants} 
                className="text-earthy-brown/40 text-2xl mb-6"
              >
                <FaArrowDown />
              </motion.div>
              
              {/* End User Categories */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { icon: FaUser, label: 'individuals', bg: 'bg-earthy-tan/80', border: 'border-earthy-tan' },
                  { icon: FaStore, label: 'Retailers', bg: 'bg-olive/80', border: 'border-olive/50', text: 'text-earthy-beige' },
                  { icon: FaShoppingCart, label: 'Street\nVendors', bg: 'bg-earthy-yellow/70', border: 'border-earthy-yellow/50' },
                  { icon: FaBuilding, label: 'Corporates', bg: 'bg-earthy-brown/80', border: 'border-earthy-brown/50', text: 'text-earthy-beige' },
                  { icon: FaUtensils, label: 'Restaurants', bg: 'bg-olive/80', border: 'border-olive/50', text: 'text-earthy-beige' }
                ].map((category, index) => (
                  <motion.div 
                    key={index}
                    className={`text-center ${category.bg} rounded-xl p-4 shadow-sm border ${category.border} ${category.text || 'text-earthy-brown'}`}
                    whileHover={{ scale: 1.03, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`${category.text ? 'bg-earthy-beige/20' : 'bg-earthy-brown/10'} w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2`}>
                      <category.icon className={`text-lg ${category.text || 'text-earthy-brown'}`} />
                    </div>
                    <p className="text-sm font-display font-medium whitespace-pre-line">
                      {category.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Floating Background Elements */}
        <motion.div 
          className="absolute top-1/4 left-10 opacity-10 pointer-events-none"
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 8 }}
        >
          <div className="w-32 h-32 rounded-full bg-earthy-yellow/20 blur-2xl"></div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-10 opacity-10 pointer-events-none"
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6, delay: 1 }}
        >
          <div className="w-24 h-24 rounded-full bg-olive/20 blur-2xl"></div>
        </motion.div>

        <motion.div 
          className="absolute top-1/2 left-1/4 opacity-5 pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ repeat: Infinity, duration: 10, delay: 2 }}
        >
          <FaSeedling className="text-8xl text-olive/20" />
        </motion.div>
      </div>
    </section>
  );
};

export default AarothProcessFlow;