import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from "@/lib/cart-context";
import Navigation from "@/components/navigation";
import { Toaster } from "@/components/ui/sonner";
import Logo from "@/src/shared/images/logo.png";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wonderful Paws - Premium Dog Clothes, Toys & Leashes",
  description:
    "Premium dog clothing, toys, and leashes crafted with love in Canada. Shop now for the finest quality pet accessories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navigation />
          <main className="min-h-screen bg-gray-50">{children}</main>

          <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Company Info */}
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-white rounded-full p-2">
                      <Image src={Logo} alt="Logo" width={48} height={48} />
                    </div>
                    <span className="text-xl font-bold">Wonderful Paws</span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Premium pet accessories crafted with love in Canada. We're
                    dedicated to providing the finest quality products for your
                    beloved furry friends.
                  </p>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/products"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        href="/about"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/policy"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/contact"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        href="/cart"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Cart
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Categories</h4>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/products?category=clothes"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Clothing
                      </a>
                    </li>
                    <li>
                      <a
                        href="/products?category=toys"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Toys
                      </a>
                    </li>
                    <li>
                      <a
                        href="/products?category=leashes"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        Leashes
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8 text-center">
                <p className="text-gray-400 mb-2">Made with ❤️ in Canada</p>
                <p className="text-sm text-gray-500">
                  © 2024 Wonderful Paws. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
