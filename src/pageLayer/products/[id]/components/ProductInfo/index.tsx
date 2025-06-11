import { Product } from '@/lib/products';
import { formatProductPrice, formatProductCategory } from '../../lib/formatProduct';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="mb-6">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {product.name}
      </h1>
      <p className="text-3xl font-bold text-blue-600 mb-6">
        {formatProductPrice(product.price)}
      </p>
      <p className="text-lg text-gray-600 leading-relaxed">
        {product.description}
      </p>
    </div>
  );
}