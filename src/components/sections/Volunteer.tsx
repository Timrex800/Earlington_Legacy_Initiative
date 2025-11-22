import { BookOpen, Hammer, Users, Briefcase } from 'lucide-react';

export default function Volunteer() {
  const opportunities = [
    {
      title: 'Academic Support',
      desc: 'Tutoring and mentoring',
      icon: <BookOpen className="w-8 h-8" />
    },
    {
      title: 'Infrastructure',
      desc: 'Renovation and maintenance',
      icon: <Hammer className="w-8 h-8" />
    },
    {
      title: 'Community',
      desc: 'Event organization',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Career Guidance',
      desc: 'Professional mentorship',
      icon: <Briefcase className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center">Volunteer Opportunities</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {opportunities.map((opp, i) => (
              <div key={i} className="text-center group hover:transform hover:scale-105 transition duration-300">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-white/30 transition">
                  {opp.icon}
                </div>
                <h4 className="font-bold mb-2">{opp.title}</h4>
                <p className="text-sm text-gray-200">{opp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
