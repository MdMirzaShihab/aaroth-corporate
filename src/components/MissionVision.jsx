import { motion } from 'framer-motion';
import { FadeIn, FloatIn, GlassCard } from '../Animator';
import { FiTarget, FiEye, FiRefreshCw } from 'react-icons/fi';
import AarothProcessFlow from './AarothProcessFlow';
import AarothProcessFlowPic from '../assets/AarothProcessFlow.webp';

const MissionVision = () => {
  const cards = [
    {
      title: "Our Mission",
      content: "To make the agri-supply chain transparent, efficient and profitable for every stakeholder.",
      icon: <FiTarget className="w-8 h-8" />,
    },
    {
      title: "Our Vision",
      content: "To be the leading agri-tech company in the Bangladesh market and beyond, empowering the food ecosystem through data and trust.",
      icon: <FiEye className="w-8 h-8" />,
    },
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-earthy-tan/30 via-white/50 to-earthy-tan/50 relative overflow-hidden">
      {/* Floating circles */}
      <motion.div 
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-earthy-yellow/20 backdrop-blur-sm"
      />
      
      <motion.div 
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute bottom-1/3 right-1/3 w-20 h-20 rounded-full bg-olive/15 backdrop-blur-sm"
      />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-earthy-brown mb-4">
            Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-earthy-yellow to-olive">&</span> Vision
          </h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-earthy-yellow to-olive mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
  {cards.map((card, index) => (
    <FloatIn key={index} delay={index * 0.2}>
      <motion.div
        whileHover={{ y: -5 }}
        className="h-full"
      >
        <div className={`h-full p-8 rounded-2xl border-2 border-earthy-tan/60 bg-earthy-tan/30 backdrop-blur-sm shadow-lg overflow-hidden relative group transition-all duration-300 hover:border-earthy-yellow/70 hover:shadow-xl`}>
          {/* Decorative background elements */}
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-earthy-yellow/10 group-hover:bg-earthy-yellow/20 transition-all duration-500"></div>
          <div className="absolute -left-5 -bottom-5 w-32 h-32 rounded-full bg-olive/5 group-hover:bg-olive/10 transition-all duration-700"></div>
          
          {/* Icon container */}
          <div className={`w-16 h-16 rounded-lg mb-6 flex items-center justify-center ${index === 0 ? 'bg-earthy-yellow/20 text-earthy-yellow' : 'bg-olive/20 text-olive'} group-hover:scale-110 transition-transform duration-300`}>
            {card.icon}
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-display font-bold text-earthy-brown mb-4 relative z-10">
            {card.title}
          </h3>
          <p className="text-earthy-brown/80 relative z-10 leading-relaxed">
            {card.content}
          </p>
          
          {/* Bottom accent */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 ${index === 0 ? 'bg-gradient-to-r from-earthy-yellow/80 to-earthy-yellow/20' : 'bg-gradient-to-r from-olive/80 to-olive/20'} group-hover:h-1.5 transition-all duration-300`}></div>
        </div>
      </motion.div>
    </FloatIn>
  ))}
</div>

        <FadeIn delay={0.6}>
          <GlassCard>
            <div className="flex flex-col lg:flex-row items-center p-1">
              <div className="lg:w-1/2 p-8">
                <h3 className="text-2xl font-display font-semibold text-earthy-brown mb-4">
                  The Aaroth <span className="text-olive">Holistic</span> Process Flow
                </h3>
                <p className="text-earthy-brown/90 mb-6">
                  Our complete supply chain combines agronomic support, digital tools, and decentralized hubs for efficient, transparent distribution.
                </p>
                <ul className="space-y-3">
                  {['Farmer Empowerment', 'Smart Sourcing', 'AI Routing', 'Quality Control', 'Fair Pricing'].map((item, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-center text-earthy-brown"
                    >
                      <span className="inline-block w-3 h-3 rounded-full bg-olive mr-3"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 p-4 lg:border-l border-earthy-tan/20">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          {/* Color overlay to harmonize the image */}
          <div className="absolute inset-0 bg-gradient-to-br from-earthy-beige/30 to-earthy-tan/20 z-10 mix-blend-soft-light"></div>
          
          {/* Image frame decoration */}
          <div className="absolute inset-0 border-2 border-earthy-tan/30 rounded-xl pointer-events-none"></div>
          
          {/* Process flow diagram with adjusted colors */}
          <img 
            src={AarothProcessFlowPic}
            alt="Aaroth agricultural supply chain process flow"
            className="w-full h-auto relative z-0"
            style={{
              filter: 'sepia(20%) hue-rotate(-5deg) saturate(110%) contrast(90%)',
            }}
          />
          
          {/* Animated decorative elements */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-earthy-yellow via-olive to-earthy-brown"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </div>
      </div>
            </div>
          </GlassCard>
        </FadeIn>
        {/* <AarothProcessFlow /> */}
      </div>
    </section>
  );
};

export default MissionVision;