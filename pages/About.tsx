
import React from 'react';
import { Target, Heart, Eye, Award, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-blue-50 py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold text-blue-950 sm:text-5xl mb-6 tracking-tight">Our Story</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            YPE Media was founded with one simple belief: Small and mid-sized businesses deserve high-quality digital systems without overpaying agencies.
          </p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-950 mb-6">How We Fix the System</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>After working with multiple service businesses, we saw the same recurring problem—great services, but poor websites and no predictable lead flow.</p>
              <p>Standard agencies charged premium prices for template designs and sent low-quality traffic to broken pages. We decided to do things differently.</p>
              <p className="font-semibold text-blue-600">So we fixed it. We combined expert design with strategic cold outreach to build a complete engine for growth.</p>
            </div>
          </div>
          <div className="bg-gray-100 rounded-3xl overflow-hidden shadow-inner h-96 relative">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Team Work" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-950">Our Mission & Values</h2>
            <p className="mt-4 text-gray-600">Built on trust, delivered with precision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">To help businesses grow with conversion-focused websites and ethical, personalized cold email outreach.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Transparency over hype</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Results over promises</li>
                <li className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Relationships over transactions</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">To be the global leader in affordable lead-generation systems for service niche industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-blue-950">The Core Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-gray-200">
              <img src="https://picsum.photos/400/400?random=1" alt="Founder" />
            </div>
            <h4 className="text-2xl font-bold">Founder & Strategist</h4>
            <p className="text-blue-600 font-medium mb-4">Growth Specialist</p>
            <p className="text-gray-600">A digital growth specialist with hands-on experience in high-performance web design and outbound systems.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 bg-gray-200">
              <img src="https://picsum.photos/400/400?random=2" alt="Design Team" />
            </div>
            <h4 className="text-2xl font-bold">Execution Team</h4>
            <p className="text-blue-600 font-medium mb-4">Design & Outreach</p>
            <p className="text-gray-600">A lean, skilled team focused on impeccable execution—we prioritize results over office fluff.</p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-blue-950 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div>
               <div className="text-5xl font-extrabold mb-2">1.5+</div>
               <div className="text-blue-400 font-medium">Years of Operations</div>
             </div>
             <div>
               <div className="text-5xl font-extrabold mb-2">4+</div>
               <div className="text-blue-400 font-medium">Countries Reached</div>
             </div>
             <div>
               <div className="text-5xl font-extrabold mb-2">50+</div>
               <div className="text-blue-400 font-medium">Niche Systems Built</div>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;
