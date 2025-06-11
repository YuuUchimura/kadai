import { formatProductCategory } from '../../lib/formatProduct';

interface ProductCategoryProps {
  category: string;
}

export default function ProductCategory({ category }: ProductCategoryProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <span>Category:</span>
      <span className="capitalize font-medium text-gray-700">
        {formatProductCategory(category)}
      </span>
    </div>
  );
}