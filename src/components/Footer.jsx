import { motion } from 'framer-motion';
import { FadeIn } from '../Animator';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  const links = [
    { title: "Why Aaroth", href: "#why-aaroth" },
    { title: "Company Plan", href: "#company-plan" },
    { title: "Mission & Vision", href: "#mission" },
    { title: "Roadmap", href: "#roadmap" },
    { title: "Our Team", href: "#team" },
    { title: "Case Study", href: "#case-study" },
    { title: "Contact", href: "#contact" }
  ];

  const socials = [
    { icon: <FiFacebook className="w-5 h-5" />, href: "#" },
    { icon: <FiTwitter className="w-5 h-5" />, href: "#" },
    { icon: <FiLinkedin className="w-5 h-5" />, href: "#" },
    { icon: <FiInstagram className="w-5 h-5" />, href: "#" }
  ];

  return (
    <footer className="bg-earthy-brown text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between">
          <FadeIn className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-display font-bold">AAROTH</span>
            </div>
            <p className="max-w-xs opacity-80 mb-4">
              Redefining Bangladesh's agricultural supply chain through transparency, technology and trust.
            </p>
            <div className="flex space-x-4">
              {socials.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, color: '#D4A373' }}
                  className="opacity-80 hover:opacity-100"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="mb-8 md:mb-0">
            <h3 className="text-lg font-display font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5, color: '#D4A373' }}
                    className="opacity-80 hover:opacity-100"
                  >
                    {link.title}
                  </motion.a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h3 className="text-lg font-display font-semibold mb-4">Newsletter</h3>
            <p className="opacity-80 mb-4 max-w-xs">
              Subscribe to our newsletter for updates on our progress and agricultural innovations.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg focus:outline-none text-earthy-brown w-full"
              />
              <motion.button
                whileHover={{ backgroundColor: '#D4A373' }}
                whileTap={{ scale: 0.95 }}
                className="bg-olive px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </motion.button>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.6}>
          <div className="border-t border-earthy-yellow border-opacity-20 mt-12 pt-8 text-center opacity-80">
            <p>© {new Date().getFullYear()} Aaroth. All rights reserved.</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;