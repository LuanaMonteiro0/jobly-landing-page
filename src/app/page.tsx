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
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
              <div style={{ 
                marginBottom: '3rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <Image
                  src="/logo.png"
                  alt="Jobly Logo"
                  width={600}
                  height={200}
                  style={{ 
                    objectFit: 'contain'
                  }}
                  priority
                />
              </div>
              <h1 className={styles.heroTitle}>
                Find Your Dream Job with{' '}
                <span style={{ color: '#bae6fd' }}>Jobly</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Your centralized platform for discovering the perfect job opportunities. 
                Browse through detailed job descriptions and find your next career move.
              </p>
              <form onSubmit={handleSubmit} style={{ maxWidth: '28rem', margin: '2rem auto 0' }}>
                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  gap: '1rem',
                  padding: '1.5rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(4px)',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    style={{ 
                      width: '100%',
                      padding: '1rem 1.25rem',
                      borderRadius: '0.75rem',
                      background: 'rgba(255, 255, 255, 0.15)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      fontSize: '1rem',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    required
                  />
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '1rem 2rem',
                      background: 'white',
                      color: '#0284c7',
                      fontWeight: '600',
                      borderRadius: '0.75rem',
                      border: 'none',
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    Get Started
                    <ArrowRightIcon style={{ width: '1.25rem', height: '1.25rem' }} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className={styles.features}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <h2 className={styles.featuresTitle}>
              Why Choose <span style={{ color: '#0284c7' }}>Jobly</span>?
            </h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <MagnifyingGlassIcon style={{ width: '1.5rem', height: '1.5rem', color: '#0284c7' }} />
                </div>
                <h3 className={styles.featureTitle}>Easy Job Search</h3>
                <p className={styles.featureDescription}>
                  Find relevant job opportunities quickly with our advanced search and filtering system.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <DocumentTextIcon style={{ width: '1.5rem', height: '1.5rem', color: '#7c3aed' }} />
                </div>
                <h3 className={styles.featureTitle}>Detailed Descriptions</h3>
                <p className={styles.featureDescription}>
                  Get comprehensive job descriptions with all the information you need to make informed decisions.
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <BellIcon style={{ width: '1.5rem', height: '1.5rem', color: '#0284c7' }} />
                </div>
                <h3 className={styles.featureTitle}>Job Alerts</h3>
                <p className={styles.featureDescription}>
                  Never miss an opportunity with personalized job alerts based on your preferences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
            <h2 className={styles.ctaTitle}>
              Ready to Find Your Next Opportunity?
            </h2>
            <p className={styles.ctaSubtitle}>
              Join thousands of professionals who have found their dream jobs through Jobly.
            </p>
            <form onSubmit={handleSubmit} style={{ maxWidth: '28rem', margin: '2rem auto 0' }}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column',
                gap: '1rem',
                padding: '1.5rem',
                background: 'white',
                borderRadius: '1rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={{ 
                    width: '100%',
                    padding: '1rem 1.25rem',
                    borderRadius: '0.75rem',
                    background: '#f3f4f6',
                    border: '1px solid #e5e7eb',
                    color: '#1f2937',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  required
                />
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '1rem 2rem',
                    background: '#0284c7',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '0.75rem',
                    border: 'none',
                    fontSize: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  Join Now
                  <ArrowRightIcon style={{ width: '1.25rem', height: '1.25rem' }} />
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLinks}>
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <Image
                  src="/logo.png"
                  alt="Jobly Logo"
                  width={150}
                  height={50}
                  style={{ 
                    filter: 'brightness(0) invert(1)',
                    objectFit: 'contain'
                  }}
                  priority
                />
              </div>
              <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                Your trusted platform for finding the perfect job opportunity.
              </p>
            </div>
            <div>
              <h4 className={styles.footerSectionTitle}>Quick Links</h4>
              <ul className={styles.footerLinkList}>
                <li><a href="#" style={{ transition: 'color 0.3s' }}>About Us</a></li>
                <li><a href="#" style={{ transition: 'color 0.3s' }}>How it Works</a></li>
                <li><a href="#" style={{ transition: 'color 0.3s' }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className={styles.footerSectionTitle}>Connect</h4>
              <ul className={styles.footerLinkList}>
                <li><a href="#" style={{ transition: 'color 0.3s' }}>Twitter</a></li>
                <li><a href="#" style={{ transition: 'color 0.3s' }}>LinkedIn</a></li>
                <li><a href="#" style={{ transition: 'color 0.3s' }}>GitHub</a></li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #374151', marginTop: '2rem', paddingTop: '1.5rem', textAlign: 'center', fontSize: '0.875rem' }}>
            <p>&copy; 2024 Jobly. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
