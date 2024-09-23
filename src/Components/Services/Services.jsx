'use client'

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  // ... (services array remains unchanged)
  {
    id: 1,
    title: 'Structural Welding',
    description: 'Expert structural welding for robust and durable constructions. Specializing in high-rise buildings and industrial facilities.',
    // icon: 'M3 6l5 5 5-5h-10zm0 12h10l-5-5-5 5zm18-6l-5-5v10l5-5z',
    image: 'https://image.pollinations.ai/prompt/Structural%20welding%20high-rise%20building%20construction%20site%20sparks%20flying?width=800&height=600&nologo=true'
  },
  {
    id: 2,
    title: 'Pipe Welding',
    description: 'Precision pipe welding for oil & gas, chemical, and power generation industries. Certified in multiple welding processes.',
    // icon: 'M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L6.04 7.5 12 10.85l5.96-3.35L12 4.15z',
    image: 'https://image.pollinations.ai/prompt/Pipe%20welding%20industrial%20setting%20precision%20work?width=800&height=600&nologo=true'
  },
  {
    id: 3,
    title: 'Metal Fabrication',
    description: 'Custom metal fabrication to bring your unique designs to life. From concept to finished product, we deliver excellence.',
    // icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h-2V7h4v10z',
    image: 'https://image.pollinations.ai/prompt/Metal%20fabrication%20workshop%20custom%20designs%20welding%20equipment?width=800&height=600&nologo=true'
  },
  {
    id: 4,
    title: 'Aluminum Welding',
    description: 'Specialized aluminum welding for aerospace, automotive, and marine applications. Expertise in handling thin materials.',
    // icon: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z',
    image: 'https://image.pollinations.ai/prompt/Aluminum%20welding%20aerospace%20component%20precision%20work?width=800&height=600&nologo=true'
  },
  {
    id: 5,
    title: 'TIG Welding',
    description: 'High-precision TIG welding for clean and strong welds on various metals. Ideal for critical applications in multiple industries.',
    // icon: 'M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z',
    image: 'https://image.pollinations.ai/prompt/TIG%20welding%20high%20precision%20work%20clean%20welds?width=800&height=600&nologo=true'
  },
  {
    id: 6,
    title: 'Underwater Welding',
    description: 'Specialized underwater welding for offshore structures, ships, and underwater pipelines. Certified commercial diver-welder.',
    // icon: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm3-8h-2V7h-2v4H9v2h2v4h2v-4h2v-2z',
    image: 'https://image.pollinations.ai/prompt/Underwater%20welding%20offshore%20structure%20diver%20welder?width=800&height=600&nologo=true'
  }
];


const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center bg-white">
        {/* <svg className="w-12 h-12 text-indigo-600 mb-4" viewBox="0 0 24 24" fill="currentColor">
          <path d={service.icon} />
        </svg> */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
        <p className="text-gray-800 text-center mb-4 text-sm md:text-base">{service.description}</p>
        <motion.div 
          className="relative w-full h-48 rounded-lg overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={service.image}
            alt={service.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section className="relative min-h-screen py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center text-black mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Expert Welding Services
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}