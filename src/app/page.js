"use client"
import Hero from "@/Components/Hero/Hero";
import Image from "next/image";
import ServicesSection from './../Components/Services/Services';
import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from "next/link";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  return (
    <div className={`min-h-screen ${darkMode ? 'dark-mode' : ''}`}>
      <Head>
        <title>Expert Welding Services - Douala, Cameroon</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js" async/>
      </Head>

      <main>
        {/* Navbar and Hero sections (already built) */}
        
      <Hero/>
      <ServicesSection/>

       {/* About Section */}
<section id="about" className="py-20 transition-colors duration-300 bg-gradient-to-b from-gray-100 to-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">About Me - Your Expert Welder</h2>
    <div className="flex flex-wrap items-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="relative w-full h-64 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-lg transform rotate-3 transition-all duration-300 hover:rotate-6"></div>
          <img src="/images/WhatsApp Image 2024-09-22 at 18.48.47_ea642817.jpg?random=1" alt="Master Welder at Work" className="relative z-10 rounded-lg w-full h-full object-cover shadow-2xl" />
        </div>
      </div>
      <div className="w-full md:w-1/2 md:pl-12">
        <h3 className="text-2xl font-semibold mb-4 text-indigo-600">Certified Master Welder</h3>
        <p className="text-lg mb-4 text-gray-700">
          With comprehensive welding qualifications from prestigious institutions in Limbe and Douala, I bring unparalleled expertise to every project. My extensive training covers all aspects of welding, ensuring I can handle any challenge with precision and skill.
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Certified in TIG, MIG, and Stick welding</li>
          <li>Specialized in structural, pipe, and aluminum welding</li>
          <li>Proficient in blueprint reading and CAD interpretation</li>
          <li>Expert in both industrial and artistic welding applications</li>
        </ul>
        <p className="text-lg mb-4 text-gray-700">
          My dedication to continuous learning and staying updated with the latest welding technologies sets me apart in the industry. I combine traditional craftsmanship with modern techniques to deliver exceptional results.
        </p>
        <p className="text-lg font-semibold text-gray-800">
          Whether you need precision welding for critical infrastructure or creative metal fabrication for custom projects, I have the skills, experience, and passion to exceed your expectations.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Projects Section */}
<section id="projects" className="py-20 transition-colors duration-300 bg-gradient-to-b from-gray-100 to-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Masterful Welding Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: 'Industrial Steel Framework',
          image: 'https://image.pollinations.ai/prompt/Industrial%20steel%20framework%20welding%20project%20sparks%20flying%20professional%20welder%20at%20work?width=600&height=400&nologo=true',
          description: 'Engineered and welded a robust steel framework for a major industrial complex, ensuring structural integrity and safety.'
        },
        {
          name: 'Artistic Metal Sculpture',
          image: 'https://image.pollinations.ai/prompt/Intricate%20metal%20sculpture%20welding%20artistic%20design%20craftsmanship?width=600&height=400&nologo=true',
          description: 'Created a stunning metal sculpture for a public park, showcasing both artistic vision and precise welding techniques.'
        },
        {
          name: 'High-Pressure Pipeline Repair',
          image: 'https://image.pollinations.ai/prompt/Welding%20high-pressure%20pipeline%20repair%20precision%20work%20industrial%20setting?width=600&height=400&nologo=true',
          description: 'Successfully completed emergency repairs on a high-pressure pipeline, demonstrating expertise in critical welding situations.'
        },
        {
          name: 'Custom Aluminum Boat Hull',
          image: 'https://image.pollinations.ai/prompt/Welding%20custom%20aluminum%20boat%20hull%20marine%20grade%20craftsmanship?width=600&height=400&nologo=true',
          description: 'Fabricated a custom aluminum boat hull, showcasing skills in lightweight metal welding for marine applications.'
        },
        {
          name: 'Ongoing: Skyscraper Steel Framing',
          image: 'https://image.pollinations.ai/prompt/Welding%20skyscraper%20steel%20framing%20construction%20site%20high-rise%20building?width=600&height=400&nologo=true',
          description: 'Currently working on the steel framing for a new skyscraper, applying advanced welding techniques at great heights.'
        },
        {
          name: 'Future Project: Aerospace Components',
          image: 'https://image.pollinations.ai/prompt/Precision%20welding%20aerospace%20components%20high-tech%20laboratory%20setting?width=600&height=400&nologo=true',
          description: 'Aspiring to work on aerospace components, pushing the boundaries of precision welding for critical applications.'
        }
      ].map((project, index) => (
        <div key={index} className="project-card rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 bg-white">
          <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2 text-indigo-600">{project.name}</h3>
            <p className="text-base mb-4 text-gray-700">{project.description}</p>
            {/* <Link href="#" className="inline-block px-4 py-2 rounded-full bg-indigo-500 text-white font-semibold transition-colors duration-300 hover:bg-indigo-600">View Details</Link> */}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      </main>

      <style jsx>{`
        :root {
          --bg-color: ${darkMode ? '#1a1a2e' : '#f0f0f5'};
          --primary-color: ${darkMode ? '#16213e' : '#e0e0e6'};
          --secondary-color: ${darkMode ? '#0f3460' : '#d1d1d6'};
          --accent-color: ${darkMode ? '#e94560' : '#ff6b6b'};
          --text-color: ${darkMode ? '#ffffff' : '#333333'};
        }

        body {
          background-color: var(--bg-color);
          color: var(--text-color);
          transition: background-color 0.3s, color 0.3s;
        }

        .service-card, .project-card {
          background-color: var(--primary-color);
        }

        .service-card:hover, .project-card:hover {
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        input, textarea, select {
          background-color: var(--secondary-color);
          color: var(--text-color);
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .service-card {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <script dangerouslySetInnerHTML={{__html: `
        // Initialize GSAP animations
        gsap.from('#about image', { duration: 1, opacity: 0, y: 50, ease: 'power3.out' });
        gsap.from('.service-card', { duration: 0.8, opacity: 0, y: 30, stagger: 0.1, ease: 'power3.out' });
        gsap.from('.project-card', { duration: 0.8, opacity: 0, y: 30, stagger: 0.1, ease: 'power3.out' });
      `}} />
    </div>
  )
}
