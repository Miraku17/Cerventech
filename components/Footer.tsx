'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <div className="relative w-48 h-16">
                <Image
                  src="/logo.png"
                  alt="Cerventech Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              We are Innovative people. Expert IT Outsourced for your business. Delivering cost-effective managed services with advanced technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link href="/career" className="text-slate-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Software Development</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Cloud Infrastructure</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Data Analytics</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">AI Solutions</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">IT Consultancy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-primary-500" />
                <span>123 Innovation Drive,<br />Tech City, TC 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone size={20} className="flex-shrink-0 text-primary-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail size={20} className="flex-shrink-0 text-primary-500" />
                <span>hello@cerventech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Cerventech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
