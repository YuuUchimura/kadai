import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  href: string;
  label: string;
}

export default function BackButton({ href, label }: BackButtonProps) {
  return (
    <div className="mb-8">
      <Link
        href={href}
        className="inline-flex items-center text-black hover:text-gray-700 transition-colors font-semibold text-lg group"
      >
        <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
        {label}
      </Link>
    </div>
  );
}
