'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Settings, Headphones, Wrench } from 'lucide-react';
import NetworkSphere from '@/components/NetworkSphere';

const Home: React.FC = () => {
  const parallaxRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [businessWordIndex, setBusinessWordIndex] = React.useState(0);
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);

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

  // Interactive grid effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const gridSize = 50;
    const filledSquares = new Map<string, number>();

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw filled squares
      filledSquares.forEach((opacity, key) => {
        const [x, y] = key.split(',').map(Number);
        ctx.fillStyle = `rgba(59, 130, 246, ${opacity * 0.15})`;
        ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);

        // Fade out
        const newOpacity = opacity - 0.02;
        if (newOpacity <= 0) {
          filledSquares.delete(key);
        } else {
          filledSquares.set(key, newOpacity);
        }
      });

      requestAnimationFrame(drawGrid);
    };
    drawGrid();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / gridSize);
      const y = Math.floor((e.clientY - rect.top) / gridSize);
      const key = `${x},${y}`;

      if (!filledSquares.has(key)) {
        filledSquares.set(key, 1);
      }
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBusinessWordIndex((prevIndex) => (prevIndex + 1) % businessWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [businessWords.length]);

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    // Observe all scroll-animate elements
    const elements = document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        .animate-slide-in-right {
          animation: slideInRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-scale-in {
          animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .animate-slide-up-fade {
          animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-animate.in-view {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-animate-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-animate-left.in-view {
          opacity: 1;
          transform: translateX(0);
        }
        .scroll-animate-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-animate-right.in-view {
          opacity: 1;
          transform: translateX(0);
        }
        .scroll-animate-scale {
          opacity: 0;
          transform: scale(0.95);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
                      transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .scroll-animate-scale.in-view {
          opacity: 1;
          transform: scale(1);
        }
        .delay-100 { animation-delay: 0.1s; transition-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; transition-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; transition-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; transition-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; transition-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; transition-delay: 0.7s; }
        .delay-900 { animation-delay: 0.9s; transition-delay: 0.9s; }
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
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
          {/* Interactive Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-auto"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-2">
              <div className="space-y-1">
                <h1 className="animate-slide-in-left delay-100 text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Expert IT Outsourced
                </h1>

                <h2 className="animate-slide-in-left delay-200 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight pb-4">
                  <span className="text-slate-900">for your </span>
                  <span
                    key={businessWordIndex}
                    className="inline-block animate-flip pb-3"
                    style={{
                      background: 'linear-gradient(to right, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
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
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  Delivering cost-effective managed services with advanced technology.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="animate-fade-in-up delay-500 flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold flex items-center justify-center shadow-lg shadow-primary-500/30"
                >
                  Let's Talk
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-white border-2 border-primary-600 text-primary-600 rounded-xl font-semibold flex items-center justify-center shadow-sm"
                >
                  Explore Services
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </div>

              {/* Trusted Partners */}
              <div className="animate-fade-in-up delay-700 pt-8 border-t border-slate-200">
                <div className="text-sm text-slate-500 mb-4">Trusted by Market Leaders</div>
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

            {/* Right Visual - Network Sphere Animation */}
            <div className="relative animate-fade-in-up delay-400 hidden lg:block h-[600px]">
              <NetworkSphere />
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

      {/* Who We Are Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <div className="scroll-animate-left space-y-8">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-0.5 bg-primary-600"></div>
                <h2 className="text-primary-600 font-semibold text-sm uppercase tracking-wide">Who We Are</h2>
              </div>

              {/* Title */}
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Driving business growth through IT excellence.
              </h3>

              {/* Description */}
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  We are a premier managed IT services provider dedicated to empowering businesses with innovative technology solutions. Our expertise spans across comprehensive IT management, end-user support, and cutting-edge technology services.
                </p>
                <p>
                  With a customer-first approach and nationwide reach, we deliver scalable, reliable, and flexible services that transform operations and drive measurable business outcomes.
                </p>
              </div>

              {/* Expandable Sections */}
              <div className="space-y-4 pt-6">
                {/* Customer Experience First */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setExpandedSection(expandedSection === 'customer' ? null : 'customer')}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h4 className="text-xl font-bold text-slate-900">Customer Experience First</h4>
                    <ArrowRight
                      className={`text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                        expandedSection === 'customer' ? 'rotate-90' : ''
                      }`}
                      size={24}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      expandedSection === 'customer' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-8 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                      We design every service around ease, speed, and satisfaction—ensuring that end users enjoy a seamless support journey. Our dedicated team prioritizes your needs, delivering responsive and professional assistance 24/7.
                    </div>
                  </div>
                </div>

                {/* Nationwide Reach */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setExpandedSection(expandedSection === 'nationwide' ? null : 'nationwide')}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h4 className="text-xl font-bold text-slate-900">Nationwide Reach</h4>
                    <ArrowRight
                      className={`text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                        expandedSection === 'nationwide' ? 'rotate-90' : ''
                      }`}
                      size={24}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      expandedSection === 'nationwide' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-8 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                      With operations spanning across the country, we provide consistent, high-quality IT services regardless of your location. Our extensive network ensures rapid response times and local expertise wherever you need it.
                    </div>
                  </div>
                </div>

                {/* Scalable Services */}
                <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                  <button
                    onClick={() => setExpandedSection(expandedSection === 'scalable' ? null : 'scalable')}
                    className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  >
                    <h4 className="text-xl font-bold text-slate-900">Scalable, Reliable, Flexible Services</h4>
                    <ArrowRight
                      className={`text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                        expandedSection === 'scalable' ? 'rotate-90' : ''
                      }`}
                      size={24}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      expandedSection === 'scalable' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    } overflow-hidden`}
                  >
                    <div className="px-8 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-6">
                      Our solutions grow with your business. Whether you're a startup or an enterprise, we provide flexible IT services that adapt to your changing needs, ensuring reliable performance at every stage of your journey.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image - Full Height */}
            <div className="scroll-animate-right relative lg:block hidden">
              <div className="sticky top-24 h-[700px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
                  alt="Team Working Together"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Services */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Comprehensive IT Solutions</h3>
          </div>

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
              <div
                key={index}
                className={`scroll-animate-scale ${index === 0 ? '' : index === 1 ? 'delay-200' : 'delay-400'} h-full`}
              >
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="scroll-animate text-center text-2xl md:text-3xl font-bold text-white mb-12">
            Trusted Technology Partners
          </h2>

          <div className="scroll-animate delay-200">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="scroll-animate-scale">
            <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-3xl p-12 md:p-16 text-center md:text-left relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to transform your business?</h2>
                  <p className="text-slate-100 text-lg">
                    Join hundreds of successful companies who trust Cerventech with their digital future.
                  </p>
                </div>
                <Link href="/contact" className="whitespace-nowrap px-8 py-4 bg-white text-primary-700 rounded-lg font-bold hover:bg-slate-50 hover:scale-105 transition-all shadow-xl">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
