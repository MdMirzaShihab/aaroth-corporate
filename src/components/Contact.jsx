import { motion } from 'framer-motion';
import { FadeIn } from '../Animator';
import { FiMail, FiGlobe, FiMapPin, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-earthy-tan/30 via-white/50 to-earthy-tan/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-earthy-yellow/10 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-olive/10 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-earthy-brown mb-4">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-earthy-yellow to-olive">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-earthy-yellow to-olive mx-auto rounded-full mb-4"></div>
            <p className="text-earthy-brown/80 max-w-2xl mx-auto">
              We invite visionary partners, clients, and investors to be part of this transformation.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <FadeIn>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-earthy-tan/50 hover:shadow-xl transition-all duration-300 h-full"
              >
                <h3 className="text-xl font-display font-semibold text-earthy-brown mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-earthy-yellow/20 flex items-center justify-center mr-3">
                    <FiMail className="text-earthy-yellow" />
                  </span>
                  Send us a message
                </h3>
                
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-earthy-brown/90 mb-2 font-medium">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 border border-earthy-tan/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-earthy-yellow/50 focus:border-transparent bg-white/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-earthy-brown/90 mb-2 font-medium">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 border border-earthy-tan/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-earthy-yellow/50 focus:border-transparent bg-white/50"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-earthy-brown/90 mb-2 font-medium">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 border border-earthy-tan/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-earthy-yellow/50 focus:border-transparent bg-white/50"
                      placeholder="Subject of your message"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-earthy-brown/90 mb-2 font-medium">Message</label>
                    <textarea 
                      id="message" 
                      rows="4"
                      className="w-full px-4 py-3 border border-earthy-tan/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-earthy-yellow/50 focus:border-transparent bg-white/50"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-earthy-yellow to-olive text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300"
                    type="submit"
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </FadeIn>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/2">
            <FadeIn delay={0.2}>
              <div className="bg-earthy-beige/80 backdrop-blur-sm rounded-2xl p-8 h-full shadow-lg border border-earthy-tan/50 flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-xl font-display font-semibold text-earthy-brown mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-olive/20 flex items-center justify-center mr-3">
                      <FiMapPin className="text-olive" />
                    </span>
                    Our Information
                  </h3>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: <FiMail className="text-olive" />,
                        title: "Email",
                        content: <a href="mailto:hello@aaroth.com" className="text-earthy-brown hover:text-olive transition-colors">hello@aaroth.com</a>,
                        bg: "bg-earthy-yellow/10"
                      },
                      {
                        icon: <FiGlobe className="text-olive" />,
                        title: "Website",
                        content: <a href="https://corporate.aaroth.com" target="_blank" rel="noopener noreferrer" className="text-earthy-brown hover:text-olive transition-colors">corporate.aaroth.com</a>,
                        bg: "bg-olive/10"
                      },
                      {
                        icon: <FiMapPin className="text-olive" />,
                        title: "Address",
                        content: <p className="text-earthy-brown">12/3 Hossain Uddin Khan Lane<br />Nawabganj Road, Dhaka-1211</p>,
                        bg: "bg-earthy-brown/10"
                      },
                      
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        whileHover={{ x: 5 }}
                        className={`flex items-start p-4 rounded-xl ${item.bg} transition-all duration-200`}
                      >
                        <div className="p-2 rounded-lg bg-white/50 mr-4 shadow-sm">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-earthy-brown mb-1">{item.title}</h4>
                          <div className="text-earthy-brown/90">{item.content}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Map Section */}
                <div className="mt-8 relative">
  <h4 className="font-display font-semibold text-earthy-brown mb-4 flex items-center">
    <span className="w-6 h-6 rounded-full bg-earthy-yellow/20 flex items-center justify-center mr-2">
      <FiMapPin className="text-earthy-yellow text-sm" />
    </span>
    Visit Us
  </h4>
  <div className="h-64 rounded-lg overflow-hidden border border-earthy-tan/50 relative">
    {/* Map iframe */}
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d228.29650387752335!2d90.37762718736678!3d23.72083209664226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHossain%20Uddin%20Khan%20Lane%2C%20Nawabganj%20Road%2C%20Dhaka-1211!5e0!3m2!1sen!2sbd!4v1748790151601!5m2!1sen!2sbd"
      width="100%" 
      height="100%" 
      style={{ border: 0 }} 
      allowFullScreen="" 
      loading="lazy" 
      title="Aaroth Office Location"
      className="relative z-0"
    ></iframe>
    
    {/* Overlay with subtle gradient */}
    <div className="absolute inset-0 pointer-events-none z-10"
      style={{
        background: 'linear-gradient(to bottom, rgba(234, 224, 213, 0.2) 0%, rgba(234, 224, 213, 0.4) 100%)',
        mixBlendMode: 'soft-light'
      }}
    ></div>
    
    {/* Optional: Additional overlay for more color control */}
    <div className="absolute inset-0 pointer-events-none z-10 bg-earthy-beige/30"></div>
  </div>
</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;