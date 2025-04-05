'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon, BriefcaseIcon, DocumentTextIcon, BellIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import styles from "./page.module.css";

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
          <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:20px_20px]" />
          <div className="container mx-auto px-4 py-20 relative">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Find Your Dream Job with{' '}
                <span className="text-primary-200">Jobly</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-100">
                Your centralized platform for discovering the perfect job opportunities. 
                Browse through detailed job descriptions and find your next career move.
              </p>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex gap-3 p-2 bg-white/10 backdrop-blur-sm rounded-xl">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center gap-2"
                  >
                    Get Started
                    <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              Why Choose <span className="text-primary-600">Jobly</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MagnifyingGlassIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Easy Job Search</h3>
                <p className="text-gray-600 leading-relaxed">
                  Find relevant job opportunities quickly with our advanced search and filtering system.
                </p>
              </div>
              <div className="group p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up [animation-delay:200ms]">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <DocumentTextIcon className="h-6 w-6 text-secondary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Detailed Descriptions</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get comprehensive job descriptions with all the information you need to make informed decisions.
                </p>
              </div>
              <div className="group p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up [animation-delay:400ms]">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BellIcon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Job Alerts</h3>
                <p className="text-gray-600 leading-relaxed">
                  Never miss an opportunity with personalized job alerts based on your preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Ready to Find Your Next Opportunity?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who have found their dream jobs through Jobly.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3 p-2 bg-white rounded-xl shadow-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 flex items-center gap-2"
                >
                  Join Now
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Jobly</h3>
              <p className="text-gray-400 text-sm">
                Your trusted platform for finding the perfect job opportunity.
              </p>
            </div>
            <div>
              <h4 className="text-base font-semibold text-white mb-3">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-semibold text-white mb-3">Connect</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
            <p>&copy; 2024 Jobly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
