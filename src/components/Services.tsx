"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Services() {
  const programs = [
    {
      title: "Wellness Foundation",
      subtitle: "3-Month Transformation",
      price: "$197/month",
      description: "Perfect for beginners ready to build healthy habits that last a lifetime.",
      features: [
        "Personalized nutrition plan",
        "Weekly coaching calls",
        "Exercise routines for all fitness levels",
        "Mindfulness and stress management",
        "Private community access",
        "Weekly meal prep guides"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4d4965d4-3479-4d86-b1c1-c983e8bebc42.png",
      popular: false
    },
    {
      title: "Complete Transformation",
      subtitle: "6-Month Deep Dive",
      price: "$147/month",
      description: "Our most comprehensive program for women ready for total life transformation.",
      features: [
        "Everything in Wellness Foundation",
        "1-on-1 coaching sessions",
        "Custom workout plans",
        "Hormone optimization guidance",
        "Sleep and recovery protocols",
        "VIP community access",
        "Monthly progress assessments",
        "Recipe collections and meal plans"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9c5eb03b-350b-4964-bf2a-7e93b1ee6236.png",
      popular: true
    },
    {
      title: "Maintenance & Lifestyle",
      subtitle: "Ongoing Support",
      price: "$67/month",
      description: "For women who've reached their goals and want ongoing support to maintain their new lifestyle.",
      features: [
        "Monthly group coaching",
        "Seasonal meal plans",
        "Community challenges",
        "Resource library access",
        "Monthly wellness workshops",
        "Lifetime community membership"
      ],
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c095faea-e814-4afc-8306-7925ce72ce23.png",
      popular: false
    }
  ];

  const additionalServices = [
    {
      title: "One-on-One Coaching",
      description: "Personalized guidance tailored to your unique needs and challenges.",
      price: "Starting at $200/session"
    },
    {
      title: "Corporate Wellness Programs",
      description: "Bring wellness to your workplace with our comprehensive corporate packages.",
      price: "Custom pricing"
    },
    {
      title: "Wellness Retreats",
      description: "Immersive weekend experiences to reset, recharge, and reconnect.",
      price: "$800-1500 per retreat"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Choose Your Transformation Path
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're just starting your wellness journey or looking to maintain your success, 
            we have a program designed specifically for you.
          </p>
        </div>

        {/* Main Programs */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl border-2 ${
                program.popular 
                  ? 'border-rose-200 bg-white scale-105 lg:scale-110' 
                  : 'border-gray-100 bg-white hover:border-rose-100'
              }`}
            >
              {program.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="aspect-[5/4] overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.description}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-2xl font-playfair font-bold text-gray-800">
                    {program.title}
                  </CardTitle>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-rose-600">{program.price}</div>
                    <div className="text-sm text-gray-500">{program.subtitle}</div>
                  </div>
                </div>
                <p className="text-gray-600">{program.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                    program.popular
                      ? 'bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white'
                      : 'bg-transparent border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white'
                  }`}
                  onClick={() => {
                    // Smooth scroll to newsletter section for lead capture
                    const element = document.getElementById('newsletter');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {program.popular ? 'Start Transforming Today' : 'Get Started'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-white rounded-3xl p-12">
          <h3 className="text-3xl font-playfair font-bold text-gray-800 text-center mb-12">
            Additional Services
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center p-6 hover:bg-gray-50 rounded-xl transition-colors duration-300">
                <h4 className="text-xl font-playfair font-bold text-gray-800 mb-4">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-rose-600 font-semibold">{service.price}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white px-8 py-3 text-lg font-semibold"
              onClick={() => {
                const element = document.getElementById('newsletter');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Contact Us for Custom Solutions
            </Button>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-playfair font-bold mb-6">
            30-Day Money-Back Guarantee
          </h3>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            We're so confident in our approach that if you don't see positive changes in your energy, 
            mindset, and overall well-being within 30 days, we'll refund your investment completely.
          </p>
          <div className="flex justify-center items-center gap-4">
            <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
            <span className="text-rose-300 font-medium">No questions asked</span>
            <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
            <span className="text-rose-300 font-medium">Risk-free commitment</span>
            <div className="w-3 h-3 bg-rose-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}