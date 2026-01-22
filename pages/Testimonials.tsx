
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  { name: "Dr. Rahul Mehta", role: "Dentist", region: "India", content: "YPE Media redesigned our website and inquiries doubled within 30 days. Extremely professional and affordable." },
  { name: "James Carter", role: "Real Estate Agent", region: "UK", content: "Their cold email system booked me 11 meetings in the first month. Worth every rupee. Highly efficient team." },
  { name: "Sarah Williams", role: "SaaS Founder", region: "USA", content: "Clean design, clear communication, and real results. Highly recommended for any startup founder needing outbound." },
  { name: "Dr. Ankit Sharma", role: "Dentist", region: "India", content: "Website redesign increased appointment calls by 60%. Their understanding of clinic needs is impressive." },
  { name: "Emma Brown", role: "Real Estate", region: "Australia", content: "Booked 9 qualified calls in 3 weeks via cold email. I didn't think this would work for Aussie market but it did!" },
  { name: "Michael Lee", role: "Consultant", region: "USA", content: "Professional execution and clear ROI. They helped me structure my landing page to actually close deals." },
  { name: "Rohit Verma", role: "Agency Owner", region: "India", content: "Best value web design service I've used. They handled the technical setup and the design perfectly." },
  { name: "David Wilson", role: "Coach", region: "UK", content: "Emails felt personal and got replies fast. No longer spending 4 hours a day on manual prospecting." },
];

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <section className="bg-blue-600 py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-extrabold sm:text-5xl mb-4">Client Success Stories</h1>
          <p className="text-xl text-blue-100">Don't take our word for it—listen to our global clients.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <div className="mb-6 relative">
                <Quote className="h-8 w-8 text-blue-100 absolute -top-4 -left-2 z-0" />
                <p className="text-gray-700 italic relative z-10 leading-relaxed">“{t.content}”</p>
              </div>
              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-lg font-bold text-blue-900">{t.name}</h4>
                <p className="text-sm text-gray-500">{t.role} • {t.region}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="mt-20 text-center max-w-4xl mx-auto px-4">
        <div className="p-12 bg-white rounded-3xl shadow-sm border border-gray-100">
           <h3 className="text-2xl font-bold text-blue-950 mb-6">Ready to be our next success story?</h3>
           <p className="text-gray-600 mb-8">Join 50+ businesses that have transformed their digital presence and lead flow with YPE Media.</p>
           <a href="#/contact" className="inline-block px-10 py-4 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition">Let's Talk Results</a>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
