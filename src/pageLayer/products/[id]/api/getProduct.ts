import { getProductById, Product } from '@/lib/products';

export const getProduct = (id: string): Product | null => {
  return getProductById(id) || null;
};