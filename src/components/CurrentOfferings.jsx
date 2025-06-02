import { motion } from 'framer-motion';
import { FadeIn } from '../Animator';
import { FaTruck, FaChartLine, FaShoppingBag, FaLaptopCode, FaRobot, FaBrain, FaMagic } from 'react-icons/fa';
import { GiPriceTag } from 'react-icons/gi';

const CurrentOfferings = () => {
  const currentServices = [
    {
      icon: <FaTruck className="text-3xl" />,
      title: "Bulk Onion Delivery",
      description: "For corporate canteens, restaurants, supermarkets, and retailers",
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Real-Time Updates",
      description: "Price and quality data from hubs in Pabna, Faridpur, Rajbari, Kustia, and Manikganj",
      color: "bg-olive"
    },
    {
      icon: <FaShoppingBag className="text-3xl" />,
      title: "Customized Procurement",
      description: "Guaranteed quality and pricing tailored to your needs",
      color: "bg-earthy-brown"
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Online Marketplace",
      description: "Tailored digital platform currently in development",
      color: "bg-earthy-tan"
    }
  ];

  const futureInnovations = [
    {
      icon: <GiPriceTag className="text-3xl" />,
      title: "Smart Dynamic Pricing",
      description: "AI-powered pricing adjustments for optimal buyer value",
      color: "bg-earthy-yellow",
      comingSoon: true
    },
    {
      icon: <FaRobot className="text-3xl" />,
      title: "Automated Procurement",
      description: "Streamlined bulk ordering workflows",
      color: "bg-olive",
      comingSoon: true
    },
    {
      icon: <FaBrain className="text-3xl" />,
      title: "AI-Optimized Delivery",
      description: "Intelligent routing for maximum efficiency",
      color: "bg-earthy-brown",
      comingSoon: true
    },
    {
      icon: <FaMagic className="text-3xl" />,
      title: "Forecasting Tools",
      description: "Predictive analytics for hub expansion planning",
      color: "bg-earthy-tan",
      comingSoon: true
    }
  ];

  return (
    <section id ="current-offerings" className="py-16 px-4 bg-gradient-to-br from-earthy-tan/80 to-earthy-beige/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-earthy-brown mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive to-earthy-yellow">Offerings</span> 
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

        {/* Current Offerings */}
        <motion.div 
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
           <h3 className="text-2xl md:text-3xl font-display font-semibold text-center text-earthy-brown mb-2">
            What We Bring <span className="text-transparent bg-clip-text bg-olive">to the Table</span> Right Now
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {currentServices.map((service, index) => (
              <motion.div
                key={`current-${index}`}
                className="bg-white/30 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-14 h-14 bg-olive text-earthy-beige rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  {service.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-earthy-brown text-center mb-2">
                  {service.title}
                </h4>
                <p className="text-earthy-brown text-center">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Innovations */}
        <motion.div 
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <h3 className="text-2xl md:text-3xl font-display text-center font-semibold text-earthy-brown mb-2">
            <span className="text-transparent bg-clip-text bg-olive">Beyond</span>  the Basics: Coming Soon
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
            {futureInnovations.map((innovation, index) => (
              <motion.div
                key={`future-${index}`}
                className="bg-white/50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow relative overflow-hidden"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 }
                }}
                whileHover={{ y: -5 }}
              >
                {/* Coming Soon Ribbon */}
                <div className="absolute top-9 right-1 bg-earthy-yellow text-white text-xs font-bold px-6 py-1 transform rotate-45 translate-x-8 -translate-y-2">
                  COMING SOON
                </div>
                
                <div className={`w-14 h-14 bg-earthy-tan rounded-full flex items-center justify-center mb-4 mx-auto`}>
                  {innovation.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-earthy-brown text-center mb-2">
                  {innovation.title}
                </h4>
                <p className="text-earthy-brown text-center">
                  {innovation.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Connecting Arrow */}
        <motion.div 
          className="flex justify-center my-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default CurrentOfferings;