import React, { useState } from 'react';
import { Check, CreditCard, Heart, Calendar } from 'lucide-react';

export default function DonationFlow() {
  const [amount, setAmount] = useState<number | ''>('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [customAmount, setCustomAmount] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const predefinedAmounts = [
    { value: 100, label: 'R100', desc: 'School supplies' },
    { value: 500, label: 'R500', desc: 'Transport support' },
    { value: 1000, label: 'R1000', desc: 'Term education' },
    { value: 5000, label: 'R5000', desc: 'Tech upgrade' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
      amount: amount || formData.get('customAmount'),
      frequency,
      name: formData.get('name'),
      email: formData.get('email'),
      type: 'donation_intent'
    };

    try {
      const webhookUrl = import.meta.env.VITE_DONATION_WEBHOOK_URL;
      
      if (!webhookUrl) {
        // Simulate success if no webhook is configured (for demo/dev)
        console.log('Donation intent:', data);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSuccess(true);
        return;
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccess(true);
        // Track event if Umami is present
        if ((window as any).umami) {
          (window as any).umami.track('donation_initiated', { amount: data.amount, frequency });
        }
      } else {
        throw new Error('Failed to submit donation intent');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-2xl text-center py-16">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-gray-600 mb-8 text-lg">
          Your commitment to supporting Earlington Secondary School has been recorded. 
          We will be in touch shortly with payment details to complete your donation.
        </p>
        <button 
          onClick={() => setSuccess(false)}
          className="text-primary font-semibold hover:underline"
        >
          Make another donation
        </button>
      </div>
    );
  }

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Involved</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            There are many ways to contribute and make a lasting impact on our students' futures
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Heart className="w-6 h-6 text-red-500 mr-2 fill-current" />
              Make a Donation
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Frequency Toggle */}
              <div className="flex bg-gray-100 p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setFrequency('once')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    frequency === 'once' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  One-Time
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                    frequency === 'monthly' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Monthly
                </button>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 gap-3">
                {predefinedAmounts.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => { setAmount(item.value); setCustomAmount(false); }}
                    className={`p-4 rounded-xl border-2 text-left transition-all ${
                      amount === item.value && !customAmount
                        ? 'border-primary bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="font-bold text-lg text-gray-900">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.desc}</div>
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">R</span>
                </div>
                <input
                  type="number"
                  name="customAmount"
                  placeholder="Enter custom amount"
                  className={`w-full pl-8 pr-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent ${
                    customAmount ? 'border-primary' : 'border-gray-200'
                  }`}
                  onFocus={() => { setCustomAmount(true); setAmount(''); }}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>

              {/* Donor Details */}
              <div className="space-y-4 pt-4 border-t border-gray-100">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary" />
                </div>
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={loading || (!amount && !customAmount)}
                className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-300 text-white font-bold py-4 rounded-xl transition duration-300 flex items-center justify-center"
              >
                {loading ? 'Processing...' : (
                  <>
                    <CreditCard className="w-5 h-5 mr-2" />
                    Donate {amount ? `R${amount}` : ''} {frequency === 'monthly' ? 'Monthly' : ''}
                  </>
                )}
              </button>
              
              <p className="text-xs text-center text-gray-500">
                Secure donation processing. You will receive a Section 18A tax certificate for your contribution.
              </p>
            </form>
          </div>

          {/* Info Side */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Why Donate?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-400 mr-3 mt-0.5" />
                  <span><strong>100% Impact:</strong> Direct funding for student resources and infrastructure.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-400 mr-3 mt-0.5" />
                  <span><strong>Tax Deductible:</strong> Receive a Section 18A certificate for tax benefits.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-green-400 mr-3 mt-0.5" />
                  <span><strong>B-BBEE Points:</strong> Corporate donations qualify for SED points.</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-400 text-gray-900 p-8 rounded-2xl shadow-xl transform hover:-translate-y-1 transition duration-300">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 mr-3" />
                <h3 className="text-2xl font-bold">Monthly Giving</h3>
              </div>
              <p className="font-medium mb-4">
                Become a Legacy Builder by setting up a recurring monthly donation. Consistent support allows us to plan long-term projects with confidence.
              </p>
              <button 
                onClick={() => setFrequency('monthly')}
                className="bg-gray-900 text-white px-6 py-2 rounded-full font-bold hover:bg-gray-800 transition"
              >
                Start Monthly Gift
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
