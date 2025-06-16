
import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#111] text-white relative overflow-hidden transition-colors duration-300 hover:bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl lg:text-7xl font-black mb-6">
            let's work
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's create something amazing together.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact Info */}
          <div className="space-y-8 max-w-xl">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you have a project in mind, need consultation, or just want to say hello, 
                I'm always excited to connect with fellow creators and innovators.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Email</div>
                  <a 
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=paardhivreddy22@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-orange-500 transition-colors duration-200"
                  >
                    paardhivreddy22@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-gray-400 text-sm">Location</div>
                  <div className="text-white font-medium">Hyderabad, India</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
