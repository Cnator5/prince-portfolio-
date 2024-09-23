'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement newsletter signup logic
    console.log('Subscribed:', email);
    setIsSubscribed(true);
    setTimeout(() => setIsSubscribed(false), 3000);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <CompanyInfo />
          <QuickLinks />
          <Services />
          <Newsletter 
            email={email} 
            setEmail={setEmail} 
            handleSubmit={handleSubmit}
            isSubscribed={isSubscribed}
          />
        </div>
        <ContactInfo />
        <Copyright />
      </div>
    </footer>
  );
};

const CompanyInfo = () => (
  <div className="space-y-6">
    <motion.h3 
      className="company-title"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      WeldMaster Douala
    </motion.h3>
    <p className="company-subtitle">Crafting Excellence in Metal</p>
    <div className="social-icons">
      <SocialIcon Icon={FaFacebook} href="#" />
      <SocialIcon Icon={FaTwitter} href="#" />
      <SocialIcon Icon={FaInstagram} href="#" />
      <SocialIcon Icon={FaLinkedin} href="#" />
    </div>
  </div>
);

const QuickLinks = () => (
  <div>
    <h4 className="section-title quick-links-title">Quick Links</h4>
    <ul className="space-y-3">
      <FooterLink href="/">Home</FooterLink>
      <FooterLink href="/services">Services</FooterLink>
      <FooterLink href="/portfolio">Portfolio</FooterLink>
      <FooterLink href="/about">About Us</FooterLink>
      <FooterLink href="/contact">Contact</FooterLink>
    </ul>
  </div>
);

const Services = () => (
  <div>
    <h4 className="section-title services-title">Our Services</h4>
    <ul className="space-y-3">
      <FooterLink href="/services/structural">Structural Welding</FooterLink>
      <FooterLink href="/services/pipe">Pipe Welding</FooterLink>
      <FooterLink href="/services/tig">TIG Welding</FooterLink>
      <FooterLink href="/services/mig">MIG Welding</FooterLink>
      <FooterLink href="/services/custom">Custom Fabrication</FooterLink>
    </ul>
  </div>
);

const Newsletter = ({ email, setEmail, handleSubmit, isSubscribed }) => (
  <div>
    <h4 className="section-title newsletter-title">Newsletter</h4>
    <p className="company-subtitle">Stay updated with our latest projects and offers</p>
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="newsletter-input"
        required
      />
      <motion.button
        type="submit"
        className="newsletter-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Subscribe
      </motion.button>
    </form>
    <AnimatePresence>
      {isSubscribed && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="success-message"
        >
          Thank you for subscribing!
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const ContactInfo = () => (
  <div className="contact-info">
    <ContactItem Icon={FaMapMarkerAlt} text="123 Welding Street, Douala, Cameroon" />
    <ContactItem Icon={FaPhone} text="+237 681 045 638" />
    <ContactItem Icon={FaEnvelope} text="info@weldmasterdouala.com" />
  </div>
);

const ContactItem = ({ Icon, text }) => (
  <div className="contact-item">
    <Icon />
    <span>{text}</span>
  </div>
);

const Copyright = () => (
  <div className="copyright">
    <p className="copyright-text">
      © {new Date().getFullYear()} WeldMaster Douala. All rights reserved.
    </p>
  </div>
);

const SocialIcon = ({ Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
    whileHover={{ scale: 1.2, rotate: 5 }}
  >
    <Icon />
  </motion.a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} passHref>
      <motion.span
        className="footer-link"
        whileHover={{ x: 5 }}
      >
        {children}
      </motion.span>
    </Link>
  </li>
);

export default Footer;