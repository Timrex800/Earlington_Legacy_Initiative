import React from 'react';

export default function Leadership() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
        </div>
        
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
              src="https://res.cloudinary.com/drj03twbh/image/upload/v1761749620/Timothy%20Padayachee.png" 
              alt="Timothy Padayachee" 
              className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-xl"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://placehold.co/150x150/2563EB/ffffff?text=T.P.';
              }}
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Timothy Padayachee</h3>
              <p className="text-lg text-primary font-semibold mb-2">Chairman & Programme Director</p>
              <p className="text-gray-700 mb-3">Director of JoziSocial</p>
              <p className="text-gray-600">Leading the strategic vision and implementation of the Earlington Legacy Initiative, driving transformation and sustainable impact for our community.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
