import { motion } from 'framer-motion';
import { FadeIn, SlideIn, FloatIn, GlassCard } from '../Animator';
import { FaSeedling, FaLeaf, FaTree, FaWater,   FaTractor, FaWarehouse, FaChartLine, FaHandshake } from 'react-icons/fa';
import { GiWheat, GiCorn, GiFarmTractor } from 'react-icons/gi';
import HeroPic from '../assets/AarothFarmerPic.jpg';

const Hero = () => {
  const floatingItems = [
    { text: "Farmers", color: "bg-earthy-yellow/80", textColor:" text-white" },
    { text: "Wholesalers", color: "bg-earthy-tan/80", textColor:" text-earthy-brown" },
    { text: "Retailers", color: "bg-earthy-brown/80", textColor:" text-white" },
    { text: "Consumers", color: "bg-earthy-tan/80", textColor:" text-earthy-brown" }
  ];

  return (
    <section 
      id="home"
      className="min-h-screen bg-gradient-to-br from-earthy-beige/90 via-earthy-tan/70 to-earthy-beige/90 flex items-center justify-center pt-20 relative overflow-hidden"
    >

<motion.div 
    className="absolute top-1/4 left-1/4 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 2 }}
  >
    <FaSeedling className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute top-1/2 left-10 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 2 }}
  >
    <FaLeaf className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute bottom-20 right-20 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 4 }}
  >
    <FaTree className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute top-1/3 right-1/4 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 1 }}
  >
    <FaWater className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute bottom-1/4 left-1/3 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 3 }}
  >
    <FaTractor className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute top-1/4 right-10 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 5 }}
  >
    <FaWarehouse className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute bottom-10 left-40 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 2.5 }}
  >
    <FaChartLine className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute top-20 right-1/3 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 3.5 }}
  >
    <FaHandshake className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute bottom-1/3 left-1/5 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 1.5 }}
  >
    <GiWheat className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute bottom-10 right-1/5 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 4.5 }}
  >
    <GiCorn className="text-8xl text-olive" />
  </motion.div>
  

      {/* Floating background elements */}
      <motion.div 
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-earthy-yellow/20 blur-xl"
      />
      
      <motion.div 
        animate={{
          y: [0, 30, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute -right-20 bottom-0 w-80 h-80 rounded-full bg-olive/15 blur-xl"
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <FadeIn className="lg:w-1/2">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-earthy-brown mb-6 leading-tight">
              Redefining <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive to-earthy-yellow">Bangladesh's</span> agricultural supply chain
            </h1>
            <p className="text-earthy-brown/90 text-lg mb-8">
              A data-driven agritech company offering hybrid B2B and B2C supply chain solutions that ensure fair prices, quality products, and transparent processes.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0px 10px 25px -10px rgba(140,100,74,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-earthy-brown text-white px-8 py-3 rounded-full font-medium shadow-lg"
              >
                Learn More
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="backdrop-blur-lg bg-white/20 border border-white/20 text-earthy-brown px-8 py-3 rounded-full font-medium shadow-lg"
              >
                Watch Video
              </motion.button>
            </div>
          </FadeIn>
          
          <SlideIn from="right" className="lg:w-1/2">
            <GlassCard className="p-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-earthy-yellow/40 to-olive/40 rounded-3xl blur-xl opacity-70"></div>
                <div className="relative bg-white/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={HeroPic} 
                    alt="Agriculture supply chain"
                    className="w-full h-auto rounded-t-2xl"
                  />
                  <div className="p-6">
                    <div className="flex flex-wrap justify-center gap-3">
                      {floatingItems.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ y: 0 }}
                          animate={{ y: [0, -10, 0] }}
                          transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className={`${item.color} ${item.textColor} px-4 py-2 rounded-full  text-sm font-medium backdrop-blur-md`}
                        >
                          {item.text}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;