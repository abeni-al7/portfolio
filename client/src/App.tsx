import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ProfessionalExperience from './components/ProfessionalExperience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-warm-950 font-sans text-warm-200 relative">
      {/* Decorative fixed background elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-light/[0.02] rounded-full blur-[100px]"></div>
        {/* Vertical grid lines for editorial feel */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-4">
          <div className="h-full flex justify-between opacity-[0.03]">
            <div className="w-px bg-warm-400"></div>
            <div className="w-px bg-warm-400"></div>
            <div className="w-px bg-warm-400"></div>
            <div className="w-px bg-warm-400"></div>
            <div className="w-px bg-warm-400"></div>
          </div>
        </div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProfessionalExperience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;