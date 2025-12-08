
import { Award, TrendingUp, Users, Heart } from 'lucide-react';

export default function TeacherRecognition() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Honoring Our Educators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Supporting the dedicated team driving academic excellence at Earlington Secondary School.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-primary opacity-10 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-gradient-to-br from-gray-900 to-primary p-8 rounded-3xl text-white shadow-xl">
              <div className="flex items-center mb-6">
                <TrendingUp className="w-12 h-12 text-accent mr-4" />
                <div>
                  <h3 className="text-3xl font-bold">40% Improvement</h3>
                  <p className="text-blue-200">In Academic Excellence</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                The exceptional teaching team at Earlington Secondary School has achieved a remarkable 
                40% improvement in academic outcomes. This achievement is a direct testament to their 
                unwavering dedication, professional skill, and commitment to every student's future.
              </p>
              <div className="flex items-center space-x-2 text-sm font-semibold text-accent">
                <Award className="w-5 h-5" />
                <span>Verified Achievement</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900">
              Partners in Educational Success
            </h3>
            <p className="text-gray-600 text-lg">
              The Earlington Legacy Initiative NPC exists to amplify this impact. We believe that when 
              teachers are supported with the right resources and environment, student potential knows no bounds.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { 
                  icon: Users, 
                  title: "Staff Support", 
                  desc: "Providing resources for professional development and well-being." 
                },
                { 
                  icon: Heart, 
                  title: "Ethical Partnership", 
                  desc: "We work alongside educators, honoring their expertise and leadership." 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
