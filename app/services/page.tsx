'use client';

import React from 'react';
import Image from 'next/image';
import { Code, Server, Smartphone, Layout, Database, Lock, Cpu, BarChart } from 'lucide-react';
import { Service } from '@/types';
import FadeIn from '@/components/FadeIn';

const Services: React.FC = () => {
  const services = [
    {
      id: 'pos-support',
      title: 'Point of Sale IT Support',
      subtitle: 'Building websites that drive revenue.',
      description: 'Expert support for your point of sale systems, ensuring seamless transactions and operations.',
      icon: Server,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
    },
    {
      id: 'web-dev',
      title: 'Web Development',
      subtitle: 'Transforms ideas into reality.',
      description: 'We create web projects that add value to your customers by providing an engaging user experience.',
      icon: Code,
      gradient: 'from-purple-500 via-pink-500 to-red-500',
    },
    {
      id: 'no-code',
      title: 'No-code Development',
      subtitle: 'Solutions for quick launches.',
      description: 'Our no-code development enables the creation of fully functional web apps with user roles, dashboards, and views',
      icon: Layout,
      gradient: 'from-orange-500 via-amber-500 to-yellow-500',
    },
    {
      id: 'mvp',
      title: 'MVP Development',
      subtitle: 'Validate assumptions and save costs',
      description: 'A risk-free approach that saves time, enabling you to test your product\'s viability and collect valuable user feedback',
      icon: Cpu,
      gradient: 'from-green-500 via-emerald-500 to-teal-500',
    },
  ];

  return (
    <div className="pt-20">
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
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
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
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>

      {/* Hero Section with Building Image */}
      <section className="relative bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Side - Text Content */}
            <div>
              {/* Small Header */}
              <div className="flex items-center gap-3 mb-6 animate-slide-in-left delay-100">
                <div className="w-12 h-1 bg-primary-600"></div>
                <span className="text-primary-600 font-semibold text-lg uppercase tracking-wide">What We Offer</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight animate-slide-in-left delay-200">
                Comprehensive IT Solutions
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-600 mb-8 leading-relaxed animate-slide-in-left delay-300">
                We provide cost-effective managed IT services tailored to your business needs. From infrastructure management to end-user support, we deliver reliable solutions with cutting-edge technology.
              </p>

              {/* Key Points */}
              <div className="space-y-4 animate-fade-in-up delay-400">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Managed IT Services</h3>
                      <p className="text-slate-600 text-sm">Proactive monitoring and management of your IT infrastructure 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Outsourced Services</h3>
                      <p className="text-slate-600 text-sm">Expert technical support and specialized IT services on demand</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">Customer-First Approach</h3>
                      <p className="text-slate-600 text-sm">Dedicated support focused on your satisfaction and business growth</p>
                    </div>
                  </div>
                </div>
            </div>

            {/* Right Side - Coding Team Image with Grid Overlay */}
            <div className="relative animate-slide-in-right delay-300">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                {/* Coding Team Image */}
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team Coding Together"
                  width={600}
                  height={700}
                  className="object-cover w-full h-[600px]"
                />

                {/* Grid Overlay */}
                <div className="absolute inset-0 animate-pulse" style={{
                  backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent"></div>

                {/* Stats Card Overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-2xl animate-scale-in delay-500">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-3xl font-bold text-primary-600 mb-1">20+</div>
                        <div className="text-xs text-slate-600">Years Experience</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary-600 mb-1">38+</div>
                        <div className="text-xs text-slate-600">Industries Served</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary-600 mb-1">98%</div>
                        <div className="text-xs text-slate-600">Satisfaction Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                We offer an extensive array of services tailored to address the specific needs of our clients in the digital space.
              </p>
            </div>
          </FadeIn>

          {/* Futuristic Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 100} className="h-full">
                <div className="group relative h-full">
                  {/* Glowing Border Effect */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500`}></div>

                  {/* Card Content */}
                  <div className="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-2xl p-8 border border-slate-800 hover:border-slate-700 transition-all duration-500">
                    {/* Icon with Gradient */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5`}>
                        <div className="w-full h-full bg-slate-900 rounded-xl flex items-center justify-center">
                          <service.icon className="text-white" size={32} />
                        </div>
                      </div>
                    </div>

                    {/* Subtitle */}
                    <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 mb-4`}>
                      <span className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.subtitle}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-slate-300 transition-all duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-400 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Decorative Corner */}
                    <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                      <div className={`absolute top-0 right-0 w-full h-full bg-gradient-to-br ${service.gradient} opacity-10 transform rotate-45 translate-x-10 -translate-y-10`}></div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Side - Header & Stats */}
            <div>
              {/* Section Label */}
              <FadeIn delay={0}>
                <div className="inline-block px-4 py-2 rounded-full bg-slate-100 mb-6">
                  <span className="text-sm font-semibold text-slate-700">Why choose us</span>
                </div>
              </FadeIn>

              {/* Main Heading */}
              <FadeIn delay={100} direction="left">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Transforming ideas into digital experiences.
                </h2>
              </FadeIn>

              {/* Description */}
              <FadeIn delay={200} direction="left">
                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                  We design and develop cutting-edge websites that captivate, engage, and deliver results. Our solutions are tailored to meet the unique needs of your business.
                </p>
              </FadeIn>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-6">
                  <FadeIn delay={300}>
                    <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative p-6 border-2 border-slate-200 rounded-2xl hover:border-primary-300 transition-all duration-300">
                      <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2">
                        93%
                      </div>
                      <div className="text-sm text-slate-600 font-medium">Successful clients</div>
                    </div>
                    </div>
                  </FadeIn>
                  <FadeIn delay={400}>
                    <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    <div className="relative p-6 border-2 border-slate-200 rounded-2xl hover:border-primary-300 transition-all duration-300">
                      <div className="text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2">
                        96%
                      </div>
                      <div className="text-sm text-slate-600 font-medium">Satisfaction rate</div>
                    </div>
                    </div>
                  </FadeIn>
              </div>
            </div>

            {/* Right Side - Features Grid */}
            <div>
              <div className="space-y-6">
                  {/* Feature 1 */}
                  <FadeIn delay={100}>
                    <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                    <div className="relative bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                          <Layout className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">Custom website solutions</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Whether it's an e-commerce platform or a corporate site, we create digital solutions tailored to your goals.
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </FadeIn>

                  {/* Feature 2 */}
                  <FadeIn delay={200}>
                    <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                    <div className="relative bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                          <Smartphone className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">User-centric design</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Our designs prioritize user experience, we craft visually stunning websites that provide a seamless experience across devices.
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </FadeIn>

                  {/* Feature 3 */}
                  <FadeIn delay={300}>
                    <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                    <div className="relative bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
                          <Code className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">Full-stack development</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            We handle every aspect of web development. Our expertise in modern technologies ensures robust, scalable solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </FadeIn>

                  {/* Feature 4 */}
                  <FadeIn delay={400}>
                    <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-500"></div>
                    <div className="relative bg-slate-50 border border-slate-200 rounded-xl p-6 hover:border-slate-300 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                          <BarChart className="text-white" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">Performance optimization</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">
                            Our development process includes SEO best practices and performance optimization for maximum visibility.
                          </p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </FadeIn>
                </div>
              </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900">How We Work</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             {[
               { step: "01", title: "Discovery", desc: "We dive deep to understand your requirements." },
               { step: "02", title: "Strategy", desc: "We design a roadmap and technical architecture." },
               { step: "03", title: "Development", desc: "Agile sprints with regular feedback loops." },
               { step: "04", title: "Launch", desc: "Testing, deployment, and post-launch support." }
             ].map((item, i) => (
               <FadeIn key={i} delay={i * 150} direction="up">
                 <div className="relative">
                   <div className="text-6xl font-black text-slate-200 absolute -top-4 -left-2 z-0">{item.step}</div>
                   <div className="relative z-10 pt-8 pl-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                   </div>
                 </div>
               </FadeIn>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
