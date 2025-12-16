import { BookOpen, Code, Zap, Users, Download, ArrowRight } from 'lucide-react';

export default function Resources() {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: 'Learning Guides',
      description: 'Comprehensive tutorials and guides for beginners to advanced developers',
      count: 'Coming Soon',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Code,
      title: 'Code Repositories',
      description: 'Open-source projects and code samples from the community',
      count: 'Coming Soon',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: Zap,
      title: 'Quick Tips & Tricks',
      description: 'Quick reference guides and productivity hacks for developers',
      count: 'Coming Soon',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: Users,
      title: 'Mentorship Resources',
      description: 'Guides for mentors and mentees to maximize the mentorship experience',
      count: 'Coming Soon',
      color: 'bg-green-100 text-green-600'
    },
  ];

  const tools = [
    {
      name: 'Development Tools',
      items: ['VS Code Setup Guides', 'Git Workflow Templates', 'Docker Essentials', 'Testing Frameworks']
    },
    {
      name: 'Career Development',
      items: ['Resume Templates', 'Portfolio Showcase Ideas', 'Interview Prep Guide', 'Salary Negotiation Tips']
    },
    {
      name: 'Industry Resources',
      items: ['Tech News Aggregator', 'Free Courses', 'Certification Paths', 'Conference Listings']
    },
    {
      name: 'Community Tools',
      items: ['Slack Community Guide', 'Discussion Forum Rules', 'Event Planning Kit', 'Feedback Forms']
    },
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Developer Resources
          </h2>
          <p className="text-xl text-gray-600 mb-4">
            Curated learning materials, tools, and guides for the Phoenix Developer Community
          </p>
          <p className="text-lg text-gray-500 font-semibold">
            Expanding soon with community-contributed content
          </p>
        </div>

        {/* Resource Categories Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {resourceCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8">
                <div className={`${category.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>
                <div className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full">
                  {category.count}
                </div>
              </div>
            );
          })}
        </div>

        {/* Resource Library Preview */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-primary to-accent p-8 text-white">
            <h3 className="text-3xl font-bold">Resource Library</h3>
            <p className="text-blue-100 mt-2">Explore our growing collection of developer resources</p>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {tools.map((toolGroup, index) => (
                <div key={index}>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {toolGroup.name}
                  </h4>
                  <ul className="space-y-3">
                    {toolGroup.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700 hover:text-primary transition cursor-pointer">
                        <Download className="h-4 w-4 mr-3 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-blue-50 border-l-4 border-primary rounded">
              <p className="text-gray-700">
                <strong>🎯 Pro Tip:</strong> Join our community to get early access to new resources, contribute your own materials, and stay updated with the latest additions.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Share Your Knowledge</h3>
            <p className="mb-6 text-blue-100">
              Have valuable resources or content to share? Contribute to our growing library and help other developers in the Phoenix community.
            </p>
            <button className="inline-flex items-center bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300">
              Contribute Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="bg-gradient-to-br from-accent to-accent-dark rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Request a Resource</h3>
            <p className="mb-6 text-blue-100">
              Can't find what you're looking for? Let us know what resources would help you grow and we'll work to create them.
            </p>
            <button className="inline-flex items-center bg-white text-accent hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition duration-300">
              Submit a Request
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
