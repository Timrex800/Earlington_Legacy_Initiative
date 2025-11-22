

export default function ImpactStats() {
  const stats = [
    { value: '955', label: 'Students Impacted', color: 'text-blue-600', bg: 'from-blue-50 to-purple-50' },
    { value: 'R120k', label: 'Funds Raised', color: 'text-green-600', bg: 'from-green-50 to-emerald-50' },
    { value: '2', label: 'Projects Complete', color: 'text-orange-600', bg: 'from-orange-50 to-red-50' },
    { value: '9', label: 'Active Volunteers', color: 'text-cyan-600', bg: 'from-cyan-50 to-blue-50' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center p-6 bg-gradient-to-br ${stat.bg} rounded-xl shadow-sm hover:shadow-md transition-shadow`}>
              <p className={`text-4xl md:text-5xl font-extrabold mb-2 ${index === 0 ? 'gradient-text' : stat.color}`}>
                {stat.value}
              </p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
