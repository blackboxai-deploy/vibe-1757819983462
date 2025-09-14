"use client";

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Programs", href: "#services" },
    { name: "Success Stories", href: "#testimonials" },
    { name: "Free Resources", href: "#resources" },
  ];

  const resources = [
    { name: "Blog", href: "#" },
    { name: "Podcast", href: "#" },
    { name: "Meal Plans", href: "#" },
    { name: "Workout Library", href: "#" },
  ];

  const support = [
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Support Center", href: "#" },
    { name: "Community Guidelines", href: "#" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-playfair font-bold mb-4">
              Bloom Wellness
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Empowering women to transform their lives through holistic wellness, 
              sustainable weight loss, and self-care practices that nurture the mind, body, and soul.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-rose-500 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <span className="text-sm font-bold">📷</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-purple-500 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="YouTube"
              >
                <span className="text-sm font-bold">▶</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-indigo-500 hover:bg-indigo-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Pinterest"
              >
                <span className="text-sm font-bold">P</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-rose-300 transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-rose-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-6">Support</h3>
            <ul className="space-y-3">
              {support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-rose-300 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="font-medium mb-3">Contact Info</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <div>📧 hello@bloomwellness.com</div>
                <div>📞 (555) 123-BLOOM</div>
                <div>📍 Available Worldwide Online</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Reminder */}
        <div className="bg-gradient-to-r from-rose-500/10 to-pink-500/10 rounded-2xl p-8 mb-12 text-center">
          <h3 className="text-2xl font-playfair font-bold mb-4">
            Don't Miss Out on Your Wellness Journey
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join thousands of women who receive weekly wellness tips, exclusive content, 
            and early access to new programs.
          </p>
          <button
            onClick={() => scrollToSection('#newsletter')}
            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Get Your Free Starter Kit
          </button>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Bloom Wellness. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-rose-300 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-300 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-300 transition-colors duration-300">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-300 transition-colors duration-300">
                Disclaimer
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm max-w-4xl mx-auto leading-relaxed">
              <strong>Medical Disclaimer:</strong> The information provided by Bloom Wellness is for educational and informational purposes only. 
              It is not intended as a substitute for professional medical advice, diagnosis, or treatment. 
              Always consult your physician or other qualified healthcare provider before starting any new wellness program.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-rose-500 hover:bg-rose-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        ↑
      </button>
    </footer>
  );
}