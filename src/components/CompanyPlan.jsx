import { motion } from 'framer-motion';
import { FadeIn, SlideIn } from '../Animator';

const CompanyPlan = () => {
  const phases = [
    {
      title: "Pilot Phase",
      description: "Focusing on onions - Bangladesh's most volatile staple",
      image: "/dummy-pilot-phase.jpg",
      features: [
        "Serving corporate canteens, restaurants, supershops",
        "Reliable daily bulk delivery (orders over 60kgs)",
        "Current hubs: Rajbari, Pabna, Faridpur, Kushtia, Manikganj"
      ]
    },
    {
      title: "Next Steps",
      description: "Expanding product offerings after securing sourcing",
      image: "/dummy-next-steps.jpg",
      features: [
        "Introduce potatoes next",
        "Followed by garlic, ginger, other vegetables & spices",
        "Only after securing sourcing coverage like onions"
      ]
    }
  ];

  return (
    <section id="company-plan" className="py-20 bg-earthy-tan">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earthy-brown mb-4 text-center">
            Company Plan
          </h2>
          <p className="text-earthy-brown max-w-3xl mx-auto text-center mb-12">
            Aaroth is currently in its pilot phase, strategically focusing on establishing profitability from day one.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {phases.map((phase, index) => (
            <SlideIn key={index} from={index % 2 === 0 ? "left" : "right"} delay={index * 0.2}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="h-48 bg-earthy-yellow overflow-hidden">
                  <img 
                    src={phase.image} 
                    alt={phase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-display font-semibold text-earthy-brown mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-earthy-brown mb-4">
                    {phase.description}
                  </p>
                  <ul className="space-y-2">
                    {phase.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-olive mr-2">✓</span>
                        <span className="text-earthy-brown">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyPlan;