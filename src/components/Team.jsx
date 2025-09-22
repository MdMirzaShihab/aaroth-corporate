import { motion } from 'framer-motion';
import { FaSeedling, FaLeaf, FaTree, FaWater,   FaTractor, FaWarehouse, FaChartLine, FaHandshake } from 'react-icons/fa';
import { GiWheat, GiCorn, GiFarmTractor } from 'react-icons/gi';
  import Mirza from '../assets/Team/MirzaWeb.webp';
  import Rajon from '../assets/Team/RajonWeb.webp';
  import Sakib from '../assets/Team/SakibWeb.webp';
  import Kalam from '../assets/Team/KalamWeb.webp';
  import Shawon from '../assets/Team/ShawonWeb.webp';
  import Leon from '../assets/Team/Leon.jpg';
  import TeamPhilosophy from '../assets/Team/TeamPhilosophy.jpg';
  

const Team = () => {
  const teamMembers = [
    {
      name: "Nazmus Sakib",
      role: "Co-Founder",
      department: "Finance and Administration",
      education: "BBA, Dhaka University (AIS)",
      image: Sakib
    },
    {
      name: "Enamul Kabir Rajon",
      role: "Co-Founder",
      department: "Marketing and Distribution",
      education: "BSc, RUET (Ceramic and metallurgical Engineering)",
      image: Rajon
    },
    {
      name: "Shariful Islam",
      role: "Co-Founder",
      department: "Supply-chain Management",
      education: "BSc, Green University (CSE)",
      experience: "Working as an onion supplier for over fourteen years.",
      image: Shawon
    },
    {
      name: "Abul Kalam Azad",
      role: "Director",
      department: "Public Relation",
      education: "BSc, EUB (Civil Engineering)",
      image: Kalam
    },
    {
      name: "Md Mirza Shihab",
      role: "Tech-Lead",
      department: "ICT Department",
      education: "BSc, University of Technology Malaysia (CS)",
      experience: "Software Engineer for over two years at Popular Group",
      Certs: "Certified Scrum Master, Project Management: Professional Certificate",
      image: Mirza
    },
    {
      name: "Abu Sayeed Lion",
      role: "Director",
      department: "Public Relation",
      education: "MA, Dhaka University (Public Administration)",
      image: Leon
    }
  ];

  

  return (
    <section id="team" className="relative py-20 bg-gradient-to-br from-earthy-tan/30 via-earthy-beige/30 to-earthy-tan/50 overflow-hidden">
  <motion.div 
    className="absolute top-10 left-1/4 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 2 }}
  >
    <FaSeedling className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute top-1/2 left-10 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 2 }}
  >
    <FaLeaf className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute bottom-20 right-20 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 4 }}
  >
    <FaTree className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute top-1/3 right-1/4 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 1 }}
  >
    <FaWater className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute bottom-1/4 left-1/3 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 3 }}
  >
    <FaTractor className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute top-1/4 right-10 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 5 }}
  >
    <FaWarehouse className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute bottom-10 left-1/2 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 2.5 }}
  >
    <FaChartLine className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute top-20 right-1/3 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 3.5 }}
  >
    <FaHandshake className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute bottom-1/3 left-1/5 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 1.5 }}
  >
    <GiWheat className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute top-3/4 right-1/5 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 4.5 }}
  >
    <GiCorn className="text-8xl text-olive" />
  </motion.div>
  
  <motion.div 
    className="absolute top-10 right-10 opacity-5 pointer-events-none"
    animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
    transition={{ repeat: Infinity, duration: 10, delay: 0.5 }}
  >
    <GiFarmTractor className="text-8xl text-olive" />
  </motion.div>


      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-earthy-brown mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-earthy-yellow to-olive">Visionaries</span>
          </h2>
          <motion.div 
            className="w-32 h-1 bg-gradient-to-r from-earthy-yellow to-olive mx-auto rounded-full mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
          <p className="text-earthy-brown/80 text-lg leading-relaxed">
            A collective of innovators redefining agriculture through technology, transparency, and sustainable practices.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              className=" bg-gradient-to-b from-transparent via-transparent group to-earthy-tan/80 backdrop-blur-smrelative flex flex-col text-gray-700 shadow-md h-full grooup-hover:shadow-lg rounded-xl"
            >
              <div className="relative w-full overflow-hidden border-4 border-earthy-tan rounded-xl shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full rounded-xl object-cover transition-all duration-500 group-hover:bg-earthy-tan group-hover:scale-105"
                />
                
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-earthy-brown">{member.name}</h3>
                    <p className="text-olive font-medium">{member.role}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-earthy-yellow"></div>
                    </div>
                    <p className="ml-2 text-sm text-earthy-brown/80">{member.department}</p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-earthy-yellow"></div>
                    </div>
                    <p className="ml-2 text-sm text-earthy-brown/80">{member.education}</p>
                  </div>
                  
                  {member.experience && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-earthy-yellow"></div>
                      </div>
                      <p className="ml-2 text-sm text-earthy-brown/80">{member.experience}</p>
                    </div>
                  )}
                  
                  {member.Certs && (
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-earthy-yellow"></div>
                      </div>
                      <p className="ml-2 text-sm text-earthy-brown/80">{member.Certs}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-white/50 to-earthy-beige/30 rounded-2xl p-8 md:p-12 border border-white/30 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-earthy-yellow/10 blur-3xl"></div>
          <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-olive/10 blur-3xl"></div>
          
          <div className="flex flex-col lg:flex-row items-center relative z-10">
            <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
              <motion.div 
                className="w-48 h-48 rounded-full bg-earthy-yellow/20 overflow-hidden border-4 border-white shadow-lg relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={TeamPhilosophy}
                  alt="Team philosophy"
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/30 transition-opacity duration-300 rounded-full"
                  whileHover={{ opacity: 1 }}
                >
                  <FaSeedling className="text-lime-600 text-4xl" />
                </motion.div>
              </motion.div>
            </div>
            <div className="lg:w-2/3 lg:pl-12">
              <h3 className="text-2xl md:text-3xl font-bold text-earthy-brown mb-6">
                Our Guiding <span className="text-transparent bg-clip-text bg-gradient-to-r from-earthy-yellow to-olive">Principles</span>
              </h3>
              <blockquote className="text-earthy-brown text-lg md:text-xl italic mb-6 relative pl-6 border-l-4 border-earthy-yellow">
                <span className="absolute -left-2 -top-4 text-3xl text-earthy-yellow">"</span>
                We don't disrupt nature's balance—we align with it. True innovation works in harmony with the earth's rhythms, creating sustainable solutions that stand the test of time.
                <span className="absolute -right-2 -bottom-4 text-3xl text-earthy-yellow">"</span>
              </blockquote>
              <p className="text-earthy-brown/80 leading-relaxed">
                At Aaroth, we're building bridges between tradition and technology, empowering farmers through transparent systems that honor their wisdom while introducing smart solutions for tomorrow's challenges.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;