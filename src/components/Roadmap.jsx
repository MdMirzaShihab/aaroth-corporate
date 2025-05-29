import { motion } from 'framer-motion';
import { FadeIn } from '../Animator';
import { 
  FaBrain, 
  FaSeedling, 
  FaGlobeAsia, 
  FaRocket,
  FaCircle 
} from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';

const Roadmap = () => {
  const milestones = [
    {
      icon: <FaBrain className="text-3xl" />,
      title: 'Smart Sourcing Intelligence',
      description: 'Field agents provide daily quality + price data ensuring best deals from multiple regions',
      color: 'bg-earthy-yellow',
      iconColor: 'text-earthy-brown'
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: 'Scalable by Design',
      description: 'Hub-based model ready for replication with gradual, low-burn expansion approach',
      color: 'bg-olive',
      iconColor: 'text-earthy-beige'
    },
    {
      icon: <FaGlobeAsia className="text-3xl" />,
      title: 'Vision-Driven Transition',
      description: 'Shifting from traditional model to data-powered platform with AI logistics and connectivity',
      color: 'bg-earthy-brown',
      iconColor: 'text-earthy-tan'
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Step-by-Step Expansion',
      description: 'From Pilot to SME to Startup, focusing first on supply chain efficiency',
      color: 'bg-earthy-tan',
      iconColor: 'text-earthy-brown'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section className="py-16 px-4 bg-earthy-beige">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-earthy-brown mb-4">
              Our Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-earthy-yellow to-olive">Roadmap</span> 
            </h2>
            <div className="w-24 h-1 bg-earthy-yellow mx-auto rounded-full"></div>
          </div>
        </FadeIn>

        <motion.div 
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-earthy-tan/50 hidden md:block"></div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index}
                className={`relative ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left md:mt-32'}`}
                variants={item}
              >
                {/* Mobile connector */}
                <div className="absolute left-0 top-8 w-1/4 h-1 bg-earthy-tan md:hidden"></div>
                
                <div className="flex items-start md:block">
                  {/* Icon bubble */}
                  <div className={`${milestone.color} w-16 h-16 rounded-full flex items-center justify-center z-10 relative mr-4 md:mx-auto md:mb-6`}>
                    <span className={milestone.iconColor}>{milestone.icon}</span>
                  </div>
                  
                  <div className="flex-1 md:text-center">
                    <h3 className="text-xl font-display font-bold text-earthy-brown mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-earthy-brown font-sans">
                      {milestone.description}
                    </p>
                    
                    {/* Animated progress bar */}
                    <motion.div 
                      className="mt-4 h-2 bg-earthy-tan/30 rounded-full overflow-hidden"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    >
                      <div className={`h-full ${milestone.color} rounded-full`}></div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Desktop connector dot */}
                {index < milestones.length - 1 && (
                  <div className={`absolute top-16 ${
                    index % 2 === 0 
                      ? 'md:right-[-8px]' 
                      : 'md:left-[-8px]'
                  } hidden md:block`}>
                    <FaCircle className={`text-xs ${milestone.iconColor}`} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
          
          {/* Floating elements */}
          <motion.div 
            className="absolute top-1/4 left-10 opacity-10"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
          >
            <div className="w-24 h-24 rounded-full bg-earthy-yellow blur-xl"></div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-1/4 right-10 opacity-10"
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 5, delay: 1 }}
          >
            <div className="w-32 h-32 rounded-full bg-olive blur-xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Roadmap;