import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { AboutUs } from './components/AboutUs';
import { EnquirySection } from './components/EnquirySection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import type { Product, ProductCategoryType } from './types';
import './App.css';

export function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProductCategoryType | 'all'>('all');
  const [enquiryPrefill, setEnquiryPrefill] = useState<{
    productName: string;
    category: ProductCategoryType | 'both' | 'custom';
  }>({
    productName: '',
    category: 'both',
  });

  const handleOpenQuote = (
    productName = '',
    category: ProductCategoryType | 'both' | 'custom' = 'both'
  ) => {
    setEnquiryPrefill({ productName, category });
    const quoteEl = document.getElementById('quote');
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (category: ProductCategoryType) => {
    setActiveCategory(category);
    const catEl = document.getElementById(category) || document.getElementById('catalogue');
    if (catEl) {
      catEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleEnquireProduct = (product: Product) => {
    setSelectedProduct(null);
    handleOpenQuote(product.name, product.category);
  };

  return (
    <div className="app-wrapper">
      {/* 1. Simplified Responsive Header */}
      <Navbar
        onSelectCategory={handleSelectCategory}
        onOpenQuote={() => handleOpenQuote()}
      />

      <main>
        {/* 2. Simplified Hero Section */}
        <Hero onSelectCategory={handleSelectCategory} />

        {/* 3. Streamlined Product Catalogue with Working Filters */}
        <FeaturedProducts
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onViewDetails={handleViewDetails}
          onEnquireProduct={handleEnquireProduct}
        />

        {/* 4. Concise About Us Section */}
        <AboutUs onOpenQuote={() => handleOpenQuote()} />

        {/* 5. Simplified & Validated Quote Form */}
        <EnquirySection
          key={enquiryPrefill.productName || 'quote-form'}
          initialProductName={enquiryPrefill.productName}
          initialCategory={enquiryPrefill.category}
        />
      </main>

      {/* 6. Clean Footer with Contact Placeholders */}
      <Footer
        onSelectCategory={handleSelectCategory}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Accessible Product Specification Modal */}
      <ProductModal
        key={selectedProduct?.id || 'modal'}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onEnquire={handleEnquireProduct}
      />
    </div>
  );
}

export default App;
