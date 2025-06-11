import { Product } from '@/lib/products';
import { getProduct } from './api/getProduct';

interface ProductDetailServerProps {
  productId: string;
  children: (product: Product) => React.ReactNode;
}

export default function ProductDetailServer({ productId, children }: ProductDetailServerProps) {
  const product = getProduct(productId);

  if (!product) {
    return null;
  }

  return <>{children(product)}</>;
}