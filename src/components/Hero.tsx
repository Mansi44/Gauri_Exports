import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { ProductCategoryType } from '../types';
import './Hero.css';

interface HeroProps {
  onSelectCategory: (category: ProductCategoryType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectCategory }) => {
  const [imageError, setImageError] = useState(false);

  const handleCategoryClick = (category: ProductCategoryType) => {
    onSelectCategory(category);
    const el = document.getElementById(category);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-heading">
      <div className="site-container hero-container">
        {/* Editorial Text Content */}
        <div className="hero-content">
          <span className="eyebrow">
            Gauri Exports • Luxury Metalware
          </span>

          <h1 id="hero-heading" className="hero-title">
            Crafted for <span className="title-italic">Distinctive</span> Spaces.
          </h1>

          <span className="accent-line" aria-hidden="true"></span>

          <p className="hero-description">
            We specialize in handcrafted freestanding copper and brass bathtubs alongside sculpted
            brass decorative pieces, bringing warmth and timeless elegance to bespoke residential
            and hospitality interiors.
          </p>

          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleCategoryClick('bathtubs')}
            >
              Explore Bathtubs
              <ArrowRight size={15} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="btn btn-outline-brass"
              onClick={() => handleCategoryClick('brass-decor')}
            >
              Explore Brass Décor
            </button>
          </div>
        </div>

        {/* Visual Showcase: Luxury Freestanding Bathtub in Elegant Interior */}
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            {!imageError ? (
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
                alt="Freestanding luxury bathtub in a sunlit architectural bathroom"
                className="hero-image"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="hero-fallback">
                <span className="fallback-symbol">GAURI EXPORTS</span>
                <span className="fallback-text">Luxury Bathtubs & Brass Décor</span>
              </div>
            )}
            <div className="hero-image-caption">
              <span className="caption-tag">Signature Collection</span>
              <span className="caption-text">Freestanding Solid Metal Bathtubs</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

