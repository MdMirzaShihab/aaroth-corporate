import { motion } from 'framer-motion';
import { FadeIn } from '../Animator';
import { FiMail, FiGlobe, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-earthy-tan">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earthy-brown mb-4 text-center">
            Contact Us
          </h2>
          <p className="text-earthy-brown max-w-3xl mx-auto text-center mb-12">
            We invite visionary partners, clients, and investors to be part of this transformation.
          </p>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-12">
          <FadeIn className="lg:w-1/2">
            <motion.form 
              whileHover={{ scale: 1.01 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-display font-semibold text-earthy-brown mb-6">
                Send us a message
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-earthy-brown mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-earthy-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-olive"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-earthy-brown mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-earthy-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-olive"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-earthy-brown mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-2 border border-earthy-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-olive"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-earthy-brown mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4"
                    className="w-full px-4 py-2 border border-earthy-beige rounded-lg focus:outline-none focus:ring-2 focus:ring-olive"
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.03, backgroundColor: '#8C644A' }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-olive text-white px-6 py-3 rounded-lg font-medium w-full"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          </FadeIn>

          <FadeIn delay={0.2} className="lg:w-1/2">
            <div className="bg-earthy-beige rounded-2xl p-8 h-full shadow-lg">
              <h3 className="text-xl font-display font-semibold text-earthy-brown mb-6">
                Our Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-olive mr-4 mt-1">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-earthy-brown mb-1">Email</h4>
                    <a href="mailto:hello@aaroth.com" className="text-earthy-brown hover:text-olive">
                      hello@aaroth.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-olive mr-4 mt-1">
                    <FiGlobe className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-earthy-brown mb-1">Website</h4>
                    <a href="https://corporate.aaroth.com" target="_blank" rel="noopener noreferrer" className="text-earthy-brown hover:text-olive">
                      corporate.aaroth.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-olive mr-4 mt-1">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-earthy-brown mb-1">Address</h4>
                    <p className="text-earthy-brown">
                      12/3 Hossain Uddin Khan Lane<br />
                      Nawabganj Road, Dhaka-1211
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-olive mr-4 mt-1">
                    <FiPhone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-earthy-brown mb-1">Phone</h4>
                    <p className="text-earthy-brown">
                      +880 XXXX XXXXXX
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-xl p-6">
                <h4 className="font-display font-semibold text-earthy-brown mb-3">
                  Visit Us
                </h4>
                <div className="h-48 bg-earthy-tan rounded-lg overflow-hidden">
                  <img 
                    src="/dummy-office-map.jpg" 
                    alt="Office location map"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;