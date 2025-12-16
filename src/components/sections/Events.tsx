import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

export default function Events() {
  const upcomingEvents = [
    {
      date: 'Jan 25, 2025',
      title: 'Phoenix Developer Meetup #1',
      location: 'Earlington Secondary School, Phoenix',
      attendees: 'Senior Developers + Students',
      description: 'Network with senior professionals, share insights, and explore mentorship opportunities.',
    },
    {
      date: 'Feb 15, 2025',
      title: 'Career Pathways Workshop',
      location: 'Hybrid (In-Person + Virtual)',
      attendees: 'Students & Job Seekers',
      description: 'Learn industry trends, portfolio building tips, and get job placement insights.',
    },
    {
      date: 'Mar 08, 2025',
      title: 'AI & Machine Learning Bootcamp',
      location: 'Earlington Legacy AI Training Centre',
      attendees: 'All Levels Welcome',
      description: 'Hands-on introduction to AI, ML basics, and real-world applications.',
    },
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Community Events
          </h2>
          <p className="text-xl text-gray-600">
            Join us for hybrid meetups, workshops, and networking sessions
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
              {/* Date Badge */}
              <div className="bg-gradient-to-r from-primary to-accent text-white px-6 py-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-semibold">{event.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {event.title}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{event.location}</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{event.attendees}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {event.description}
                </p>

                <button className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                  Learn & RSVP
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Eventbrite/Luma Embed Placeholder */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-12 border-2 border-dashed border-gray-300">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Full Event Calendar & Registration
            </h3>
            <p className="text-gray-600">
              View all events and register using our Eventbrite calendar below
            </p>
          </div>

          {/* Eventbrite Embed Placeholder */}
          <div className="bg-white rounded-lg p-8 border border-gray-200">
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-600 font-semibold mb-2">
                  Eventbrite Calendar Embed
                </p>
                <p className="text-sm text-gray-500">
                  Replace with actual Eventbrite or Luma embed code
                </p>
                <p className="text-xs text-gray-400 mt-3">
                  Embed snippet: &lt;iframe src="https://www.eventbrite.com/..."&gt;&lt;/iframe&gt;
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="https://www.eventbrite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-accent hover:bg-accent-dark text-white font-bold py-4 px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl"
            >
              View All Events on Eventbrite
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
