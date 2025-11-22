

export default function UbuntuBridge() {
  const features = [
    { title: 'Corporate Database', desc: 'Comprehensive database of SA companies with CSI policies and matching programs' },
    { title: 'Real-Time Matching', desc: 'Instant matching gift detection and automated application processing' },
    { title: 'Impact Dashboard', desc: 'Live tracking of donations, matching gifts, and corporate partnerships' },
    { title: 'B-BBEE Compliance', desc: 'Automated SED certificate generation and scorecard tracking' },
    { title: 'Volunteer Grants', desc: 'Convert volunteer hours into direct funding through corporate programs' },
    { title: 'Tax Optimization', desc: 'Section 18A receipts and automated tax benefit calculations' },
  ];

  return (
    <section id="platform" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The UbuntuBridge Technology Platform</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The powerful engine that transforms corporate social investment into measurable impact, making every donation count twice
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">More Than a Platform</h3>
            <p className="text-gray-200 leading-relaxed">
              UbuntuBridge transforms the Earlington website from a digital brochure into a powerful fundraising machine that doubles donations and maximizes corporate partnerships through intelligent matching and B-BBEE optimization.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Double the Impact</h3>
            <p className="text-gray-200 leading-relaxed">
              Every donation has the potential to be matched through corporate partnerships, effectively doubling impact without additional effort from donors. B-BBEE optimized for maximum corporate benefit.
            </p>
          </div>
        </div>

        {/* Core Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/20 hover:bg-white/10 transition duration-300">
              <h4 className="font-bold text-xl mb-3">{feature.title}</h4>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
