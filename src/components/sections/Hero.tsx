import ParticlesBackground from '../ui/ParticlesBackground';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gray-900 text-white py-24 overflow-hidden min-h-[80vh] flex items-center">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in">
          Transforming Education at<br/>Earlington Secondary School
        </h1>
        <p className="text-2xl md:text-3xl mb-6 font-light animate-fade-in text-blue-200" style={{ animationDelay: '0.2s' }}>
          Building Tomorrow's Legacy Today
        </p>
        <p className="text-xl font-semibold mb-8 text-accent animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Supporting Our Teachers, Empowering Our Students
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-4xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.4s' }}>
          The exceptional teaching team at Earlington Secondary School has achieved a 40% improvement in academic excellence—a testament to their dedication and skill. The Earlington Legacy Initiative NPC amplifies their impact by providing strategic support across four key areas: modern infrastructure, comprehensive student welfare programs, future-ready skills development, and strong community partnerships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#donate" className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-full text-lg transition duration-300 shadow-xl">
            Support Our Mission
          </a>
          <a href="#about" className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold py-4 px-8 rounded-full text-lg transition duration-300">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
