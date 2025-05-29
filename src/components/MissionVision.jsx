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
    <section id="mission" className="py-20 bg-gradient-to-b from-earthy-beige/30 to-earthy-tan/30 relative overflow-hidden">
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
        <h2 className="text-3xl md:text-4xl font-display font-bold text-earthy-brown mb-4">
            Mission <span className="text-transparent bg-clip-text bg-gradient-to-r from-earthy-yellow to-olive">&</span> Vision
          </h2>
          <div className="w-24 h-1 bg-earthy-yellow mx-auto rounded-full"></div>
        </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {cards.map((card, index) => (
            <FloatIn key={index} delay={index * 0.2}>
              <motion.div
                whileHover="hover"
                initial="rest"
                variants={{
                  rest: { rotateY: 0, rotateX: 0 },
                  hover: { rotateY: 5, rotateX: 5 }
                }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="h-full"
              >
                <GlassCard>
                  <div className={`h-full p-8 rounded-2xl bg-gradient-to-br from-earthy-yellow to-earthy-brown text-white`}>
                    <div className="w-16 h-16 rounded-xl bg-white/30 backdrop-blur-md flex items-center justify-center mb-6">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4">{card.title}</h3>
                    <p className="opacity-90">{card.content}</p>
                  </div>
                </GlassCard>
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
              <div className="lg:w-1/2 p-8 lg:border-l border-white/10">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-earthy-yellow/30 to-olive/30 rounded-3xl blur-xl opacity-50"></div>
                  <div className="relative bg-white/60 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src= {AarothProcessFlowPic}
                      alt="Aaroth process flow"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </FadeIn>
        <AarothProcessFlow />
      </div>
    </section>
  );
};

export default MissionVision;