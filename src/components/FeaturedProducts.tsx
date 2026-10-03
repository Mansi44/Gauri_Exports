import React, { useState } from 'react';
import { Eye, MessageSquare, Bath, Sparkles } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/content';
import type { Product, ProductCategoryType } from '../types';
import './FeaturedProducts.css';

interface FeaturedProductsProps {
  activeCategory: ProductCategoryType | 'all';
  onSelectCategory: (category: ProductCategoryType | 'all') => void;
  onViewDetails: (product: Product) => void;
  onEnquireProduct: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  activeCategory,
  onSelectCategory,
  onViewDetails,
  onEnquireProduct,
}) => {
  // Track image load errors by product ID so we can display a clean SVG fallback
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const filteredProducts =
    activeCategory === 'all'
      ? PRODUCTS_DATA
      : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="catalogue" className="catalogue-section" aria-labelledby="catalogue-heading">
      {/* Anchor targets for direct navigation */}
      <div id="bathtubs" className="scroll-anchor" aria-hidden="true"></div>
      <div id="brass-decor" className="scroll-anchor" aria-hidden="true"></div>

      <div className="site-container">
        {/* Section Header */}
        <div className="catalogue-header">
          <span className="eyebrow">Product Catalogue</span>
          <h2 id="catalogue-heading" className="catalogue-title">
            Our Handcrafted Collections
          </h2>
          <span className="accent-line accent-line-center" aria-hidden="true"></span>
          <p className="catalogue-subtitle">
            Explore our freestanding metal bathtubs and decorative brass objects. Custom dimensions,
            rim styles, and finishes are available upon inquiry.
          </p>

          {/* Working Category Filters */}
          <div className="catalogue-filters" role="tablist" aria-label="Filter products by category">
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'all'}
              className={`filter-tab ${activeCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => onSelectCategory('all')}
            >
              All Products ({PRODUCTS_DATA.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'bathtubs'}
              className={`filter-tab ${activeCategory === 'bathtubs' ? 'is-active' : ''}`}
              onClick={() => onSelectCategory('bathtubs')}
            >
              Bathtubs
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeCategory === 'brass-decor'}
              className={`filter-tab ${activeCategory === 'brass-decor' ? 'is-active' : ''}`}
              onClick={() => onSelectCategory('brass-decor')}
            >
              Brass Décor
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="catalogue-grid">
          {filteredProducts.map((product) => {
            const hasImageFailed = failedImages[product.id];

            return (
              <article key={product.id} className="catalog-card">
                {/* Image Media with Fallback */}
                <div
                  className="card-media"
                  onClick={() => onViewDetails(product)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View details for ${product.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onViewDetails(product);
                    }
                  }}
                >
                  {!hasImageFailed ? (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="card-image"
                      loading="lazy"
                      onError={() => handleImageError(product.id)}
                    />
                  ) : (
                    <div className="card-image-fallback">
                      {product.category === 'bathtubs' ? (
                        <Bath size={36} className="fallback-icon" />
                      ) : (
                        <Sparkles size={36} className="fallback-icon" />
                      )}
                      <span className="fallback-category">{product.categoryLabel}</span>
                    </div>
                  )}

                  {product.badge && <span className="card-badge">{product.badge}</span>}

                  <div className="card-media-overlay">
                    <span className="quick-view-hint">
                      <Eye size={15} aria-hidden="true" />
                      View Details
                    </span>
                  </div>
                </div>

                {/* Card Content with Flex Alignment */}
                <div className="card-body">
                  <div className="card-meta">
                    <span className="card-category-label">{product.categoryLabel}</span>
                    <span className="card-material-tag">{product.material}</span>
                  </div>

                  <h3 className="card-title font-serif">
                    <button
                      type="button"
                      className="card-title-link"
                      onClick={() => onViewDetails(product)}
                    >
                      {product.name}
                    </button>
                  </h3>

                  <p className="card-desc">{product.shortDescription}</p>

                  <div className="card-finishes-preview">
                    <span className="finishes-label">Available Finishes:</span>
                    <span className="finishes-text">{product.finishOptions.join(', ')}</span>
                  </div>

                  {/* Card Actions pinned to bottom */}
                  <div className="card-actions">
                    <button
                      type="button"
                      className="btn btn-outline card-action-btn"
                      onClick={() => onViewDetails(product)}
                      aria-label={`View specifications for ${product.name}`}
                    >
                      <Eye size={14} aria-hidden="true" />
                      View Details
                    </button>
                    <button
                      type="button"
                      className="btn btn-brass card-action-btn"
                      onClick={() => onEnquireProduct(product)}
                      aria-label={`Inquire about ${product.name}`}
                    >
                      <MessageSquare size={14} aria-hidden="true" />
                      Inquire
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

