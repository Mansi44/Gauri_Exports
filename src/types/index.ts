export type ProductCategoryType = 'bathtubs' | 'brass-decor';

export interface Product {
  id: string;
  name: string;
  category: ProductCategoryType;
  categoryLabel: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  material: string;
  finishOptions: string[];
  dimensionsPlaceholder: string;
  weightPlaceholder: string;
  leadTimePlaceholder: string;
  imageUrl: string;
  badge?: string;
  featured: boolean;
}

export interface EnquiryFormState {
  fullName: string;
  email: string;
  interestCategory: ProductCategoryType | 'both' | 'custom';
  quantity: string;
  message: string;
  company?: string;
  country?: string;
  productName?: string;
}

export interface ContactInfoPlaceholder {
  division: string;
  email: string;
  phonePlaceholder: string;
  addressPlaceholder: string;
}

