import { motion } from 'framer-motion';
import { FadeIn } from '../Animator';
import { FaMapMarkedAlt, FaUsers, FaChessPawn } from 'react-icons/fa';
import { GiPlantRoots, GiGrowth } from 'react-icons/gi';

const CompanyPlan = () => {
  const planItems = [
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
      icon: <FaMapMarkedAlt className="text-3xl  text-earthy-tan" />,
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

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-earthy-beige/90 via-earthy-tan/70">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earthy-brown mb-4">
              Our Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive to-earthy-yellow">Plan</span> 
            </h2>
            <div className="w-24 h-1 bg-earthy-yellow mx-auto rounded-full"></div>
            <p className="text-earthy-brown max-w-3xl mx-auto text-center mt-4 mb-12">
              Focused execution with strategic scalability
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {planItems.map((item, index) => (
            <motion.div
              key={index}
              className={ `p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${item.color} bg-opacity-20` }
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

        <motion.div
          className="rounded-xl overflow-hidden shadow-2xl relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/path-to/company-plan-image.jpg" 
            alt="Aaroth's growth roadmap"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-earthy-brown bg-opacity-20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyPlan;