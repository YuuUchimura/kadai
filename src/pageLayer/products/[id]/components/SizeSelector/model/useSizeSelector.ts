'use client';

import { useState } from 'react';

export const useSizeSelector = () => {
  const [selectedSize, setSelectedSize] = useState<string>('');

  return {
    selectedSize,
    setSelectedSize,
  };
};