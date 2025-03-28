import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ProfessionalExperience from './components/ProfessionalExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-transparent">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-blue/5 via-dark-bg to-dark-bg pointer-events-none"></div>
      <div className="relative max-w-6xl mx-auto px-4 py-8">
        <Hero />
        <Portfolio />
        <ProfessionalExperience />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;