

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="https://res.cloudinary.com/drj03twbh/image/upload/v1763746988/SilverFont_ovmayl.png" 
              alt="Earlington Legacy Initiative" 
              className="h-16 w-auto mb-4"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/150x60/ffffff/2563EB?text=ELI';
              }}
            />
            <p className="text-gray-400 text-sm">Building a lasting legacy of educational excellence and opportunity.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#pillars" className="hover:text-white transition">Strategic Pillars</a></li>
              <li><a href="#platform" className="hover:text-white transition">Platform</a></li>
              <li><a href="#impact" className="hover:text-white transition">Impact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-lg">Get Involved</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#donate" className="hover:text-white transition">Make a Donation</a></li>
              <li><a href="#donate" className="hover:text-white transition">Monthly Giving</a></li>
              <li><a href="#donate" className="hover:text-white transition">Volunteer</a></li>
              <li><a href="#donate" className="hover:text-white transition">Corporate Partnership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">POPIA Disclaimer</a></li>
              <li><a href="#" className="hover:text-white transition">Section 18A Info</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Use</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Earlington Legacy Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
