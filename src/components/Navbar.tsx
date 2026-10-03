import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import type { ProductCategoryType } from '../types';
import './Navbar.css';

interface NavbarProps {
  onSelectCategory?: (category: ProductCategoryType) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectCategory, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const handleCategoryNav = (cat: ProductCategoryType) => {
    if (onSelectCategory) {
      onSelectCategory(cat);
    }
    closeMenu();
    const el = document.getElementById(cat);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="site-container header-inner">
        {/* Brand Wordmark */}
        <a href="#home" className="brand-wordmark" onClick={closeMenu}>
          <span className="brand-title">GAURI EXPORTS</span>
          <span className="brand-subtitle">Bathtubs & Brass Décor</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <button
                type="button"
                className="nav-link nav-link-btn"
                onClick={() => handleCategoryNav('bathtubs')}
              >
                Bathtubs
              </button>
            </li>
            <li>
              <button
                type="button"
                className="nav-link nav-link-btn"
                onClick={() => handleCategoryNav('brass-decor')}
              >
                Brass Décor
              </button>
            </li>
            <li>
              <a href="#about-us" className="nav-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact-us" className="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        {/* Action Button */}
        <div className="header-actions">
          <button
            type="button"
            className="btn btn-brass header-cta"
            onClick={onOpenQuote}
            aria-label="Request a Quote"
          >
            Request a Quote
            <ArrowUpRight size={15} aria-hidden="true" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-toggle"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-drawer ${mobileMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="site-container mobile-drawer-inner">
          <nav aria-label="Mobile Navigation">
            <ul className="mobile-nav-list">
              <li>
                <a href="#home" className="mobile-nav-link" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="mobile-nav-link mobile-nav-btn"
                  onClick={() => handleCategoryNav('bathtubs')}
                >
                  Bathtubs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="mobile-nav-link mobile-nav-btn"
                  onClick={() => handleCategoryNav('brass-decor')}
                >
                  Brass Décor
                </button>
              </li>
              <li>
                <a href="#about-us" className="mobile-nav-link" onClick={closeMenu}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact-us" className="mobile-nav-link" onClick={closeMenu}>
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          <div className="mobile-drawer-footer">
            <button
              type="button"
              className="btn btn-brass"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => {
                closeMenu();
                onOpenQuote();
              }}
            >
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

