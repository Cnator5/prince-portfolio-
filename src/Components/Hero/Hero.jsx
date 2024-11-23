'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [windowHeight, setWindowHeight] = useState('100vh')
  const [displayText, setDisplayText] = useState('')
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  const fullText = "With over 5 years of experience, I specialize in precision welding for industrial and artistic projects. Based in Cameroon, I bring creativity and technical expertise to every job."

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      setWindowHeight(`${window.innerHeight}px`)
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 60 // Adjust typing speed (milliseconds per character)
    
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setIsTypingComplete(true)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  }

  const cursorVariants = {
    blink: {
      opacity: [0, 1],
      transition: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  }

  return (
    <section className={styles.heroSection} style={{ height: windowHeight, minHeight: '600px' }}>
      <div className={styles.backgroundGradient}>
        <div className={styles.yellowCircle}></div>
        <div className={styles.indigoCircle}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div 
            className={styles.textContent}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className={styles.title}>
              Hello, I am<br />
              <span className={styles.highlight}>Lambi Princewill</span><br />
              a Professional Welder
            </h1>
            <p className={styles.description}>
              {displayText}
              {!isTypingComplete && (
                <motion.span
                  variants={cursorVariants}
                  animate="blink"
                  className={styles.typingCursor}
                >|</motion.span>
              )}
            </p>
            <div className={styles.buttonGroup}>
              <motion.button 
                className={styles.primaryButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button 
                className={styles.secondaryButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoPlaying(true)}
              >
                Watch Intro
              </motion.button>
            </div>
            <div className={styles.clientSection}>
              <span className={styles.clientText}>500+ Satisfied Clients</span>
              <div className={styles.clientImages}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image key={i} src={`https://picsum.photos/20/20?random=${i}`} alt={`Client ${i}`} width={20} height={20} className={styles.clientImage} />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div 
            className={styles.imageContent}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={styles.imageWrapper}>
              <div className={styles.imageBackground}></div>
              <Image src="/images/weldmaster.png" alt="Lambi Princewill" width={400} height={300} className={styles.welderImage} />
            </div>
            <motion.div 
              className={styles.experienceBadge}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}
            >
              5+ Years Experience
            </motion.div>
          </motion.div>
        </div>
      </div>

      {isVideoPlaying && (
        <motion.div 
          className={styles.videoOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className={styles.videoWrapper}>
            <iframe 
              width="280" 
              height="158" 
              // src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Intro Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <button 
              className={styles.closeButton}
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