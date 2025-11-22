import React from 'react';
import { Monitor, Server, Wifi, Code } from 'lucide-react';

const ImpactFeature: React.FC = () => {
  const impactAreas = [
    {
      icon: Monitor,
      text: 'Computer literacy training for all grade levels',
    },
    {
      icon: Server,
      text: 'Access to modern computer labs and equipment',
    },
    {
      icon: Wifi,
      text: 'Internet connectivity and online learning resources',
    },
    {
      icon: Code,
      text: 'Coding and STEM education programs',
    },
  ];

  return (
    <section 
      className="impact-feature-hero"
      style={{
        position: 'relative',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(https://res.cloudinary.com/drj03twbh/image/upload/v1763824591/2_ra1pa3.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Translucent Dark Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div 
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '80px 40px',
          width: '100%',
        }}
      >
        {/* Left-Anchored Content Card */}
        <div 
          className="content-card"
          style={{
            maxWidth: '550px',
            backgroundColor: 'rgba(255, 255, 255, 0.80)',
            borderRadius: '16px',
            padding: '40px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Headline */}
          <h2 
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: '#1a202c',
              marginBottom: '24px',
              lineHeight: '1.1',
              fontFamily: 'Montserrat, sans-serif',
              letterSpacing: '-0.02em',
            }}
          >
            Student Digital Enablement
          </h2>

          {/* Narrative Paragraph */}
          <p 
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: '#2d3748',
              marginBottom: '32px',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Empowering the next generation through technology and digital literacy. 
            Our Student Digital Enablement program bridges the digital divide by 
            providing students with access to modern learning tools, computer labs, 
            and comprehensive training in essential digital skills. Through strategic 
            partnerships and dedicated funding, we've equipped hundreds of students 
            with the knowledge and resources they need to thrive in an increasingly 
            digital world. From coding workshops to online research skills, we're 
            building a foundation for lifelong learning and success.
          </p>

          {/* Key Impact Areas */}
          <div>
            <h3 
              style={{
                fontSize: '1.375rem',
                fontWeight: '700',
                color: '#1a202c',
                marginBottom: '24px',
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Key Impact Areas:
            </h3>

            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              {impactAreas.map((area, index) => {
                const IconComponent = area.icon;
                return (
                  <div 
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.5)',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.7)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
                      e.currentTarget.style.transform = 'translateX(8px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    <div
                      style={{
                        minWidth: '38px',
                        height: '38px',
                        borderRadius: '8px',
                        backgroundColor: '#3b82f6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 3px 10px rgba(59, 130, 246, 0.3)',
                      }}
                    >
                      <IconComponent size={20} color="#ffffff" strokeWidth={2.5} />
                    </div>
                    <span 
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: '500',
                        color: '#1a202c',
                        fontFamily: 'Inter, sans-serif',
                        lineHeight: '1.4',
                      }}
                    >
                      {area.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .content-card {
            padding: 40px !important;
            max-width: 600px !important;
          }
        }
        
        @media (max-width: 768px) {
          .impact-feature-hero {
            min-height: 600px !important;
          }
          
          .container {
            padding: 60px 20px !important;
          }
          
          .content-card {
            padding: 35px !important;
            max-width: 100% !important;
          }
        }
        
        @media (max-width: 480px) {
          .impact-feature-hero {
            min-height: auto !important;
          }
          
          .container {
            padding: 40px 15px !important;
          }
          
          .content-card {
            padding: 28px !important;
            border-radius: 12px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ImpactFeature;
