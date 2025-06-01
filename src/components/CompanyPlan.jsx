import { motion } from 'framer-motion';
import { FadeIn } from '../Animator';
import { 
  FaMapMarkedAlt, 
  FaUsers, 
  FaChessPawn,
  FaBrain, 
  FaSeedling, 
  FaGlobeAsia, 
  FaRocket,
  FaCircle 
} from 'react-icons/fa';
import { GiPlantRoots, GiGrowth, GiProgression } from 'react-icons/gi';
import companyPlanWeb from '../assets/Team/companyPlanWeb.jpg';

const CompanyPlan = () => {
  const currentFocusItems = [
    {
      icon: <GiPlantRoots className="text-3xl" />,
      title: "Pilot Product",
      details: "Onion supply - Bangladesh's most volatile staple",
      subitems: [
        "Serving corporate canteens, restaurants, supershops",
        "Reliable daily bulk delivery (60kg+ orders)"
      ],
      color: "bg-earthy-yellow"
    },
    {
      icon: <FaMapMarkedAlt className="text-3xl text-earthy-tan" />,
      title: "Sourcing Hubs",
      details: "Strategic locations across production zones",
      subitems: [
        "Rajbari (current hub)",
        "Pabna, Faridpur, Kustia, Manikganj (agents)"
      ],
      color: "bg-olive"
    },
    {
      icon: <FaUsers className="text-3xl text-earthy-tan" />,
      title: "Lean Team",
      details: "Focused and efficient operation",
      subitems: [
        "5 Executive Members",
        "Field agents & support team"
      ],
      color: "bg-earthy-brown"
    },
    {
      icon: <GiGrowth className="text-3xl" />,
      title: "Expansion Plan",
      details: "Step-by-step product introduction",
      subitems: [
        "Introduce potatoes next",
        "Then garlic, ginger, other vegetables & spices",
        "Only after securing sourcing coverage"
      ],
      color: "bg-earthy-tan"
    }
  ];

  const roadmapItems = [
    {
      icon: <FaBrain className="text-3xl" />,
      title: 'Smart Sourcing Intelligence',
      description: 'Field agents provide daily quality + price data ensuring best deals from multiple regions',
      color: 'bg-earthy-yellow',
      textColor: 'text-earthy-yellow',
      iconColor: 'text-earthy-brown'
    },
    {
      icon: <FaSeedling className="text-3xl" />,
      title: 'Scalable by Design',
      description: 'Hub-based model ready for replication with gradual, low-burn expansion approach',
      color: 'bg-olive',
      textColor: 'text-olive',
      iconColor: 'text-earthy-beige'
    },
    {
      icon: <FaGlobeAsia className="text-3xl" />,
      title: 'Vision-Driven Transition',
      description: 'Shifting from traditional model to data-powered platform with AI logistics and connectivity',
      color: 'bg-earthy-brown',
      textColor: 'text-earthy-brown',
      iconColor: 'text-earthy-tan'
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: 'Step-by-Step Expansion',
      description: 'From Pilot to SME to Startup, focusing first on supply chain efficiency',
      color: 'bg-earthy-tan',
      textColor: 'text-earthy-tan',
      iconColor: 'text-earthy-brown'
    }
  ];

  const roadmapContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const roadmapItem = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section id= "company-plan" className="py-16 px-4 bg-gradient-to-br from-earthy-tan/30 via-white/30 to-earthy-tan/50">
      <div className="max-w-6xl mx-auto">
        {/* Main Company Plan Header */}
        <FadeIn>
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-earthy-brown mb-4">
              Our Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive to-earthy-yellow">Plan</span> 
            </h2>
            <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-earthy-yellow to-olive mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
            <p className="text-earthy-brown max-w-3xl mx-auto text-center mt-4">
              Structured approach combining immediate execution with long-term vision
            </p>
          </div>
        </FadeIn>

        {/* Current Focus Section */}
        <div className="mb-20 bg-earthy-beige/50 p-16 rounded-3xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-earthy-brown mb-2">
              <span className="text-transparent bg-clip-text bg-olive">Current</span> Focus
              </h3>
              <div className="w-16 h-1 bg-earthy-yellow mx-auto rounded-full"></div>
              <p className="text-earthy-brown mt-4 max-w-2xl mx-auto">
                Our immediate priorities and operational foundations
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {currentFocusItems.map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${item.color} bg-opacity-20`}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{item.title}</h3>
                <p className="font-medium mb-4">{item.details}</p>
                <ul className="space-y-2">
                  {item.subitems.map((subitem, subIndex) => (
                    <li key={subIndex} className="flex items-start">
                      <span className={`inline-block w-2 h-2 bg-earthy-yellow rounded-full mt-2 mr-2`}></span>
                      <span>{subitem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Strategic Roadmap Section */}
        <div className="mt-24 bg-earthy-beige/50 p-16 rounded-3xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-display font-semibold text-earthy-brown mb-2">
                Strategic <span className="text-transparent bg-clip-text bg-olive">Roadmap</span>
              </h3>
              <div className="w-16 h-1 bg-earthy-yellow mx-auto rounded-full"></div>
              <p className="text-earthy-brown mt-4 max-w-2xl mx-auto">
                Our phased approach to growth and transformation
              </p>
            </div>
          </FadeIn>

          <motion.div 
            className="relative"
            variants={roadmapContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-earthy-tan/50 hidden md:block"></div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {roadmapItems.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left md:mt-32'}`}
                  variants={roadmapItem}
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
                  {index < roadmapItems.length && (
                    <div className={`absolute top-16 ${
                      index % 2 === 0 
                        ? 'md:right-[-8px]' 
                        : 'md:left-[-8px]'
                    } hidden md:block`}>
                      <FaCircle className={`text-xs ${milestone.textColor}`} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
  className="rounded-xl overflow-hidden shadow-2xl mt-24 relative group"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <img 
    src={companyPlanWeb} 
    alt="Aaroth's leadership team collaboratively planning the future"
    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
  />
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-earthy-brown/10 via-earthy-brown/30 to-earthy-brown/60"></div>
  
  {/* Decorative Elements */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    {/* Subtle grid pattern */}
    <div className="absolute inset-0 bg-grid-pattern opacity-10 mix-blend-overlay"></div>
    
    {/* Corner accents */}
    <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-earthy-yellow opacity-70"></div>
    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-earthy-yellow opacity-70"></div>
    <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-earthy-yellow opacity-70"></div>
    <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-earthy-yellow opacity-70"></div>
  </div>
  
  {/* Content Overlay (optional) */}
  <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
    <motion.h3 
      className="text-3xl font-display font-bold text-earthy-beige drop-shadow-lg"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      viewport={{ once: true }}
    >
      Crafting Our Future Together
    </motion.h3>
    <motion.p 
      className="mt-2 text-earthy-tan font-sans max-w-2xl mx-auto"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      viewport={{ once: true }}
    >
      Aaroth's leadership team collaborates joyfully to shape our shared vision and strategic roadmap.
    </motion.p>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default CompanyPlan;