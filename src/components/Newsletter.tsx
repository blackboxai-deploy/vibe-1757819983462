"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically integrate with your email service provider
    // For now, we'll simulate a successful submission
    if (email && firstName) {
      setIsSubmitted(true);
      // Reset form after a delay
      setTimeout(() => {
        setEmail("");
        setFirstName("");
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="newsletter" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 rounded-3xl p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
              Start Your Transformation Today
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Get instant access to our free wellness starter kit, plus weekly tips, 
              exclusive resources, and inspiring stories delivered straight to your inbox.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/70 rounded-lg p-6">
                <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">📋</span>
                </div>
                <h3 className="font-playfair font-bold text-lg text-gray-800 mb-2">
                  Wellness Starter Kit
                </h3>
                <p className="text-gray-600 text-sm">
                  7-day meal plan, workout guide, and self-care checklist
                </p>
              </div>
              <div className="bg-white/70 rounded-lg p-6">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">💌</span>
                </div>
                <h3 className="font-playfair font-bold text-lg text-gray-800 mb-2">
                  Weekly Newsletter
                </h3>
                <p className="text-gray-600 text-sm">
                  Expert tips, recipes, and motivation every Monday
                </p>
              </div>
              <div className="bg-white/70 rounded-lg p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">👥</span>
                </div>
                <h3 className="font-playfair font-bold text-lg text-gray-800 mb-2">
                  Community Access
                </h3>
                <p className="text-gray-600 text-sm">
                  Join our private Facebook group of supportive women
                </p>
              </div>
            </div>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="text"
                    placeholder="Your first name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    className="flex-1 h-12 text-lg border-2 border-gray-200 focus:border-rose-400 rounded-lg"
                  />
                  <Input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-12 text-lg border-2 border-gray-200 focus:border-rose-400 rounded-lg"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white py-4 text-lg font-semibold transition-all duration-300"
                >
                  Get My Free Starter Kit 🎁
                </Button>
              </form>
            ) : (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8">
                <div className="text-green-600 text-2xl mb-4">✓</div>
                <h3 className="text-2xl font-playfair font-bold text-green-800 mb-4">
                  Welcome to the Bloom Family!
                </h3>
                <p className="text-green-700 text-lg">
                  Check your email for your free starter kit. We can't wait to support you on your wellness journey!
                </p>
              </div>
            )}

            <div className="mt-8 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Unsubscribe Anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                <span>No Spam Ever</span>
              </div>
            </div>

            <p className="text-xs text-gray-400 mt-6 max-w-lg mx-auto">
              By signing up, you agree to receive emails from Bloom Wellness. We respect your privacy 
              and will never share your information with third parties. You can unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-white ${
                    i % 5 === 0 ? 'bg-rose-300' : 
                    i % 5 === 1 ? 'bg-pink-300' : 
                    i % 5 === 2 ? 'bg-purple-300' : 
                    i % 5 === 3 ? 'bg-indigo-300' : 'bg-blue-300'
                  }`}
                ></div>
              ))}
            </div>
            <div className="text-gray-600">
              <span className="font-bold text-rose-600">12,847</span> women have already joined
            </div>
          </div>
          
          <div className="text-yellow-500 text-lg mb-2">
            ⭐⭐⭐⭐⭐
          </div>
          <p className="text-gray-600">
            "The best wellness community I've ever been part of!" - Jennifer M.
          </p>
        </div>
      </div>
    </section>
  );
}