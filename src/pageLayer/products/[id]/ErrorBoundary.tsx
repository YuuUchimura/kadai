'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ProductDetailErrorBoundaryProps {
  error?: Error;
  reset?: () => void;
}

export default function ProductDetailErrorBoundary({ error, reset }: ProductDetailErrorBoundaryProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">
          {error?.message || "Sorry, we couldn't find the product you're looking for."}
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/products">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Button>
          </Link>
          {reset && (
            <Button variant="outline" onClick={reset}>
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}