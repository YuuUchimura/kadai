import { Product } from '@/lib/products';
import ProductDetailServer from './Server';
import ProductDetailClient from './Client';
import ProductDetailErrorBoundary from './ErrorBoundary';

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <ProductDetailServer productId={productId}>
        {(product: Product) => (
          <ProductDetailClient product={product} />
        )}
      </ProductDetailServer>
    </div>
  );
}