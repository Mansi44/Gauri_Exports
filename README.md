# Gauri Exports — Official Web Portal

A refined, high-performance web platform for **Gauri Exports**, specializing in luxury freestanding bathtubs (copper and brass) and handcrafted decorative brass objects for residential and hospitality interiors.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool & Bundler**: [Vite](https://vite.dev/)
- **Styling**: Modern CSS with CSS Custom Properties, Flexbox, CSS Grid, Backdrop Filters, and Viewport clamping (No heavy CSS frameworks).
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts pairing — *Cormorant Garamond* (Serif) & *Plus Jakarta Sans* (Sans-serif).

---

## 📁 Directory Structure

The project is structured directly at the root of `Gauri_Exports` without nested directories:

```text
Gauri_Exports/
├── public/                     # Static assets
├── src/                        # Application source code
│   ├── components/             # Reusable UI components
│   │   ├── AboutUs.tsx         # Concise company overview & core offerings
│   │   ├── AboutUs.css
│   │   ├── EnquirySection.tsx  # Simplified quotation form with validation & mailto
│   │   ├── EnquirySection.css
│   │   ├── FeaturedProducts.tsx# Product catalogue with working category filters
│   │   ├── FeaturedProducts.css
│   │   ├── Footer.tsx          # Navigation, finishes & contact placeholders
│   │   ├── Footer.css
│   │   ├── Hero.tsx            # Simplified hero with clear headline & category CTAs
│   │   ├── Hero.css
│   │   ├── Navbar.tsx          # Simplified header (Home, Bathtubs, Brass Décor, About Us, Contact Us)
│   │   ├── Navbar.css
│   │   ├── ProductModal.tsx    # Accessible product detail modal with image fallback
│   │   └── ProductModal.css
│   ├── data/
│   │   └── content.ts          # Verified catalog data & honest placeholders
│   ├── types/
│   │   └── index.ts            # Strict TypeScript interfaces
│   ├── App.css                 # Base application shell styles
│   ├── App.tsx                 # Root application state & composition
│   ├── index.css               # Luxury design system tokens, typography, resets & focus states
│   └── main.tsx                # Vite entry point
├── index.html                  # HTML head with fonts, SEO meta & title
├── package.json                # Dependencies and script definitions
├── tsconfig.app.json           # TypeScript frontend configuration
├── tsconfig.json               # Root TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation & progress tracking
```

---

## 🚀 Available Scripts

In the project root, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Runs TypeScript type checking (`tsc -b`) and bundles the app for production in `dist/`. |
| `npm run preview` | Locally previews the production build output. |
| `npm run lint` | Runs Oxlint to check code quality and rules. |

---

## 📝 Review & Refinement Milestones

1. **Header Simplified**: Updated navigation to standard, accessible labels (**Home**, **Bathtubs**, **Brass Décor**, **About Us**, **Contact Us**, and **Request a Quote**). Removed confusing labels like "Creations" and "Artisanship".
2. **Hero Section Clarified**: Adopted clear headline *"Crafted for Distinctive Spaces."*, short description, and direct category jump buttons (*Explore Bathtubs* and *Explore Brass Décor*). Removed dense technical jargon and repetitive trust banners.
3. **Product Catalogue Fixed**:
   - Fixed broken/blank image areas with automatic fallback handling.
   - Enforced fixed aspect ratios (`4/3`) and `object-fit: cover`.
   - Balanced card heights using CSS Grid and flex alignment across rows.
   - Working category tabs for **All Products**, **Bathtubs**, and **Brass Décor**.
   - Working **View Details** modal and quick **Inquire** action prefilling the quote form.
4. **Page Flow Streamlined**: Consolidated company information into a dedicated, concise **About Us** section. Removed repetitive split-category showcases and redundant vertical scrolling.
5. **Quote Form Simplified & Transparent**:
   - Required fields: Name, Email, Category, Quantity, Message.
   - Optional fields: Company, Country, Specific product reference.
   - Clear validation and error state indicators.
   - Honest developer notice indicating prototype preview mode and identifying backend/email integrations needed (e.g. Formspree, EmailJS, custom API).
   - Added working `mailto:` action allowing customers to immediately dispatch their inquiry via their local email client.
6. **Accessibility & Interactions**:
   - Added global high-contrast `:focus-visible` ring.
   - Semantic ARIA attributes on modals (`role="dialog"`, `aria-modal="true"`), tabs (`role="tab"`, `aria-selected`), and buttons.
   - Fully responsive on mobile, tablet, and desktop screens.
7. **Business Accuracy**: Removed unverified claims about metal purity percentages, certifications, manufacturing capacity numbers, shipping guarantees, and client relationships.
8. **Verification**:
   - `npm run lint` (`oxlint`): **0 warnings, 0 errors**.
   - `npm run build` (`tsc -b && vite build`): **0 errors, build completed in 1.45s**.

