"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/src/shared/images/logo.png";
import Image from "next/image";

// Paw print icon component
const PawIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2Z" />
    <path d="M21 9C19.9 9 19 9.9 19 11C19 12.1 19.9 13 21 13C22.1 13 23 12.1 23 11C23 9.9 22.1 9 21 9Z" />
    <path d="M3 9C1.9 9 1 9.9 1 11C1 12.1 1.9 13 3 13C4.1 13 5 12.1 5 11C5 9.9 4.1 9 3 9Z" />
    <path d="M15 7C13.9 7 13 7.9 13 9C13 10.1 13.9 11 15 11C16.1 11 17 10.1 17 9C17 7.9 16.1 7 15 7Z" />
    <path d="M9 7C7.9 7 7 7.9 7 9C7 10.1 7.9 11 9 11C10.1 11 11 10.1 11 9C11 7.9 10.1 7 9 7Z" />
    <path d="M12 22C16 22 18.5 19.5 18.5 16C18.5 14.5 17.5 13.26 16.04 12.74C15.53 12.5 15.03 12.45 14.5 12.45C13.93 12.45 5.5 12.45 5.5 16C5.5 19.5 8 22 12 22Z" />
  </svg>
);

export default function Navigation() {
  const { getItemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemCount = getItemCount();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="rounded-full p-2 group-hover:scale-105 transition-transform">
              {/* <PawIcon className="h-8 w-8 text-white" /> */}
              <Image src={Logo} alt="Logo" width={48} height={48} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors leading-tight">
                Wonderful Paws
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Premium Pet Accessories
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-black transition-colors font-semibold text-lg"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-black transition-colors font-semibold text-lg"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-black transition-colors font-semibold text-lg"
            >
              About Us
            </Link>
            <Link
              href="/policy"
              className="text-gray-700 hover:text-black transition-colors font-semibold text-lg"
            >
              Policy
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-black transition-colors font-semibold text-lg"
            >
              Contact
            </Link>
            <Link
              href="/cart"
              className="relative flex items-center text-gray-700 hover:text-black transition-colors group"
            >
              <div className="relative">
                <ShoppingCart className="h-7 w-7" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg">
                    {itemCount}
                  </span>
                )}
              </div>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative flex items-center text-gray-700 hover:text-black transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-black transition-colors font-semibold text-lg px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-black transition-colors font-semibold text-lg px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-black transition-colors font-semibold text-lg px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/policy"
                className="text-gray-700 hover:text-black transition-colors font-semibold text-lg px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Policy
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-black transition-colors font-semibold text-lg px-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
