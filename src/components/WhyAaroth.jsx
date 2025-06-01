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
    <section id= "why-aaroth" className="py-16 px-4 bg-text-earthy-tan">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-earthy-brown mb-4">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive to-earthy-yellow">Aaroth</span> Stands Out
            </h2>
            <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-earthy-yellow to-olive mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
            <p className="text-earthy-brown max-w-3xl mx-auto text-lg">
              Our unique approach combines technology with deep agricultural expertise
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 w-full lg:w-2/3"
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
            className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${feature.color} bg-opacity-20`}
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1 }
            }}
            whileHover={{ y: -5 }}
          >
            <div className={`w-14 h-14 ${feature.color} rounded-full flex items-center justify-center mb-4`}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-display font-bold text-earthy-brown mb-3">{feature.title}</h3>
            <p className="text-earthy-brown">{feature.description}</p>
          </motion.div>
        ))}
          </motion.div>

          {/* Image Container - Takes 1/3 width on desktop, full width on mobile */}
          <motion.div 
            className="w-full lg:w-1/3 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={AarothsDigitalAgricultureNetwork} 
              alt="Aaroth's digital agriculture network"
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div>
        </div>

        {/* Optional Stats or CTA Section */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-white px-8 py-4 rounded-full shadow-md">
          <p className="text-earthy-brown font-bold text-2xl">
  <span className="text-olive">51.20%</span> Efficiency Improvement Over Traditional Approach
</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAaroth;