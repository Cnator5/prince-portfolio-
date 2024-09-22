// components/Footer.jsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
      className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      WeldMaster Douala
    </motion.h3>
    <p className="text-gray-400 text-lg">Crafting Excellence in Metal</p>
    <div className="flex space-x-4">
      <SocialIcon Icon={FaFacebook} href="#" />
      <SocialIcon Icon={FaTwitter} href="#" />
      <SocialIcon Icon={FaInstagram} href="#" />
      <SocialIcon Icon={FaLinkedin} href="#" />
    </div>
  </div>
);

const QuickLinks = () => (
  <div>
    <h4 className="text-2xl font-semibold mb-6 text-blue-400">Quick Links</h4>
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
    <h4 className="text-2xl font-semibold mb-6 text-green-400">Our Services</h4>
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
    <h4 className="text-2xl font-semibold mb-6 text-yellow-400">Newsletter</h4>
    <p className="text-gray-400 mb-4">Stay updated with our latest projects and offers</p>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="w-full px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-300"
        required
      />
      <motion.button
        type="submit"
        className="w-full px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-300"
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
          className="text-green-400 mt-2"
        >
          Thank you for subscribing!
        </motion.p>
      )}
    </AnimatePresence>
  </div>
);

const ContactInfo = () => (
  <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap justify-center space-x-8">
    <ContactItem Icon={FaMapMarkerAlt} text="123 Welding Street, Douala, Cameroon" />
    <ContactItem Icon={FaPhone} text="+237 681 045 638" />
    <ContactItem Icon={FaEnvelope} text="info@weldmasterdouala.com" />
  </div>
);

const ContactItem = ({ Icon, text }) => (
  <div className="flex items-center space-x-2 text-gray-400">
    <Icon />
    <span>{text}</span>
  </div>
);

const Copyright = () => (
  <div className="mt-8 text-center">
    <p className="text-gray-400">
      © {new Date().getFullYear()} WeldMaster Douala. All rights reserved.
    </p>
  </div>
);

const SocialIcon = ({ Icon, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-white transition duration-300"
    whileHover={{ scale: 1.2, rotate: 5 }}
  >
    <Icon size={24} />
  </motion.a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <Link href={href} passHref>
      <motion.span
        className="text-gray-400 hover:text-white transition duration-300 cursor-pointer inline-block"
        whileHover={{ x: 5 }}
      >
        {children}
      </motion.span>
    </Link>
  </li>
);

export default Footer;