'use client';

import { Product } from '@/lib/products';
import ProductImage from './components/ProductImage';
import ProductInfo from './components/ProductInfo';
import SizeSelector from './components/SizeSelector';
import AddToCartButton from './components/AddToCartButton';
import ProductCategory from './components/ProductCategory';
import ProductFeatures from './components/ProductFeatures';
import { useSizeSelector } from './components/SizeSelector/model/useSizeSelector';

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const { selectedSize, setSelectedSize } = useSizeSelector();

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ProductImage product={product} />
        
        <div className="flex flex-col">
          <ProductInfo product={product} />
          
          <SizeSelector 
            sizes={product.sizes}
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
          />
          
          <AddToCartButton 
            product={product}
            selectedSize={selectedSize}
          />
          
          <ProductCategory category={product.category} />
        </div>
      </div>
      
      <ProductFeatures />
    </div>
  );
}