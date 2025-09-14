"use client";

import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      age: "32, Marketing Manager",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b746359c-4dc9-4d3b-b170-52735b3873e0.png",
      quote: "I never thought I could love exercise until I found Bloom Wellness. The approach is so gentle yet effective. I've lost 35 pounds, but more importantly, I've gained confidence, energy, and a community of amazing women.",
      results: "Lost 35 lbs • Increased energy • Better sleep",
      timeframe: "6 months"
    },
    {
      name: "Maria Rodriguez",
      age: "28, Teacher",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/39dfe94e-cdfc-4c27-8004-51d3ca2aee86.png",
      quote: "After having two kids, I thought my body would never feel like mine again. Bloom Wellness taught me that transformation isn't just about weight loss—it's about feeling strong, capable, and worthy of self-care.",
      results: "Gained strength • Improved self-image • Stress management",
      timeframe: "4 months"
    },
    {
      name: "Jennifer Chen",
      age: "45, Small Business Owner",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/03f3f241-ceac-41a9-90ec-bed1840c85d7.png",
      quote: "I was skeptical about online programs, but the community support here is incredible. The coaches really care, and having other women cheering you on makes all the difference. I feel 20 years younger!",
      results: "Increased vitality • Better work-life balance • 25 lbs lost",
      timeframe: "8 months"
    },
    {
      name: "Ashley Thompson",
      age: "24, College Student",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5a9e593e-cb18-41ec-b8c2-a8115ee68031.png",
      quote: "Bloom Wellness helped me break free from years of yo-yo dieting. I learned to listen to my body, practice self-compassion, and create habits that actually stick. My relationship with food has completely transformed.",
      results: "Overcame emotional eating • Sustainable habits • Mental clarity",
      timeframe: "3 months"
    },
    {
      name: "Lisa Wang",
      age: "38, Nurse",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d06c58e3-de9b-4665-9621-24cda3f05281.png",
      quote: "Working 12-hour shifts, I thought I'd never have time for self-care. The program showed me how to integrate wellness into my busy schedule. I have more energy for my patients and my family now.",
      results: "Better time management • Increased stamina • 20 lbs lost",
      timeframe: "5 months"
    },
    {
      name: "Rebecca Martinez",
      age: "41, Executive",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/50919df0-c9e1-400f-a752-765bfa512a3f.png",
      quote: "The holistic approach was exactly what I needed. It's not just about the number on the scale—I sleep better, handle stress more effectively, and feel more present with my family. This program changed my entire life perspective.",
      results: "Stress reduction • Quality sleep • Mindful living",
      timeframe: "7 months"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Real Women, Real Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These aren't just before and after photos—they're stories of women who discovered their strength, 
            reclaimed their health, and transformed their lives from the inside out.
          </p>
        </div>

        {/* Success Statistics */}
        <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-4">
              What Our Community Achieves
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-rose-600 mb-2">89%</div>
              <div className="text-gray-700 font-medium">Report Better Sleep</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-pink-600 mb-2">94%</div>
              <div className="text-gray-700 font-medium">Increased Energy</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-600 mb-2">96%</div>
              <div className="text-gray-700 font-medium">Improved Confidence</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-indigo-600 mb-2">92%</div>
              <div className="text-gray-700 font-medium">Better Stress Management</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-to-br from-white to-gray-50 border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                {/* Profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} - Bloom Wellness success story`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-lg text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">{testimonial.age}</p>
                    <p className="text-rose-600 text-sm font-medium">{testimonial.timeframe} program</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Results */}
                <div className="bg-gradient-to-r from-rose-100 to-pink-100 rounded-lg p-4">
                  <h5 className="font-semibold text-gray-800 mb-2 text-sm">Key Results:</h5>
                  <p className="text-gray-700 text-sm">{testimonial.results}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gray-800 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-playfair font-bold mb-6">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Join thousands of women who have transformed their lives through our proven wellness approach. 
            Your journey to lasting health and happiness starts with a single step.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 text-lg font-semibold rounded-lg hover:from-rose-600 hover:to-pink-600 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('services');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Programs
            </button>
            <button 
              className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg font-semibold rounded-lg hover:bg-white hover:text-gray-800 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('newsletter');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Free Resources
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}