import { motion } from 'framer-motion';
import { FadeIn, GlassCard } from '../Animator';
import { FiDollarSign, FiTruck, FiShield, FiUsers, FiArrowRight } from 'react-icons/fi';

const WhyAaroth = () => {
  const features = [
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: "Transparency with Fair Pricing",
      description: "Real-time regional pricing data and open market access empowering farmers and consumers alike.",
      color: "from-earthy-yellow/70 to-earthy-yellow/90"
    },
    {
      icon: <FiTruck className="w-6 h-6" />,
      title: "Efficient Supply Chain",
      description: "AI-assisted routing system optimizes delivery by mapping district and sub-district hubs.",
      color: "from-olive/70 to-olive/90"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Risk Mitigation",
      description: "Immediate payment model eliminates credit delays and uncertainty.",
      color: "from-earthy-brown/70 to-earthy-brown/90"
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: "Community-Driven Ecosystem",
      description: "Building a vibrant ecosystem where farmers, resellers, and consumers are connected.",
      color: "from-earthy-tan/70 to-earthy-tan/90"
    }
  ];

  return (
    <section id="why-aaroth" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 120,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -right-64 -top-64 w-[600px] h-[600px] rounded-full border-2 border-earthy-yellow/10"
      />
      
      <motion.div 
        animate={{
          rotate: [360, 0]
        }}
        transition={{
          duration: 150,
          repeat: Infinity,
          ease: "linear",
          delay: 30
        }}
        className="absolute -left-80 bottom-0 w-[700px] h-[700px] rounded-full border-2 border-olive/10"
      />

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-earthy-brown mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive to-earthy-brown">Aaroth</span> Stands Out
            </h2>
            <p className="text-earthy-brown/90 max-w-2xl mx-auto">
              We're not just a business — we're a movement toward a fairer, smarter, and more connected agricultural ecosystem.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <GlassCard>
                <motion.div
                  whileHover={{ 
                    y: -10,
                    background: `linear-gradient(to bottom right, ${feature.color})`
                  }}
                  className={`p-6 rounded-2xl transition-all duration-300 h-full flex flex-col`}
                >
                  <div className="w-14 h-14 rounded-xl bg-white/30 backdrop-blur-md flex items-center justify-center mb-4 text-earthy-brown">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-earthy-brown mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-earthy-brown/90 mb-6 flex-grow">
                    {feature.description}
                  </p>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-earthy-brown/80 hover:text-gray-600 cursor-pointer"
                  >
                    <span className="mr-2">Learn more</span>
                    <FiArrowRight />
                  </motion.div>
                </motion.div>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAaroth;