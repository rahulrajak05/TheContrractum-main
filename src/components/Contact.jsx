import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Registration = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      
      {/* LEFT SECTION */}
      <div className="lg:w-1/2 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-12 flex flex-col justify-center relative overflow-hidden">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-md mx-auto w-full">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Start a <br /> Conversation
            </h1>
            <p className="text-gray-400 text-sm">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form className="space-y-5">
            <div className="relative group">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl outline-none focus:border-red-500 focus:bg-white/20 transition-all duration-300 placeholder:text-gray-400"
              />
            </div>

            <div className="relative group">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl outline-none focus:border-red-500 focus:bg-white/20 transition-all duration-300 placeholder:text-gray-400"
              />
            </div>

            <div className="relative group">
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl outline-none focus:border-red-500 focus:bg-white/20 transition-all duration-300 placeholder:text-gray-400"
              />
            </div>

            <div className="relative group">
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl outline-none focus:border-red-500 focus:bg-white/20 transition-all duration-300 placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-8 py-4 font-bold tracking-wide rounded-xl shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:-translate-y-1"
              >
                SEND MESSAGE
              </button>

              <button
                type="reset"
                className="px-8 py-4 border-2 border-white/30 font-bold hover:bg-white/10 rounded-xl transition-all duration-300"
              >
                RESET
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="lg:w-1/2 bg-gradient-to-br from-gray-50 to-gray-100 p-12 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-100 rounded-full -mr-32 -mt-32 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100 rounded-full -ml-24 -mb-24 opacity-30"></div>
        
        <div className="relative z-10 max-w-md mx-auto w-full">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-red-100 text-red-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
              Contact Information
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4 text-gray-900">We're Here to Help</h2>
            <p className="text-gray-600">
              Reach out to us through any of these channels. We're available to assist you.
            </p>
          </div>

          <div className="space-y-6">

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-red-500 to-pink-600 p-4 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Mail size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Email Address</h4>
                  <a href="mailto:info@thecontractum.com" className="text-gray-600 hover:text-red-500 transition-colors font-medium flex items-center gap-2 group">
                    info@thecontractum.com
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-4 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Phone size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Phone Number</h4>
                  <a href="tel:+919680534740" className="text-gray-600 hover:text-red-500 transition-colors font-medium flex items-center gap-2 group">
                    +91 96805-34740
                    <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-4 rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900 mb-2">Office Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Plot No 169 Ground Floor, Rangbari Road<br />
                    Kota, Rajasthan 324005
                  </p>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Registration;
