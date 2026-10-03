import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_PLACEHOLDERS } from '../data/content';
import './Footer.css';

interface FooterProps {
  onSelectCategory?: (category: 'bathtubs' | 'brass-decor') => void;
  onOpenQuote?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (category: 'bathtubs' | 'brass-decor') => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    const el = document.getElementById(category);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact-us" className="site-footer">
      <div className="site-container footer-main">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col-brand">
            <a href="#home" className="footer-wordmark">
              <span className="footer-title">GAURI EXPORTS</span>
              <span className="footer-subtitle">Bathtubs & Brass Décor</span>
            </a>

            <p className="footer-brand-desc">
              Manufacturer and exporter of handcrafted copper and brass freestanding bathtubs,
              architectural planters, and decorative brass objects for residential and hospitality
              spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li>
                <a href="#home" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link footer-btn-link"
                  onClick={() => handleCategoryClick('bathtubs')}
                >
                  Bathtubs
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link footer-btn-link"
                  onClick={() => handleCategoryClick('brass-decor')}
                >
                  Brass Décor
                </button>
              </li>
              <li>
                <a href="#about-us" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="footer-link footer-btn-link"
                  onClick={onOpenQuote}
                >
                  Request a Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Core Metal Offerings */}
          <div className="footer-col">
            <h4 className="footer-col-title">Products & Finishes</h4>
            <ul className="footer-links-list">
              <li>
                <span className="footer-spec-item">Solid Brass Bathtubs</span>
              </li>
              <li>
                <span className="footer-spec-item">Hand-Hammered Copper Tubs</span>
              </li>
              <li>
                <span className="footer-spec-item">Architectural Brass Planters</span>
              </li>
              <li>
                <span className="footer-spec-item">Decorative Brass Urns & Vessels</span>
              </li>
              <li>
                <span className="footer-spec-item">Custom Sizing & Patinas</span>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Mail size={16} className="footer-contact-icon" aria-hidden="true" />
                <span className="footer-contact-text">{CONTACT_PLACEHOLDERS.email}</span>
              </div>

              <div className="footer-contact-item">
                <Phone size={16} className="footer-contact-icon" aria-hidden="true" />
                <span className="footer-contact-text">{CONTACT_PLACEHOLDERS.phonePlaceholder}</span>
              </div>

              <div className="footer-contact-item">
                <MapPin size={16} className="footer-contact-icon" aria-hidden="true" />
                <span className="footer-contact-text">{CONTACT_PLACEHOLDERS.addressPlaceholder}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back-to-top */}
        <div className="footer-bottom">
          <div className="footer-legal">
            <p className="copyright-text">
              © 2026 Gauri Exports. All rights reserved.
            </p>
            <p className="disclaimer-text">
              Note: Contact details and product specifications shown are placeholders pending final
              business verification.
            </p>
          </div>

          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};

