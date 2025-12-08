

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Earlington Legacy Initiative NPC</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Building a lasting legacy of educational excellence and opportunity
          </p>
          <div className="inline-block bg-blue-50 px-6 py-3 rounded-full border border-blue-100">
            <p className="text-primary font-semibold">Registered Non-Profit Company</p>
            <p className="text-sm text-gray-500">Registration: 2025/931583/08</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To provide comprehensive support and resources that empower every Earlington student to achieve academic excellence, develop essential life skills, and become confident, compassionate leaders who contribute positively to society.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To create a world-class educational environment where every student has access to quality education, modern facilities, and opportunities that unlock their full potential and prepare them for future success.
            </p>
          </div>
        </div>

        {/* School Demographics */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">School Overview & Demographics</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <p className="text-4xl font-bold text-blue-600 mb-2">955</p>
              <p className="text-gray-700 font-medium">Total Learners</p>
            </div>
            <div className="text-center p-6 bg-pink-50 rounded-xl">
              <p className="text-4xl font-bold text-pink-600 mb-2">493</p>
              <p className="text-gray-700 font-medium">Female Learners (51.6%)</p>
            </div>
            <div className="text-center p-6 bg-cyan-50 rounded-xl">
              <p className="text-4xl font-bold text-cyan-600 mb-2">462</p>
              <p className="text-gray-700 font-medium">Male Learners (48.4%)</p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h4 className="font-bold text-gray-900 mb-4">Demographics Breakdown</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Indian', value: '801 learners (83.9%)' },
                { label: 'African', value: '132 learners (13.8%)' },
                { label: 'Coloured', value: '21 learners (2.2%)' },
                { label: 'Chinese', value: '1 learner (0.1%)' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-2 last:border-0">
                  <span className="text-gray-700">{item.label}</span>
                  <span className="font-bold text-gray-900">{item.value}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-4">EMIS No: 500125800 | Data as of: 10 November 2025</p>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {[
            { title: 'Excellence', desc: 'Striving for the highest standards', color: 'blue' },
            { title: 'Integrity', desc: 'Honesty and transparency', color: 'green' },
            { title: 'Community', desc: 'Strong partnerships', color: 'purple' },
            { title: 'Innovation', desc: 'Creative solutions', color: 'orange' },
            { title: 'Empowerment', desc: 'Unlocking potential', color: 'pink' }
          ].map((value, i) => (
            <div key={i} className={`bg-white p-6 rounded-xl shadow-lg text-center border-t-4 border-${value.color}-500 hover:-translate-y-1 transition duration-300`}>
              <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-sm text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
