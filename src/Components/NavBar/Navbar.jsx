// Navbar.js
"use client"
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <Link href="/" className={styles.logo}>
            AMBE
          </Link>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <Link href="/services" className={styles.navLink}>Services</Link>
            <Link href="/portfolio" className={styles.navLink}>Portfolio</Link>
            <Link href="/contact" className={styles.navLink}>Contact</Link>
            <a href="/path-to-your-cv.pdf" download className={styles.downloadButton}>
              Download CV
            </a>
          </div>
          <button
            onClick={toggleMenu}
            className={styles.menuButton}
            aria-label="Toggle menu"
          >
            {!isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
        <Link href="/" className={styles.mobileNavLink}>Home</Link>
        <Link href="/about" className={styles.mobileNavLink}>About</Link>
        <Link href="/services" className={styles.mobileNavLink}>Services</Link>
        <Link href="/portfolio" className={styles.mobileNavLink}>Portfolio</Link>
        <Link href="/contact" className={styles.mobileNavLink}>Contact</Link>
        <a href="/path-to-your-cv.pdf" download className={`${styles.mobileNavLink} ${styles.downloadButton}`}>
          Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;