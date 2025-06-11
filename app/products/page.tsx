'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { products, getProductsByCategory } from '@/lib/products';
import ProductCard from '@/components/product-card';
import { Button } from '@/components/ui/button';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(getProductsByCategory(selectedCategory));
  }, [selectedCategory]);

  const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'clothes', label: 'Clothes' },
    { key: 'toys', label: 'Toys' },
    { key: 'leashes', label: 'Leashes' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
        <p className="text-xl text-gray-600">
          Discover our complete collection of premium dog accessories
        </p>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <Button
            key={category.key}
            variant={selectedCategory === category.key ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category.key)}
            className={
              selectedCategory === category.key
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'border-gray-300 text-gray-700 hover:bg-gray-50'
            }
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}