'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }

  return (
    <section className="relative overflow-hidden h-[80vh] flex items-center pt-20 pb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-indigo-800">
        <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-yellow-400 rounded-full opacity-30 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-indigo-400 rounded-full opacity-30 transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 pt-60 text-sm relative z-10 text-white">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-6 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-3xl font-bold mb-3 leading-tight">
              Hello, I am<br />
              <span className="text-yellow-400">Lambi Princewill</span><br />
              a Professional Welder
            </h1>
            <p className="mb-4 text-sm text-indigo-200">
              With over 8 years of experience, I specialize in precision welding for industrial and artistic projects. Based in Cameroon, I bring creativity and technical expertise to every job.
            </p>
            <div className="flex space-x-3 mb-4">
              <motion.button 
                className="bg-yellow-400 text-indigo-900 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button 
                className="border border-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white hover:text-indigo-600 transition duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoPlaying(true)}
              >
                Watch Intro
              </motion.button>
            </div>
            <div className="flex items-center">
              <span className="text-xs mr-2">500+ Satisfied Clients</span>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image key={i} src={`https://picsum.photos/20/20?random=${i}`} alt={`Client ${i}`} width={20} height={20} className="rounded-full border-2 border-white" />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="md:w-1/2 relative flex flex-col items-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-full overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1/2 bg-gray z-0"></div>
              <Image src="/images/welder.png" alt="Lambi Princewill" width={300} height={300} className="relative z-10 md:px-8 h-300" />
            </div>
            <motion.div 
              className="absolute top-2 right-2 bg-yellow-400 text-indigo-900 px-3 py-1 rounded-full text-xs font-semibold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
            >
              8+ Years Experience
            </motion.div>
          </motion.div>
        </div>
      </div>

      {isVideoPlaying && (
        <motion.div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-white p-3 rounded-lg">
            <iframe 
              width="280" 
              height="158" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Intro Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <button 
              className="mt-3 bg-indigo-600 text-white px-3 py-1 rounded text-sm"
              onClick={() => setIsVideoPlaying(false)}
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default Hero