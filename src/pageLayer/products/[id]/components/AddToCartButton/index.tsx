'use client';

import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Product } from '@/lib/products';
import { useAddToCart } from './model/useAddToCart';

interface AddToCartButtonProps {
  product: Product;
  selectedSize: string;
}

export default function AddToCartButton({ product, selectedSize }: AddToCartButtonProps) {
  const { isAdding, handleAddToCart } = useAddToCart();

  return (
    <Button
      onClick={() => handleAddToCart(product, selectedSize)}
      disabled={!selectedSize || isAdding}
      size="lg"
      className="bg-black hover:bg-gray-800 text-white w-full mb-6 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <ShoppingCart className="mr-2 h-5 w-5" />
      {isAdding ? 'Adding...' : 'Add to Cart'}
    </Button>
  );
}