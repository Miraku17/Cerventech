'use client';

import React from 'react';
import { Code, Server, Smartphone, Layout, Database, Lock, Cpu, BarChart } from 'lucide-react';
import { Service } from '@/types';
import FadeIn from '@/components/FadeIn';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 'web-dev',
      title: 'Web Application Development',
      description: 'Scalable, secure, and high-performance web applications built using the latest React and Node.js ecosystems.',
      icon: Layout,
    },
    {
      id: 'mobile-dev',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android that provide seamless user experiences.',
      icon: Smartphone,
    },
    {
      id: 'cloud',
      title: 'Cloud Infrastructure',
      description: 'End-to-end cloud migration, architecture design, and DevOps automation on AWS and Azure.',
      icon: Server,
    },
    {
      id: 'custom-soft',
      title: 'Custom Software',
      description: 'Bespoke software solutions tailored to automate your unique business processes and workflows.',
      icon: Code,
    },
    {
      id: 'data-eng',
      title: 'Data Engineering',
      description: 'Robust data pipelines, warehousing, and ETL processes to manage your enterprise data efficiently.',
      icon: Database,
    },
    {
      id: 'cyber',
      title: 'Cybersecurity',
      description: 'Comprehensive security audits, penetration testing, and compliance strategies to protect your assets.',
      icon: Lock,
    },
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'Machine learning models and AI integration to automate decision-making and enhance capabilities.',
      icon: Cpu,
    },
    {
      id: 'analytics',
      title: 'Business Analytics',
      description: 'Visualization and BI tools to turn complex data into understandable, actionable strategic insights.',
      icon: BarChart,
    },
  ];

  return (
    <div className="pt-20">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              We provide a comprehensive suite of digital services designed to accelerate your business growth.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={service.id} delay={index * 50} className="h-full">
                <div className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group h-full">
                  <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
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
