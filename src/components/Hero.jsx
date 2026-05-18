import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/65c65088e5cfd018fcc3eda3_new-hero (1).webp";

export default function HeroSection() {
  const texts = [
    "Professional Business Support Services",
    "Strategic Business Support Services",
    "Effective Business Support Services",
    "Professional Smart Support Services",
  ];

  const backgroundImages = [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000",
    "https://images.unsplash.com/photo-1486406146926-c6 Welcome to The Contrractum27a92ad1ab?q=80&w=2000",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000",
  ];

  const [index, setIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(bgInterval);
  }, []);

  return (
    <section className="relative text-white min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image Slideshow with Overlay */}
      <div className="absolute inset-0">
        {backgroundImages.map((img, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: bgIndex === idx ? 1 : 0,
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-indigo-900/80 to-purple-900/85"></div>
          </div>
        ))}
      </div>

      {/* Animated Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-overlay filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-20">

        {/* LEFT SIDE CONTENT */}
        <div className="space-y-6 animate-fadeIn">
          {/* Welcome Badge with enhanced styling */}
          <div className="animate-slideDown mt-8">
            <span className="inline-block uppercase tracking-widest text-white font-bold text-sm md:text-base bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 px-6 py-3 rounded-full shadow-2xl backdrop-blur-sm border border-white/20">
              ✨ Welcome to <span className="text-blue-300">The</span> <span className="text-red-300">Contractum</span>
            </span>
          </div>

          {/* Rotating Heading with premium gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight animate-fadeIn drop-shadow-2xl" style={{animationDelay: '0.2s'}}>
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
              {texts[index]}
            </span>
          </h1>

          <p className="text-blue-50 text-base md:text-lg lg:text-xl max-w-xl leading-relaxed animate-fadeIn drop-shadow-lg" style={{animationDelay: '0.4s'}}>
            Empowering businesses with cutting-edge technology solutions, strategic consulting, and innovative services designed to drive growth and digital transformation.
          </p>

          {/* Enhanced Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fadeIn" style={{animationDelay: '0.6s'}}>
            <Link
              to="/careers"
              className="group px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-bold rounded-xl shadow-2xl hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2">
                Join Our Team
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            <Link
              to="/partner"
              className="group px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white font-bold rounded-xl hover:bg-white hover:text-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
            >
              <span className="flex items-center gap-2">
                Become a Partner
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Stats or Additional Info */}
          <div className="flex flex-wrap gap-8 pt-8 animate-fadeIn" style={{animationDelay: '0.8s'}}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">10+</div>
              <div className="text-blue-200 text-sm mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">100+</div>
              <div className="text-blue-200 text-sm mt-1">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">98%</div>
              <div className="text-blue-200 text-sm mt-1">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE with enhanced visual effects */}
        <div className="flex justify-center animate-fadeIn" style={{animationDelay: '0.3s'}}>
          <div className="relative group">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
            
            {/* Glass Card Effect */}
            <div className="relative bg-white/5 backdrop-blur-sm p-2 rounded-3xl border border-white/20 shadow-2xl">
              <img
                src={heroImage}
                alt="Business Solutions"
                className="relative rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-500 group-hover:scale-105"
              />
              
              {/* Floating Badge on Image */}
              <div className="absolute -bottom-5 -left-5 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl shadow-2xl backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  {/* <span className="font-bold">Available 24/7</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Progress Indicator for Background Slides */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {backgroundImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setBgIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              bgIndex === idx ? "w-8 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
