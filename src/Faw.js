import { motion } from 'framer-motion';
import { FadeIn } from '../Animator';
import { FaShieldAlt, FaChartLine, FaNetworkWired, FaUsers, FaClock } from 'react-icons/fa';
import { GiProgression } from 'react-icons/gi';
import AarothsDigitalAgricultureNetwork from '../assets/AarothsDigitalAgricultureNetwork.webp';

const WhyAaroth = () => {
    const features = [
        {
          icon: <FaShieldAlt className="text-3xl " />,
          title: "Transparency & Trust",
          description: "Real-time regional pricing data and open market access empower farmers and consumers alike.",
          color: "bg-earthy-yellow"
        },
        {
          icon: <FaNetworkWired className="text-3xl text-earthy-tan" />,
          title: "Efficient Supply Chain",
          description: "AI-assisted routing optimizes delivery through district and sub-district hubs.",
          color: "bg-olive"
        },
        {
          icon: <FaChartLine className="text-3xl text-earthy-tan" />,
          title: "Hybrid Model",
          description: "Adapts to existing retail practices while introducing digital efficiency.",
          color: "bg-earthy-brown"
        },
        {
          icon: <FaUsers className="text-3xl" />,
          title: "Community-Driven",
          description: "Shared platform fosters knowledge exchange and collaborative growth.",
          color: "bg-earthy-tan"
        },
        {
          icon: <GiProgression className="text-3xl" />,
          title: "Phased Deployment",
          description: "Iterative approach ensures practical usability and continuous improvement.",
          color: "bg-earthy-yellow"
        },
        {
          icon: <FaClock className="text-3xl text-earthy-tan" />,
          title: "Adaptation-Centric",
          description: "Smooth transition from traditional structures to innovative models.",
          color: "bg-olive"
        }
      ];

  return (
    <section className="py-16 px-4 bg-text-earthy-tan">
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-earthy-brown mb-4">
            Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive to-earthy-yellow">Aaroth</span>  Stands Out
          </h2>
          <div className="w-24 h-1 bg-earthy-yellow mx-auto rounded-full"></div>
          <p className="text-earthy-brown max-w-3xl mx-auto text-center mt-4 mb-12">
            Our unique approach combines technology with deep agricultural expertise
          </p>
        </div>
      </FadeIn>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${feature.color} bg-opacity-20`}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            whileHover={{ y: -5 }}
          >
            <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mb-6`}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-display font-bold text-earthy-brown mb-3">{feature.title}</h3>
            <p className="text-earthy-brown">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Image suggestion: 
        A futuristic farm-to-table visualization showing digital elements 
        overlaying a traditional agricultural supply chain. Could show:
        - Farmers with tablets
        - AI routing visualization
        - Digital price displays
        - Network connections between rural and urban areas
      */}
      <div className="mt-16 rounded-xl overflow-hidden shadow-2xl">
        <img 
          src= {AarothsDigitalAgricultureNetwork} 
          alt="Aaroth's digital agriculture network"
          className="w-full h-auto"
        />
      </div>
    </div>
  </section>
  );
};

export default WhyAaroth;