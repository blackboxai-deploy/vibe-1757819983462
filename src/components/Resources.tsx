"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Resources() {
  const resources = [
    {
      title: "7-Day Self-Care Challenge",
      description: "Kickstart your wellness journey with simple daily practices that nurture your mind, body, and soul.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a141c3df-0b95-4991-8955-0d80187acbbc.png",
      type: "Challenge",
      duration: "7 days"
    },
    {
      title: "Healthy Meal Prep Guide",
      description: "Learn to prepare nutritious, delicious meals that save time and support your wellness goals.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/893dbdc2-bc72-40a2-89bb-1455e737cb17.png",
      type: "Guide",
      duration: "Free download"
    },
    {
      title: "Mindful Eating Workbook",
      description: "Transform your relationship with food through mindfulness practices and intuitive eating principles.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/316a5c6a-0846-42f1-8646-2b9034b80277.png",
      type: "Workbook",
      duration: "21 pages"
    },
    {
      title: "Morning Routine Checklist",
      description: "Create an empowering morning routine that sets you up for success and positive energy all day.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a8e1beb4-6353-492c-8150-5aa0458322c4.png",
      type: "Checklist",
      duration: "Instant access"
    },
    {
      title: "Stress-Relief Toolkit",
      description: "Evidence-based techniques to manage stress, anxiety, and overwhelm in your daily life.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4d59f555-4296-4699-83de-d18ffcba31f8.png",
      type: "Toolkit",
      duration: "15 techniques"
    },
    {
      title: "Body Positive Affirmations",
      description: "Daily affirmations to build confidence, self-love, and a positive relationship with your body.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1f072c10-f237-4dfd-aad2-56fab30eea82.png",
      type: "Audio",
      duration: "10 minutes daily"
    }
  ];

  const tips = [
    {
      title: "Start with Small Wins",
      description: "Focus on tiny, achievable changes that build momentum and confidence over time."
    },
    {
      title: "Listen to Your Body",
      description: "Learn to recognize hunger cues, energy levels, and what makes you feel your best."
    },
    {
      title: "Practice Self-Compassion",
      description: "Treat yourself with the same kindness you'd show a dear friend on their wellness journey."
    },
    {
      title: "Build a Support System",
      description: "Surround yourself with people who encourage and celebrate your progress."
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Free Resources for Your Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe wellness should be accessible to everyone. Start your transformation today with these 
            carefully curated resources designed to support and inspire you.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
              <div className="aspect-[8/5] overflow-hidden">
                <img 
                  src={resource.image} 
                  alt={resource.description}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.background = `linear-gradient(135deg, ${
                      index % 6 === 0 ? '#fdf2f8' : 
                      index % 6 === 1 ? '#f0fdf4' : 
                      index % 6 === 2 ? '#faf5ff' : 
                      index % 6 === 3 ? '#fffbeb' : 
                      index % 6 === 4 ? '#f0f9ff' : '#fef7ee'
                    } 0%, ${
                      index % 6 === 0 ? '#fce7f3' : 
                      index % 6 === 1 ? '#dcfce7' : 
                      index % 6 === 2 ? '#f3e8ff' : 
                      index % 6 === 3 ? '#fef3c7' : 
                      index % 6 === 4 ? '#dbeafe' : '#fed7aa'
                    } 100%)`;
                    target.style.display = 'none';
                  }}
                />
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-rose-100 text-rose-700 px-3 py-1 rounded-full text-sm font-medium">
                    {resource.type}
                  </span>
                  <span className="text-gray-500 text-sm">{resource.duration}</span>
                </div>
                <CardTitle className="text-xl font-playfair font-bold text-gray-800">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 leading-relaxed mb-6">
                  {resource.description}
                </p>
                <Button 
                  className="w-full bg-transparent border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white transition-all duration-300"
                  onClick={() => {
                    // Scroll to newsletter for lead capture
                    const element = document.getElementById('newsletter');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Free Access
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Tips Section */}
        <div className="bg-white rounded-3xl p-12">
          <h3 className="text-3xl font-playfair font-bold text-gray-800 text-center mb-12">
            4 Essential Wellness Tips
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tips.map((tip, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold text-white ${
                  index % 4 === 0 ? 'bg-rose-500' : 
                  index % 4 === 1 ? 'bg-pink-500' : 
                  index % 4 === 2 ? 'bg-purple-500' : 'bg-indigo-500'
                } group-hover:scale-110 transition-transform duration-300`}>
                  {index + 1}
                </div>
                <h4 className="text-lg font-playfair font-bold text-gray-800 mb-3">
                  {tip.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Wellness Blog Preview */}
        <div className="mt-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold mb-6">
              Stay Inspired with Our Weekly Blog
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Get fresh insights, practical tips, and inspiring stories delivered to your inbox every week. 
              Join our community of women committed to living their best lives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-playfair font-bold text-lg mb-3">Latest Articles</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• "5 Morning Habits That Changed My Life"</li>
                <li>• "Intuitive Eating: A Beginner's Guide"</li>
                <li>• "Finding Balance as a Working Mom"</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-playfair font-bold text-lg mb-3">Wellness Tips</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Weekly meal prep strategies</li>
                <li>• Stress management techniques</li>
                <li>• Self-care Sunday ideas</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="font-playfair font-bold text-lg mb-3">Success Stories</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Real transformation journeys</li>
                <li>• Before and after mindset shifts</li>
                <li>• Community member spotlights</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button 
              className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-3 text-lg font-semibold hover:from-rose-600 hover:to-pink-600 transition-all duration-300"
              onClick={() => {
                const element = document.getElementById('newsletter');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Subscribe to Our Newsletter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}