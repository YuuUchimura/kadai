import { products } from "@/lib/products";
import ProductDetail from "@/src/pageLayer/products/[id]";
import ProductDetailErrorBoundary from "@/src/pageLayer/products/[id]/ErrorBoundary";
import BackButton from "@/src/shared/ui/BackButton";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton href="/products" label="Back to Products" />
      </div>

      <ProductDetail productId={params.id} />
    </>
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}
