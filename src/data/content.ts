import type { ContactInfoPlaceholder, Product } from '../types';

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'bt-01',
    name: 'Aurelia Freestanding Brass Bathtub',
    category: 'bathtubs',
    categoryLabel: 'Bathtubs',
    tagline: 'Hand-finished solid brass freestanding bathtub',
    shortDescription:
      'A double-ended freestanding bathtub crafted from solid brass with gently curved rims and an ergonomic contour.',
    fullDescription:
      'The Aurelia bathtub features a generous soaking depth and a smooth contoured interior. Formed from sheet brass with hand-finished surfaces, it serves as a luxurious centerpiece for residential master suites and boutique hotel bathrooms.',
    material: 'Solid Brass',
    finishOptions: ['Polished Brass', 'Satin Brushed Brass', 'Antique Patina'],
    dimensionsPlaceholder: 'Approx. 1750 mm (L) × 800 mm (W) × 720 mm (H) [Customizable]',
    weightPlaceholder: 'Approx. 55 – 65 kg [Verification on order]',
    leadTimePlaceholder: 'Production upon order confirmation',
    imageUrl:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
    badge: 'Popular',
    featured: true,
  },
  {
    id: 'bt-02',
    name: 'Veritas Hammered Copper Bathtub',
    category: 'bathtubs',
    categoryLabel: 'Bathtubs',
    tagline: 'Deep soaking tub in hand-hammered pure copper',
    shortDescription:
      'A traditional bateau bathtub crafted from copper with a textured hammered exterior and excellent heat retention.',
    fullDescription:
      'The Veritas bathtub combines traditional metal hammering with a comfortable double-ended profile. Available with a raw or lacquered copper exterior and optional interior tinning or nickel finish.',
    material: 'Pure Copper',
    finishOptions: ['Natural Copper', 'Antique Patina', 'Nickel Interior / Copper Exterior'],
    dimensionsPlaceholder: 'Approx. 1700 mm (L) × 760 mm (W) × 690 mm (H) [Customizable]',
    weightPlaceholder: 'Approx. 48 – 58 kg [Verification on order]',
    leadTimePlaceholder: 'Production upon order confirmation',
    imageUrl:
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=80',
    badge: 'Signature',
    featured: true,
  },
  {
    id: 'bt-03',
    name: 'Serena Contemporary Brass Bathtub',
    category: 'bathtubs',
    categoryLabel: 'Bathtubs',
    tagline: 'Clean-lined architectural brass soaking tub',
    shortDescription:
      'A sleek, minimalist bathtub designed for modern luxury bathrooms with a grounded plinth base.',
    fullDescription:
      'The Serena bathtub offers a contemporary aesthetic with clean geometric lines, providing a warm metallic focus in modern architectural spaces. Custom dimensions and rim styles available on request.',
    material: 'Solid Brass',
    finishOptions: ['Satin Brushed Brass', 'Matte Bronze', 'Polished Brass'],
    dimensionsPlaceholder: 'Approx. 1650 mm (L) × 780 mm (W) × 600 mm (H) [Customizable]',
    weightPlaceholder: 'Approx. 52 – 62 kg [Verification on order]',
    leadTimePlaceholder: 'Production upon order confirmation',
    imageUrl:
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'bd-01',
    name: 'Elysian Hammered Brass Urn',
    category: 'brass-decor',
    categoryLabel: 'Brass Décor',
    tagline: 'Floor-standing hammered brass statement vessel',
    shortDescription:
      'A substantial decorative urn featuring rhythmic dimpled hammer marks, ideal for entrance halls and living spaces.',
    fullDescription:
      'Crafted from spun brass and textured by hand, the Elysian Urn brings warm reflections and artisan character to luxury interiors. Available in polished or aged antique finishes.',
    material: 'Solid Brass',
    finishOptions: ['Antique Burnished Brass', 'Polished Gold', 'Dark Bronze'],
    dimensionsPlaceholder: 'Approx. 450 mm (Dia) × 850 mm (H) [Custom sizes available]',
    weightPlaceholder: 'Approx. 12 – 15 kg',
    leadTimePlaceholder: 'Stock available / batch on order',
    imageUrl:
      'https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=1000&q=80',
    badge: 'Best Seller',
    featured: true,
  },
  {
    id: 'bd-02',
    name: 'Kallisto Architectural Brass Planters',
    category: 'brass-decor',
    categoryLabel: 'Brass Décor',
    tagline: 'Nested cylindrical planters in satin brushed brass',
    shortDescription:
      'Clean architectural planters designed with protective interior lining and warm brushed brass exterior.',
    fullDescription:
      'Designed for upscale hospitality lobbies, penthouses, and covered patios. Available in individual pieces or nested sets of 3 to suit diverse interior landscape designs.',
    material: 'Solid Brass with Clear Protective Coating',
    finishOptions: ['Brushed Brass', 'Matte Gold', 'Aged Patina'],
    dimensionsPlaceholder: 'Set of 3: Small (300mm), Medium (450mm), Large (600mm)',
    weightPlaceholder: 'Approx. 18 kg (Full Set)',
    leadTimePlaceholder: 'Stock available / batch on order',
    imageUrl:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    featured: true,
  },
  {
    id: 'bd-03',
    name: 'Vesper Geometric Brass Centerpiece',
    category: 'brass-decor',
    categoryLabel: 'Brass Décor',
    tagline: 'Faceted decorative bowl in hand-finished brass',
    shortDescription:
      'A low-profile sculptural brass bowl suited for dining tables, reception desks, and credenzas.',
    fullDescription:
      'Cast and hand-finished with subtle facet angles, the Vesper bowl catches natural light gracefully. Can serve as a fruit bowl, display dish, or standalone decorative art piece.',
    material: 'Cast Solid Brass',
    finishOptions: ['Hand-Polished Brass', 'Satin Brass', 'Dark Bronze'],
    dimensionsPlaceholder: 'Approx. 520 mm (L) × 340 mm (W) × 120 mm (H)',
    weightPlaceholder: 'Approx. 7.5 kg',
    leadTimePlaceholder: 'Standard stock / order on schedule',
    imageUrl:
      'https://images.unsplash.com/photo-1595514535415-dae92493f69e?auto=format&fit=crop&w=1000&q=80',
    badge: 'Artisan',
    featured: true,
  },
];

export const CONTACT_PLACEHOLDERS: ContactInfoPlaceholder = {
  division: 'Gauri Exports — Domestic & International Sales',
  email: '[Pending: export@gauriexports.com]',
  phonePlaceholder: '[Phone / WhatsApp: To be updated]',
  addressPlaceholder: '[Manufacturing & Export Office: India — Verification pending]',
};

