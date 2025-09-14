"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/16171879-6283-46ae-859e-1f8de837544d.png" 
          alt="Confident beautiful woman in workout clothes stretching outdoors in golden sunlight wellness lifestyle"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.background = 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #f3e8ff 100%)';
            target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-playfair font-bold text-white">
            Bloom Wellness
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-pink-200 transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-pink-200 transition-colors font-medium"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white hover:text-pink-200 transition-colors font-medium"
            >
              Stories
            </button>
            <button 
              onClick={() => scrollToSection('resources')}
              className="text-white hover:text-pink-200 transition-colors font-medium"
            >
              Resources
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
          Transform Your Life,
          <span className="block text-pink-200">One Step at a Time</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto leading-relaxed">
          Join thousands of women who have discovered the power of holistic wellness. 
          Our approach combines sustainable weight loss with self-care practices that nourish your body, mind, and soul.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection('services')}
            size="lg"
            className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:bg-white hover:text-rose-600"
          >
            Start Your Journey
          </Button>
          
          <Button
            onClick={() => scrollToSection('about')}
            variant="ghost"
            size="lg"
            className="text-white border-2 border-transparent px-8 py-3 text-lg font-semibold hover:border-white/50 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-8 text-sm opacity-90">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-200 rounded-full"></div>
            <span>10,000+ Women Transformed</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-200 rounded-full"></div>
            <span>Science-Based Approach</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-pink-200 rounded-full"></div>
            <span>Supportive Community</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}