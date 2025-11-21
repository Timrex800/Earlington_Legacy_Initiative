import React from 'react';

export default function ImpactTransparency() {
  return (
    <section id="impact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Impact & Transparency</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to measurable impact and complete transparency in everything we do
          </p>
        </div>

        {/* Success Story */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg mb-12 border-l-4 border-green-500">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured Success: Mathematics Excellence</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Thirteen Grade 12 students achieved distinction levels in mathematics, a 40% improvement from previous year. This success demonstrates the impact of our focused academic support programs and dedicated volunteer tutoring.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <p className="text-3xl font-bold text-green-600">13</p>
              <p className="text-sm text-gray-600">Students with Distinctions</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <p className="text-3xl font-bold text-green-600">40%</p>
              <p className="text-sm text-gray-600">Improvement Rate</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <p className="text-3xl font-bold text-green-600">450+</p>
              <p className="text-sm text-gray-600">Volunteer Hours</p>
            </div>
          </div>
        </div>

        {/* Financial Transparency */}
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Fund Allocation</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { val: '40%', label: 'Infrastructure', color: 'blue' },
              { val: '25%', label: 'Student Support', color: 'green' },
              { val: '20%', label: 'Skills Development', color: 'purple' },
              { val: '10%', label: 'Community', color: 'orange' },
              { val: '5%', label: 'Administrative', color: 'gray' }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className={`text-4xl font-bold text-${item.color}-600 mb-2`}>{item.val}</div>
                <p className="text-gray-700 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
