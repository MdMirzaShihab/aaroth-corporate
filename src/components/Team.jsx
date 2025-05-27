import { motion } from 'framer-motion';
import { FadeIn } from '../Animator';

const Team = () => {
  const teamMembers = [
    {
      name: "Enamul Kabir Rajon",
      role: "Co-Founder",
      department: "Supply-chain Management",
      education: "BSc, Green University (CSE)",
      experience: "Working as an onion supplier for over fourteen years",
      image: "/dummy-team-1.jpg"
    },
    {
      name: "Nazmus Sakib",
      role: "Co-Founder",
      department: "Marketing and Distribution",
      education: "BSc, RUET (Ceramic and metallurgical Engineering)",
      image: "/dummy-team-2.jpg"
    },
    {
      name: "Md Mirza Shihab",
      role: "Co-Founder",
      department: "ICT Department",
      education: "BSc, University of Technology Malaysia (CS)",
      experience: "Developer at Popular Group",
      image: "/dummy-team-3.jpg"
    },
    {
      name: "Abu Sayeed Lion",
      role: "Director",
      department: "Public Relation",
      education: "MA, Dhaka University (Public Administration)",
      image: "/dummy-team-4.jpg"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-earthy-brown mb-4 text-center">
            Our Team
          </h2>
          <p className="text-earthy-brown max-w-3xl mx-auto text-center mb-12">
            A visionary team of six, comprising four founders and a lean operations unit—driven by field data, intelligent sourcing, and a commitment to shaping a future-ready agri supply chain.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-earthy-beige rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="h-64 bg-earthy-tan overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-earthy-brown mb-1">
                  {member.name}
                </h3>
                <p className="text-olive font-medium mb-3">{member.role}</p>
                <p className="text-earthy-brown text-sm mb-2">
                  <span className="font-medium">Department:</span> {member.department}
                </p>
                <p className="text-earthy-brown text-sm mb-2">
                  <span className="font-medium">Education:</span> {member.education}
                </p>
                {member.experience && (
                  <p className="text-earthy-brown text-sm">
                    <span className="font-medium">Experience:</span> {member.experience}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-16 bg-earthy-tan rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
                <div className="w-48 h-48 rounded-full bg-earthy-yellow overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src="/dummy-team-philosophy.jpg" 
                    alt="Team philosophy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="md:w-2/3 md:pl-12">
                <h3 className="text-2xl font-display font-semibold text-earthy-brown mb-4">
                  Our Philosophy
                </h3>
                <blockquote className="text-earthy-brown text-lg italic mb-6">
                  "We shouldn't disrupt the natural flow of life — nature always finds a way to balance, often with consequences. At Aaroth, we innovate by aligning with nature, not working against it."
                </blockquote>
                <p className="text-earthy-brown">
                  We are empowering agriculture by connecting farmers through transparency, technology and trust.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Team;