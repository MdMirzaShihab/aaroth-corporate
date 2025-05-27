import Header from './components/Header';
import Hero from './components/Hero';
import WhyAaroth from './components/WhyAaroth';
import CompanyPlan from './components/CompanyPlan';
import MissionVision from './components/MissionVision';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import CaseStudy from './components/CaseStudy';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-earthy-brown bg-earthy-beige">
      <Header />
      <Hero />
      <WhyAaroth />
      <CompanyPlan />
      <MissionVision />
      <Roadmap />
      <Team />
      <CaseStudy />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;