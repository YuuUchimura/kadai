'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { Product } from '@/lib/products';
import { toast } from 'sonner';

export const useAddToCart = () => {
  const { addItem } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (product: Product, selectedSize: string) => {
    if (!selectedSize) {
      toast.error('Please select a size before adding to cart');
      return;
    }

    setIsAdding(true);
    try {
      addItem(product, selectedSize);
      toast.success('Added to cart successfully!');
    } catch (error) {
      toast.error('Failed to add item to cart');
    } finally {
      setIsAdding(false);
    }
  };

  return {
    isAdding,
    handleAddToCart,
  };
};