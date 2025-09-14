import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      title: "Holistic Wellness",
      description: "We believe true transformation comes from nurturing your entire being - body, mind, and spirit.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f53b8053-6353-4e7a-ae4d-ff1f414989d7.png"
    },
    {
      title: "Sustainable Approach",
      description: "No quick fixes or extreme measures. We focus on creating lasting habits that fit your lifestyle.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/69a5823d-57c7-4481-ade2-d28877c6696e.png"
    },
    {
      title: "Community Support",
      description: "Join a sisterhood of women who understand your journey and celebrate every milestone with you.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b8b7669c-57da-4232-bd5b-86106ab062bc.png"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Your Wellness Journey Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Bloom Wellness, we understand that every woman's path to health and happiness is unique. 
            That's why we've created a comprehensive approach that honors your individual needs while 
            providing the support and tools you need to thrive.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-rose-50 to-purple-50 rounded-3xl p-12 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-playfair font-bold text-gray-800 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              To empower women to reclaim their health, confidence, and joy through evidence-based wellness practices, 
              compassionate coaching, and a supportive community that celebrates every step of the journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-rose-100 text-rose-700 px-6 py-2 rounded-full text-sm font-medium">
                Body Positive
              </span>
              <span className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full text-sm font-medium">
                Science-Based
              </span>
              <span className="bg-pink-100 text-pink-700 px-6 py-2 rounded-full text-sm font-medium">
                Community-Driven
              </span>
              <span className="bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full text-sm font-medium">
                Sustainable
              </span>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={value.image} 
                    alt={value.description}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-playfair font-bold text-gray-800 mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gray-800 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Transforming Lives Every Day
            </h3>
            <p className="text-gray-300 text-lg">
              Real results from real women who chose to prioritize their wellness
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-pink-300 mb-2">10,000+</div>
              <div className="text-gray-300">Women Transformed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-rose-300 mb-2">95%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-300 mb-2">4.9★</div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-300 mb-2">24/7</div>
              <div className="text-gray-300">Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}