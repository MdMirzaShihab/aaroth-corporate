import { motion } from 'framer-motion';
import { FadeIn } from '../Animator';

const Roadmap = () => {
  const milestones = [
    {
      year: "2023",
      title: "Pilot Launch",
      description: "Onion supply chain optimization in Dhaka region",
      icon: "🚀"
    },
    {
      year: "2024",
      title: "Hub Expansion",
      description: "Establish 5 regional hubs across Bangladesh",
      icon: "🏗️"
    },
    {
      year: "2025",
      title: "Product Diversification",
      description: "Add potatoes, garlic, and ginger to our offerings",
      icon: "🥔"
    },
    {
      year: "2026",
      title: "Nationwide Coverage",
      description: "Cover all 64 districts with our decentralized model",
      icon: "🗺️"
    },
    {
      year: "2027",
      title: "International Reach",
      description: "Expand to neighboring countries with similar agricultural challenges",
      icon: "🌍"
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-earthy-beige">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earthy-brown mb-4 text-center">
            Strategic Roadmap
          </h2>
          <p className="text-earthy-brown max-w-3xl mx-auto text-center mb-12">
            Our decentralized hub model is built to grow, product by product, region by region.
          </p>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-1 bg-earthy-yellow transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {milestones.map((milestone, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`md:w-1/2 p-6 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block ${index % 2 === 0 ? 'md:float-right' : 'md:float-left'}`}
                    >
                      <div className="text-5xl mb-4">{milestone.icon}</div>
                      <h3 className="text-2xl font-display font-semibold text-earthy-brown mb-2">
                        {milestone.year} - {milestone.title}
                      </h3>
                      <p className="text-earthy-brown">{milestone.description}</p>
                    </motion.div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-1/2 justify-center relative">
                    <div className="w-8 h-8 rounded-full bg-olive flex items-center justify-center text-white font-bold z-10">
                      {index + 1}
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 p-6">
                    <div className="h-48 bg-earthy-tan rounded-xl overflow-hidden">
                      <img 
                        src={`/dummy-roadmap-${index + 1}.jpg`} 
                        alt={milestone.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;