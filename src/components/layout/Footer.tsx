import { Facebook, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Mail, href: 'mailto:info@earlingtonlegacy.org.za', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <img
              src="https://res.cloudinary.com/drj03twbh/image/upload/v1765921600/ELI_Silver_Transparent_zch6yh.png"
              alt="Earlington Legacy Initiative"
              className="h-28 w-auto mb-4 md:h-32 lg:h-36"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/300x120/ffffff/2563EB?text=ELI';
              }}
            />
            <p className="text-gray-400 text-sm mb-4">Building a lasting legacy of educational excellence and opportunity.</p>
            <p className="text-xs text-gray-500">
              <strong>NPC Registration:</strong> 2025/931583/08
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#developer-community" className="hover:text-white transition">Developer Community</a></li>
              <li><a href="#events" className="hover:text-white transition">Events</a></li>
              <li><a href="#resources" className="hover:text-white transition">Resources</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          {/* Get Involved */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Get Involved</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#donate" className="hover:text-white transition">Make a Donation</a></li>
              <li><a href="#developer-community" className="hover:text-white transition">Join as Mentor</a></li>
              <li><a href="#donate" className="hover:text-white transition">Monthly Giving</a></li>
              <li><a href="#donate" className="hover:text-white transition">Volunteer</a></li>
              <li><a href="#donate" className="hover:text-white transition">Corporate Partnership</a></li>
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Connect & Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm mb-6">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">POPIA Disclaimer</a></li>
              <li><a href="#" className="hover:text-white transition">Section 18A Info</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 hover:bg-primary text-white p-2.5 rounded-full transition duration-300"
                    title={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Directors & Contact */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3 text-lg">Leadership</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li><strong>Executive Director:</strong> Timothy Padayachee</li>
                <li><strong>Directors:</strong> Ravishnee Mudhray, Ugendree Pillay</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-lg">Contact</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:info@earlingtonlegacy.org.za" className="hover:text-white transition">
                    info@earlingtonlegacy.org.za
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+27 (0)31 XXX XXXX</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p className="mb-2">&copy; {currentYear} Earlington Legacy Initiative NPC | Reg. 2025/931583/08</p>
          <p className="mb-4">Directors: Timothy Padayachee | Ravishnee Mudhray | Ugendree Pillay</p>
          <p className="text-xs">A Non-Profit Company supporting Earlington Secondary School in Phoenix, KZN</p>
        </div>
      </div>
    </footer>
  );
}
