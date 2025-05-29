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
    <section className="py-16 px-4 bg-earthy-beige min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-display font-bold text-earthy-brown mb-4">
            Supply Chain <span className="text-transparent bg-clip-text bg-gradient-to-r from-earthy-yellow to-olive">Flow Diagram</span>
          </h1>
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
            <div className="bg-gradient-to-r from-earthy-tan to-earthy-beige border-2 border-earthy-yellow/50 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-8 flex-wrap justify-center">
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-earthy-brown w-16 h-16 rounded-full flex items-center justify-center mb-3">
                    <FaUser className="text-2xl text-earthy-beige" />
                  </div>
                  <p className="font-display font-semibold text-earthy-brown">Person</p>
                </motion.div>
                
                <div className="bg-gradient-to-br from-earthy-yellow to-olive rounded-xl p-6 border-2 border-earthy-brown/20 shadow-md">
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
                  <div className="bg-olive w-16 h-16 rounded-full flex items-center justify-center mb-3">
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
                  <div className="bg-earthy-brown w-16 h-16 rounded-full flex items-center justify-center mb-3">
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
                className="bg-gradient-to-br from-olive to-earthy-yellow rounded-full p-8 shadow-xl border-4 border-earthy-brown/20 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FaStore className="text-5xl text-earthy-brown" />
                
                {/* Floating particles */}
                <motion.div 
                  className="absolute -top-2 -right-2 w-4 h-4 bg-earthy-yellow rounded-full"
                  animate={{ y: [-5, 5, -5], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                />
                <motion.div 
                  className="absolute -bottom-2 -left-2 w-3 h-3 bg-olive rounded-full"
                  animate={{ y: [5, -5, 5], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
                />
              </motion.div>
            </div>

            {/* Diagonal arrows */}
            <div className="flex justify-center gap-32 mb-8">
              <motion.div variants={arrowVariants} className="text-earthy-brown/60 text-3xl">
                ↗
              </motion.div>
              <motion.div variants={arrowVariants} className="text-earthy-brown/60 text-3xl">
                ↙
              </motion.div>
            </div>
          </motion.div>

          {/* Main Flow Line */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-6 flex-wrap">
            {/* Supplier */}
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-earthy-yellow to-earthy-tan w-20 h-20 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <FaUser className="text-3xl text-earthy-brown" />
              </div>
              <p className="font-display font-bold text-lg text-earthy-brown">Supplier</p>
            </motion.div>
            
            <motion.div variants={arrowVariants} className="text-earthy-brown/60 text-2xl">
              <FaArrowRight />
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-olive to-earthy-yellow rounded-full p-5 border-3 border-earthy-brown/20 shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaStore className="text-3xl text-earthy-brown" />
            </motion.div>
            
            <motion.div variants={arrowVariants} className="text-earthy-brown/60 text-2xl">
              <FaArrowRight />
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-earthy-tan to-earthy-brown rounded-full p-5 border-3 border-earthy-yellow/40 shadow-lg"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaTruck className="text-3xl text-earthy-beige" />
            </motion.div>
            
            <motion.div variants={arrowVariants} className="text-earthy-brown/60 text-2xl">
              <FaArrowRight />
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-earthy-yellow to-olive rounded-full p-5 border-3 border-earthy-brown/20 shadow-lg"
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <MdStorefront className="text-3xl text-earthy-brown" />
            </motion.div>
            
            <motion.div variants={arrowVariants} className="text-earthy-brown/60 text-2xl">
              <FaArrowRight />
            </motion.div>
            
            {/* End User */}
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-earthy-brown to-earthy-tan w-20 h-20 rounded-full flex items-center justify-center mb-3 shadow-lg">
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
                className="bg-gradient-to-br from-earthy-yellow to-olive rounded-2xl p-6 mb-6 border-2 border-earthy-brown/20 shadow-lg backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-earthy-brown w-12 h-12 rounded-full flex items-center justify-center">
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
                className="text-earthy-brown/60 text-2xl mb-4"
              >
                <FaArrowDown />
              </motion.div>
              
              {/* Supplier Categories */}
              <div className="flex gap-6">
                <motion.div 
                  className="text-center bg-gradient-to-br from-earthy-beige to-earthy-tan rounded-xl p-6 shadow-md border border-earthy-yellow/30"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-olive w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <GiGrain className="text-xl text-earthy-beige" />
                  </div>
                  <p className="font-display font-semibold text-earthy-brown">Farmer</p>
                </motion.div>
                <motion.div 
                  className="text-center bg-gradient-to-br from-earthy-beige to-earthy-tan rounded-xl p-6 shadow-md border border-earthy-yellow/30"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-earthy-brown w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
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
                className="text-earthy-brown/60 text-2xl mb-6"
              >
                <FaArrowDown />
              </motion.div>
              
              {/* End User Categories */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { icon: FaUser, label: 'individuals', color: 'from-earthy-tan to-earthy-beige' },
                  { icon: FaStore, label: 'Retailers', color: 'from-olive to-earthy-yellow' },
                  { icon: FaShoppingCart, label: 'Street\nVendors', color: 'from-earthy-yellow to-earthy-tan' },
                  { icon: FaBuilding, label: 'Corporates', color: 'from-earthy-brown to-earthy-tan' },
                  { icon: FaUtensils, label: 'Restaurants', color: 'from-olive to-earthy-brown' }
                ].map((category, index) => (
                  <motion.div 
                    key={index}
                    className={`text-center bg-gradient-to-br ${category.color} rounded-xl p-4 shadow-md border border-earthy-brown/10`}
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-earthy-brown/20 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <category.icon className="text-lg text-earthy-brown" />
                    </div>
                    <p className="text-sm font-display font-medium text-earthy-brown whitespace-pre-line">
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
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-earthy-yellow to-olive blur-2xl"></div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-10 opacity-10 pointer-events-none"
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 6, delay: 1 }}
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-olive to-earthy-brown blur-2xl"></div>
        </motion.div>

        <motion.div 
          className="absolute top-1/2 left-1/4 opacity-5 pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ repeat: Infinity, duration: 10, delay: 2 }}
        >
          <FaSeedling className="text-8xl text-olive" />
        </motion.div>
      </div>
    </section>
  );
};

export default AarothProcessFlow;
