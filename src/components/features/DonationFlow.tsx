import { useState } from 'react';
import { Heart, CreditCard } from 'lucide-react';

export default function DonationFlow() {
  const [, setAmount] = useState<string>('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Involved & Make an Impact</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            There are many ways to contribute and make a lasting impact on our students' futures
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* One-Time Donation */}
          <div className={`bg-white text-gray-900 p-8 rounded-2xl shadow-2xl transition-transform ${frequency === 'once' ? 'ring-4 ring-blue-400 scale-105' : ''}`}>
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
              <CreditCard className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center">One-Time Donation</h3>
            <div className="space-y-3 mb-6">
              {[
                { val: 'R100', label: 'School supplies for a month' },
                { val: 'R500', label: 'Transportation for 3 students' },
                { val: 'R1000', label: "Student's education for a term" },
                { val: 'R5000', label: 'Classroom technology upgrade' }
              ].map((opt, i) => (
                <button 
                  key={i}
                  onClick={() => { setAmount(opt.val); setFrequency('once'); }}
                  className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 border border-gray-200 transition"
                >
                  <span className="text-primary font-bold mr-3 min-w-[60px] text-left">{opt.val}</span>
                  <span className="text-sm text-gray-600 text-left">{opt.label}</span>
                </button>
              ))}
            </div>
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-full transition duration-300">
              Donate Once
            </button>
          </div>

          {/* Monthly Giving */}
          <div className={`bg-white text-gray-900 p-8 rounded-2xl shadow-2xl border-4 border-yellow-400 relative transform ${frequency === 'monthly' ? 'scale-105 z-10' : ''}`}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              Most Impact
            </div>
            <div className="flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4 mx-auto">
              <Heart className="w-6 h-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">Monthly Giving</h3>
            <p className="text-gray-600 mb-6 text-center text-sm">
              Sustained support for ongoing programs with predictable funding.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { val: 'R50', label: 'Support a student club' },
                { val: 'R150', label: 'Monthly internet data' },
                { val: 'R300', label: 'Nutritious daily meals' }
              ].map((opt, i) => (
                <button 
                  key={i}
                  onClick={() => { setAmount(opt.val); setFrequency('monthly'); }}
                  className="w-full flex items-center p-3 rounded-lg hover:bg-gray-50 border border-gray-200 transition"
                >
                  <span className="text-primary font-bold mr-3 min-w-[60px] text-left">{opt.val}</span>
                  <span className="text-sm text-gray-600 text-left">{opt.label}</span>
                </button>
              ))}
            </div>
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-full transition duration-300 shadow-lg">
              Start Monthly Gift
            </button>
          </div>

          {/* Corporate Sponsorship */}
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4 mx-auto">
              <BriefcaseIcon className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center">Corporate Partnership</h3>
            <p className="text-gray-600 mb-6 text-sm text-center">
              Maximize your CSI impact with B-BBEE benefits and brand visibility.
            </p>
            <ul className="space-y-3 mb-8 text-sm text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Infrastructure naming rights</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>B-BBEE SED credits</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Employee matching programs</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Skills development partnerships</li>
            </ul>
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-full transition duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BriefcaseIcon(props: any) {
  return (
    <svg 
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
