"use client";

import Link from "next/link";
import Image from "next/image";
import { Product, DEFAULT_PRODUCT_IMAGE } from "@/lib/products";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
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
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:scale-105">
      <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
          </div>
        )}
        {/* <Image
          src={imageError ? DEFAULT_PRODUCT_IMAGE : product.image}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          } group-hover:scale-110`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={handleImageError}
          onLoad={handleImageLoad}
        /> */}
        {/* <Image
          src={imageError ? DEFAULT_PRODUCT_IMAGE : product.image}
          alt={product.name}
          fill
          className={`w-full h-full transition-all duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          } group-hover:scale-110`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={handleImageError}
          onLoad={handleImageLoad}
        /> */}
        <Image
          src={imageError ? DEFAULT_PRODUCT_IMAGE : product.image}
          alt={product.name}
          fill
          className={`transition-all duration-500 ${
            isLoading ? "opacity-0" : "opacity-100"
          } group-hover:scale-110 scale-90`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-gray-700 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-black mb-4">
          ${product.price.toFixed(2)} CAD
        </p>
        <Link href={`/products/${product.id}`}>
          <Button className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
