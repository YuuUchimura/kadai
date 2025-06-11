import { Product } from '@/lib/products';

export const formatProductPrice = (price: number): string => {
  return `$${price.toFixed(2)} CAD`;
};

export const formatProductCategory = (category: string): string => {
  return category.charAt(0).toUpperCase() + category.slice(1);
};