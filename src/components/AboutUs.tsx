import React from 'react';
import { Bath, Sparkles, SlidersHorizontal, ArrowRight } from 'lucide-react';
import './AboutUs.css';

interface AboutUsProps {
  onOpenQuote: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenQuote }) => {
  return (
    <section id="about-us" className="about-section" aria-labelledby="about-heading">
      <div className="site-container">
        <div className="about-header">
          <span className="eyebrow">Company & Craft</span>
          <h2 id="about-heading" className="about-title">
            About Gauri Exports
          </h2>
          <span className="accent-line accent-line-center" aria-hidden="true"></span>
          <p className="about-subtitle">
            Gauri Exports manufactures and supplies handcrafted metal bathtubs and decorative brass
            items for luxury residential and hospitality projects worldwide.
          </p>
        </div>

        <div className="about-content-grid">
          {/* Main narrative */}
          <div className="about-story-card">
            <h3 className="story-heading font-serif">
              Metal Artistry with Functional Purpose
            </h3>
            <p className="story-text">
              We focus on two core product lines: luxury freestanding bathtubs in copper and brass,
              and decorative brass objects designed to bring warmth and texture into contemporary
              interiors.
            </p>
            <p className="story-text">
              Each piece is shaped by experienced artisans using traditional metal-forming,
              hammering, and surface-finishing techniques. We work closely with architects,
              interior designers, and commercial buyers to deliver pieces that fit precise project
              specifications.
            </p>

            <div className="about-cta-wrap">
              <button
                type="button"
                className="btn btn-outline-brass"
                onClick={onOpenQuote}
              >
                Discuss a Custom Project
                <ArrowRight size={15} aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Three Focused Value Cards */}
          <div className="about-highlights-col">
            <div className="highlight-card">
              <div className="highlight-icon-wrap">
                <Bath size={20} aria-hidden="true" />
              </div>
              <div>
                <h4 className="highlight-card-title">Freestanding Metal Bathtubs</h4>
                <p className="highlight-card-desc">
                  Solid brass and copper bathtubs built with generous soaking depth, comfortable
                  contours, and natural thermal retention.
                </p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon-wrap">
                <Sparkles size={20} aria-hidden="true" />
              </div>
              <div>
                <h4 className="highlight-card-title">Handcrafted Brass Décor</h4>
                <p className="highlight-card-desc">
                  Architectural planters, statement floor vessels, and table centerpieces with
                  burnished, brushed, or antiqued finishes.
                </p>
              </div>
            </div>

            <div className="highlight-card">
              <div className="highlight-icon-wrap">
                <SlidersHorizontal size={20} aria-hidden="true" />
              </div>
              <div>
                <h4 className="highlight-card-title">Custom Sizes & Finishes</h4>
                <p className="highlight-card-desc">
                  We accommodate custom dimensions, rim variations, and tailored surface treatments
                  to match client drawings and room layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

