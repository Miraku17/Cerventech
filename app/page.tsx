'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Settings, Headphones, Wrench } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const Home: React.FC = () => {
  const parallaxRef = useRef<HTMLImageElement>(null);
  const [businessWordIndex, setBusinessWordIndex] = React.useState(0);

  const businessWords = ['business', 'success', 'growth', 'future'];

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBusinessWordIndex((prevIndex) => (prevIndex + 1) % businessWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [businessWords.length]);

  return (
    <div className="flex flex-col">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-slide-in-left {
          animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes flipText {
          0% {
            transform: perspective(400px) rotateX(0deg);
            opacity: 1;
          }
          50% {
            transform: perspective(400px) rotateX(90deg);
            opacity: 0;
          }
          51% {
            transform: perspective(400px) rotateX(-90deg);
            opacity: 0;
          }
          100% {
            transform: perspective(400px) rotateX(0deg);
            opacity: 1;
          }
        }
        .animate-flip {
          animation: flipText 0.6s ease-in-out;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-accent-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4 pb-4">
                <h1 className="animate-slide-in-left delay-100 text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                  Expert IT Outsourced
                </h1>

                <h2 className="animate-slide-in-left delay-200 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight pb-2">
                  <span className="text-white">for your </span>
                  <span
                    key={businessWordIndex}
                    className="inline-block animate-flip"
                    style={{
                      background: 'linear-gradient(to right, #3b82f6 0%, #3b82f6 30%, #ef4444 70%, #ef4444 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'grayscale'
                    }}
                  >
                    {businessWords[businessWordIndex]}
                  </span>
                </h2>
              </div>

              {/* Subtitle */}
              <div className="animate-fade-in-up delay-300">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  Delivering cost-effective managed services with advanced technology.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold hover:from-primary-700 hover:to-primary-800 transition-all flex items-center justify-center shadow-lg shadow-primary-600/50 hover:shadow-xl hover:shadow-primary-600/60 hover:scale-105 transform"
                >
                  Let's Talk
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/20 rounded-xl font-semibold hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center hover:scale-105 transform"
                >
                  Explore Services
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Trusted Partners */}
              <div className="animate-fade-in-up delay-700 pt-8 border-t border-white/10">
                <div className="text-sm text-slate-400 mb-4">Trusted by Market Leaders</div>
                <div className="flex flex-wrap gap-4">
                  {[
                    { name: 'IBM', logo: '/partners/IBM.png' },
                    { name: 'Lenovo', logo: '/partners/Lenovo_Global_Corporate_Logo.png' },
                    { name: 'HP Enterprise', logo: '/partners/hp_enterprise_logo_the_branding_journal.jpg' },
                    { name: 'Fujitsu', logo: '/partners/Fujitsu-Logo.png' },
                    { name: 'Kyndryl', logo: '/partners/Kyndryl_logo.png' },
                  ].map((partner, index) => (
                    <div
                      key={index}
                      className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-2 shadow-md hover:shadow-lg transition-shadow"
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative animate-fade-in-up delay-400 hidden lg:block">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                    alt="IT Team Collaboration"
                    width={600}
                    height={700}
                    className="object-cover w-full h-[600px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                </div>

                {/* Floating Card 1 */}
                <div className="absolute -left-8 top-20 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
                      <Settings className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Managed IT</div>
                      <div className="text-xs text-slate-600">24/7 Support</div>
                    </div>
                  </div>
                </div>

                {/* Floating Card 2 */}
                <div className="absolute -right-8 bottom-32 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center">
                      <Headphones className="text-white" size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">Expert Support</div>
                      <div className="text-xs text-slate-600">Always Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Stats Section */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0} className="h-full">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <Users size={32} />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">200+</h3>
                <p className="text-slate-600 font-medium">Expert Developers</p>
              </div>
            </FadeIn>
            <FadeIn delay={150} className="h-full">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <Globe size={32} />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">15+</h3>
                <p className="text-slate-600 font-medium">Countries Served</p>
              </div>
            </FadeIn>
            <FadeIn delay={300} className="h-full">
              <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 text-center hover:shadow-lg transition-shadow h-full">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <ShieldCheck size={32} />
                </div>
                <h3 className="text-4xl font-bold text-slate-900 mb-2">98%</h3>
                <p className="text-slate-600 font-medium">Client Retention</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section> */}

      {/* Brief Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive IT Solutions</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: "Manage IT Solutions",
                desc: "Delivering tailored managed services that enhance efficiency and value for your business needs.",
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
              },
              {
                icon: Headphones,
                title: "End User Support",
                desc: "Dedicated customer support tailored to your needs, ensuring professional aid and responsive resolutions 24/7.",
                image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop"
              },
              {
                icon: Wrench,
                title: "Technology Support",
                desc: "Our certified team offers reliable support, leveraging over twenty years of industry experience.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((service, index) => (
              <FadeIn key={index} delay={index * 150} className="h-full">
                <div className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group h-full flex flex-col">
                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 z-20">
                      <div className="w-14 h-14 bg-white rounded-xl shadow-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                        <service.icon size={28} />
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex-grow flex flex-col">
                    <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                      {service.desc}
                    </p>
                    <Link href="/services" className="text-primary-600 font-semibold flex items-center group-hover:translate-x-2 transition-transform duration-300">
                      Learn more <ArrowRight size={18} className="ml-2 group-hover:animate-pulse" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12">
              Trusted Technology Partners
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="relative overflow-hidden">
              <div className="flex animate-scroll items-center">
              {(() => {
                const partners = [
                  { name: 'Fujifilm', logo: '/partners/Fujifilm-Logo.png' },
                  { name: 'Fujitsu', logo: '/partners/Fujitsu-Logo.png' },
                  { name: 'IBM', logo: '/partners/IBM.png' },
                  { name: 'Kyndryl', logo: '/partners/Kyndryl_logo.png' },
                  { name: 'Lenovo', logo: '/partners/Lenovo_Global_Corporate_Logo.png' },
                  { name: 'VST ECS', logo: '/partners/VST-ECS-logo-01-1.png' },
                  { name: 'Fastronics', logo: '/partners/fastronics.jpeg' },
                  { name: 'HP Enterprise', logo: '/partners/hp_enterprise_logo_the_branding_journal.jpg' },
                  { name: 'Unison', logo: '/partners/unison.png' },
                  { name: 'WSI', logo: '/partners/wsi.png' },
                ];
                return partners.concat(partners).map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-12 flex items-center justify-center"
                    style={{ width: '240px', height: '120px' }}
                  >
                    <div className="w-full h-full flex items-center justify-center bg-white rounded-xl p-6 shadow-lg">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={200}
                        height={100}
                        className="object-contain max-w-full max-h-full"
                      />
                    </div>
                  </div>
                ));
              })()}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="bg-slate-900 rounded-3xl p-12 md:p-16 text-center md:text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your business?</h2>
                  <p className="text-slate-300 text-lg">
                    Join hundreds of successful companies who trust Cerventech with their digital future.
                  </p>
                </div>
                <Link href="/contact" className="whitespace-nowrap px-8 py-4 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors shadow-lg">
                  Get a Quote
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
