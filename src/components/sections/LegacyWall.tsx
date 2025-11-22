import { useMemo } from 'react';
import ParticlesBackground from '../ui/ParticlesBackground';

export default function LegacyWall() {
  // Deterministic generation of bricks
  const bricks = useMemo(() => {
    return Array.from({ length: 156 }, (_, i) => ({
      id: i,
      opacity: Math.max(0.3, Math.random() * 0.8 + 0.2), // Random opacity for visual texture
      color: Math.random() > 0.9 ? '#EF4444' : '#DC2626' // Slight color variation
    }));
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <ParticlesBackground />
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Digital Legacy Wall</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Each brick represents a life changed, a dream supported, and a future built through your generosity.
          </p>
        </div>
        
        <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
          <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 gap-1 md:gap-2 mb-6" id="legacyWall">
            {bricks.map((brick) => (
              <div 
                key={brick.id}
                className="w-full pt-[50%] relative rounded-sm shadow-sm transition-transform hover:scale-110 hover:z-10"
                style={{ 
                  backgroundColor: brick.color,
                  opacity: brick.opacity
                }}
                title={`Brick #${brick.id + 1}`}
              />
            ))}
          </div>
          <p className="text-center text-gray-400 text-lg">
            <span id="brickCount" className="font-bold text-white">{bricks.length}</span> bricks laid by supporters like you
          </p>
        </div>
      </div>
    </section>
  );
}
