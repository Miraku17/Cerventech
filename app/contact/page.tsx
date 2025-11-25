'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    industry: '',
    designation: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting Cerventech! We will get back to you shortly.');
    setFormData({ name: '', company: '', industry: '', designation: '', email: '', mobile: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
      `}</style>

      {/* Hero Contact Section with Gradient Background */}
      <section className="bg-gradient-to-r from-white via-blue-50 to-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left Side - Contact Info */}
            <div>
              {/* Header with Red Line */}
              <div className="flex items-center gap-3 mb-6 animate-slide-in-left delay-100">
                <div className="w-12 h-1 bg-red-600"></div>
                <span className="text-slate-700 font-semibold text-lg">Contact Us</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight animate-slide-in-left delay-200">
                Get in touch<br />with our team
              </h1>

              {/* Description */}
              <p className="text-lg text-slate-600 mb-12 leading-relaxed animate-slide-in-left delay-300">
                In need of any IT services? Get in touch with us and take the first step in transforming your business.
              </p>

              {/* Visit Us Section */}
              <div className="mb-8 animate-fade-in-up delay-400">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Visit us</h3>
                <p className="text-slate-600 mb-2">Chat to us in person at our office.</p>
                <p className="text-slate-900 font-medium leading-relaxed">
                  4th Flr., Raha Sulayman Building,<br />
                  Benavidez St, Makati City,<br />
                  Philippines
                </p>
              </div>

              {/* Call Us Section */}
              <div className="animate-fade-in-up delay-500">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Call us</h3>
                <p className="text-slate-600 mb-2">Monday to Friday from 8am to 5pm.</p>
                <a href="tel:+639175535723" className="text-primary-600 font-semibold text-lg hover:text-primary-700 transition-colors">
                  +63 917 553 5723
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="h-full animate-slide-in-right delay-300">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-200 hover:shadow-3xl transition-shadow duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="animate-fade-in-up delay-400">
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-slate-50"
                      placeholder="Type your full name *"
                    />
                  </div>

                  {/* Company Name */}
                  <div className="animate-fade-in-up delay-500">
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-slate-50 hover:border-primary-400"
                      placeholder="Type your company name *"
                    />
                  </div>

                  {/* Industry and Designation */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-600">
                    <div>
                      <label htmlFor="industry" className="block text-sm font-semibold text-slate-900 mb-2">
                        Industry <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="industry"
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-slate-50 hover:border-primary-400"
                        placeholder="Type your industry *"
                      />
                    </div>
                    <div>
                      <label htmlFor="designation" className="block text-sm font-semibold text-slate-900 mb-2">
                        Designation <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="designation"
                        name="designation"
                        required
                        value={formData.designation}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-slate-50 hover:border-primary-400"
                        placeholder="Type your designation *"
                      />
                    </div>
                  </div>

                  {/* Email and Mobile */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up delay-700">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-slate-50 hover:border-primary-400"
                        placeholder="Type your email address *"
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block text-sm font-semibold text-slate-900 mb-2">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        value={formData.mobile}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-slate-50 hover:border-primary-400"
                        placeholder="0912 345 6789 *"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="animate-fade-in-up delay-800">
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-slate-50 resize-none hover:border-primary-400"
                      placeholder="Type your message here *"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white font-bold py-4 rounded-lg hover:bg-primary-700 hover:scale-105 transition-all flex items-center justify-center shadow-lg hover:shadow-xl animate-scale-in delay-800"
                  >
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps Section - Full Width */}
      <section className="w-full h-[500px] relative overflow-hidden">
        <div className="animate-fade-in-up h-full">
          <iframe
            src="https://maps.google.com/maps?q=Raha+Sulayman+Building,+Benavidez+St,+Makati+City,+Philippines&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cerventech Office Location"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
