import React, { useEffect, useState } from 'react';
import { X, Sparkles, SlidersHorizontal, Package, ShieldCheck, ArrowRight, Bath } from 'lucide-react';
import type { Product } from '../types';
import './ProductModal.css';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onEnquire: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onEnquire,
}) => {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-product-title"
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close product details"
        >
          <X size={20} />
        </button>

        <div className="modal-body">
          <div className="modal-gallery">
            {!imageError ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="modal-image"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="modal-fallback">
                {product.category === 'bathtubs' ? (
                  <Bath size={48} className="modal-fallback-icon" />
                ) : (
                  <Sparkles size={48} className="modal-fallback-icon" />
                )}
                <span>{product.name}</span>
              </div>
            )}
            {product.badge && (
              <span className="modal-badge">{product.badge}</span>
            )}
          </div>

          <div className="modal-details">
            <span className="eyebrow">
              {product.categoryLabel}
            </span>

            <h3 id="modal-product-title" className="modal-title font-serif">
              {product.name}
            </h3>

            <p className="modal-tagline">{product.tagline}</p>

            <span className="accent-line" aria-hidden="true"></span>

            <p className="modal-description">{product.fullDescription}</p>

            {/* Spec Sheet */}
            <div className="modal-specs">
              <h4 className="specs-heading">Product Overview</h4>

              <div className="spec-row">
                <span className="spec-label">
                  <ShieldCheck size={16} aria-hidden="true" />
                  Material:
                </span>
                <span className="spec-value">{product.material}</span>
              </div>

              <div className="spec-row">
                <span className="spec-label">
                  <SlidersHorizontal size={16} aria-hidden="true" />
                  Available Finishes:
                </span>
                <div className="finishes-list">
                  {product.finishOptions.map((finish, i) => (
                    <span key={i} className="finish-pill">
                      {finish}
                    </span>
                  ))}
                </div>
              </div>

              <div className="spec-row">
                <span className="spec-label">
                  <Package size={16} aria-hidden="true" />
                  Dimensions:
                </span>
                <span className="spec-value spec-placeholder">
                  {product.dimensionsPlaceholder}
                </span>
              </div>
            </div>

            <div className="modal-actions">
              <button
                type="button"
                className="btn btn-brass"
                onClick={() => onEnquire(product)}
              >
                Request a Quote for This Product
                <ArrowRight size={15} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
