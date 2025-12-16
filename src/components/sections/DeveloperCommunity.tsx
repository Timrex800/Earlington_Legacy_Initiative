import { Users, Briefcase, Code, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function DeveloperCommunity() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    linkedin: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send to Formspree (replace with actual Formspree endpoint)
    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', role: '', linkedin: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const segments = [
    {
      icon: Briefcase,
      title: 'Senior Professionals',
      description: 'Build your hiring pipeline, mentor the next generation, network professionally, give back.',
      color: 'from-blue-600 to-blue-800'
    },
    {
      icon: Users,
      title: 'Job Seekers',
      description: 'Gain practical experience, portfolio reviews, job leads, and mentorship from industry professionals.',
      color: 'from-purple-600 to-purple-800'
    },
    {
      icon: Code,
      title: 'Students (Earlington Secondary)',
      description: 'Hands-on coding, AI training, and career pathways in our school AI Training Centre.',
      color: 'from-accent to-accent-dark'
    }
  ];

  return (
    <section id="developer-community" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Phoenix Developer Community
          </h2>
          <p className="text-xl text-gray-600 mb-3">
            Hosted by Earlington Legacy Initiative NPC
          </p>
          <p className="text-lg font-semibold text-primary mb-2">
            Bridging the Gap – Real skills growth through mentorship and collaboration
          </p>
          <p className="text-sm text-gray-500 italic">
            Aspiring partner of Google Broader Developer Community – operating independently
          </p>
        </div>

        {/* Three Columns */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {segments.map((segment, index) => {
            const Icon = segment.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${segment.color} p-8 text-white`}>
                  <Icon className="h-12 w-12 mb-4" />
                  <h3 className="text-2xl font-bold">{segment.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {segment.description}
                  </p>
                  <button className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mentor Form & Newsletter Section */}
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Become a Mentor Form */}
          <div>
            <h3 className="text-3xl font-bold mb-2 text-gray-900">
              Become a Mentor
            </h3>
            <p className="text-gray-600 mb-8">
              Join our community and help shape the next generation of developers in Phoenix, KZN
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Role / Experience Level
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select your role</option>
                  <option value="senior">Senior Developer / Architect</option>
                  <option value="mid">Mid-level Developer</option>
                  <option value="tech-lead">Technical Lead / Manager</option>
                  <option value="startup">Startup Founder / CTO</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                  LinkedIn Profile (Optional)
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Apply to Become a Mentor
              </button>

              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  Thank you! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-2 text-gray-900">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-8">
                Subscribe to our newsletter for community updates, event announcements, and mentorship opportunities.
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="sub-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="sub-name"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="sub-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="sub-email"
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="sub-interest" className="block text-sm font-medium text-gray-700 mb-2">
                    I'm interested in
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select your interest</option>
                    <option value="mentoring">Mentoring Others</option>
                    <option value="learning">Learning & Development</option>
                    <option value="networking">Networking</option>
                    <option value="both">Both Mentoring & Learning</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 px-6 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                >
                  Subscribe to Newsletter
                </button>
              </form>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <strong>Note:</strong> We respect your privacy. Your information will only be used for community communications and mentorship matching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
