import React from 'react';

export default function StrategicPillars() {
  const pillars = [
    {
      id: 1,
      title: 'Modern Infrastructure',
      desc: 'Creating state-of-the-art learning environments that inspire excellence and innovation.',
      progress: 65,
      color: 'blue',
      bg: 'from-blue-50 to-blue-100',
      border: 'border-blue-500'
    },
    {
      id: 2,
      title: 'Student Welfare & Support',
      desc: 'Ensuring every student has resources, support, and care needed to thrive academically and personally.',
      progress: 78,
      color: 'green',
      bg: 'from-green-50 to-green-100',
      border: 'border-green-500'
    },
    {
      id: 3,
      title: 'Future Skills Development',
      desc: 'Equipping students with cutting-edge skills and knowledge for digital economy and future careers.',
      progress: 45,
      color: 'purple',
      bg: 'from-purple-50 to-purple-100',
      border: 'border-purple-500'
    },
    {
      id: 4,
      title: 'Community & Partnership',
      desc: 'Building strong partnerships between school, parents, alumni, and broader community.',
      progress: 52,
      color: 'orange',
      bg: 'from-orange-50 to-orange-100',
      border: 'border-orange-500'
    }
  ];

  return (
    <section id="pillars" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Strategic Pillars</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four core focus areas driving comprehensive transformation at Earlington Secondary School
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar) => (
            <div key={pillar.id} className={`bg-gradient-to-br ${pillar.bg} p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 ${pillar.border}`}>
              <div className="flex items-center mb-4">
                <div className={`bg-${pillar.color}-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mr-4 shadow-md`}>
                  {pillar.id}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{pillar.title}</h3>
              </div>
              <p className="text-gray-700 mb-4">{pillar.desc}</p>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className={`text-sm font-bold text-${pillar.color}-600`}>{pillar.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`bg-${pillar.color}-500 h-3 rounded-full transition-all duration-1000`} 
                    style={{ width: `${pillar.progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
