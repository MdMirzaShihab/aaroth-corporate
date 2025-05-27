import { motion } from 'framer-motion';
import { FadeIn, SlideIn } from '../Animator';

const CaseStudy = () => {
  const stats = [
    { value: "3", label: "Corporations Supported" },
    { value: "51", label: "Weeks of Trade Pricing" },
    { value: "98%", label: "On-time Delivery" },
    { value: "2", label: "Sourcing Hubs Established" }
  ];

  return (
    <section id="case-study" className="py-20 bg-earthy-brown text-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-center">
            Project Case Study
          </h2>
          <p className="max-w-3xl mx-auto text-center mb-12 opacity-90">
            During our pilot phase, Aaroth supported 3 corporations in Dhaka that faced erratic vegetable pricing and unreliable delivery.
          </p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12">
          <SlideIn from="left" className="lg:w-1/2">
            <div className="bg-earthy-tan rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-display font-semibold text-earthy-brown mb-6">
                What We Did
              </h3>
              <ul className="space-y-4 text-earthy-brown">
                <li className="flex items-start">
                  <span className="bg-olive text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">1</span>
                  <span>Daily sourcing from Pabna, Faridpur regions</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-olive text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">2</span>
                  <span>Guaranteed fair pricing every day in this volatile market</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-olive text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">3</span>
                  <span>Managed bulk logistics with our own routing network</span>
                </li>
              </ul>
              <div className="mt-8">
                <img 
                  src="/dummy-case-study-map.jpg" 
                  alt="Sourcing map"
                  className="rounded-xl w-full h-auto shadow-lg"
                />
              </div>
            </div>
          </SlideIn>

          <SlideIn from="right" className="lg:w-1/2">
            <div className="bg-earthy-yellow rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-display font-semibold text-earthy-brown mb-6">
                Results & Impact
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl p-4 text-center shadow-md"
                  >
                    <div className="text-3xl font-display font-bold text-olive mb-1">
                      {stat.value}
                    </div>
                    <div className="text-earthy-brown text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 mb-6">
                <h4 className="font-display font-semibold text-earthy-brown mb-3">
                  What It Shows
                </h4>
                <p className="text-earthy-brown">
                  Even at pilot scale, Aaroth brings a measurable impact through transparency, logistics, and pricing. Imagine the impact as we scale up.
                </p>
              </div>

              <div className="bg-earthy-beige rounded-xl p-6">
                <h4 className="font-display font-semibold text-earthy-brown mb-3">
                  Business Highlights
                </h4>
                <ul className="text-earthy-brown space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-earthy-brown mt-2 mr-2"></span>
                    <span>2 sourcing hubs across major production zones</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-earthy-brown mt-2 mr-2"></span>
                    <span>Operational efficiency with minimal burn</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-earthy-brown mt-2 mr-2"></span>
                    <span>Ongoing deliveries to the early adopters</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full bg-earthy-brown mt-2 mr-2"></span>
                    <span>Team with deep local connections and scalable</span>
                  </li>
                </ul>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;