"use client";

import Image from "next/image";
import { Product, DEFAULT_PRODUCT_IMAGE } from "@/lib/products";
import { useState } from "react";

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="aspect-square relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      )}
      <Image
        src={imageError ? DEFAULT_PRODUCT_IMAGE : product.image}
        alt={product.name}
        fill
        className={`object-cover transition-all duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        } hover:scale-105`}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      {!isLoading && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300" />
      )}
    </div>
  );
}
