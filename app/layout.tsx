import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { CartProvider } from '@/lib/cart-context';
import Navigation from '@/components/navigation';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wonderful Paws - Premium Dog Clothes, Toys & Leashes',
  description: 'Premium dog clothing, toys, and leashes crafted with love in Canada. Shop now for the finest quality pet accessories.',
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
          <main className="min-h-screen bg-gray-50">
            {children}
          </main>

          <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                {/* Company Info */}
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-white rounded-full p-2">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-black">
                        <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2Z" />
                        <path d="M21 9C19.9 9 19 9.9 19 11C19 12.1 19.9 13 21 13C22.1 13 23 12.1 23 11C23 9.9 22.1 9 21 9Z" />
                        <path d="M3 9C1.9 9 1 9.9 1 11C1 12.1 1.9 13 3 13C4.1 13 5 12.1 5 11C5 9.9 4.1 9 3 9Z" />
                        <path d="M15 7C13.9 7 13 7.9 13 9C13 10.1 13.9 11 15 11C16.1 11 17 10.1 17 9C17 7.9 16.1 7 15 7Z" />
                        <path d="M9 7C7.9 7 7 7.9 7 9C7 10.1 7.9 11 9 11C10.1 11 11 10.1 11 9C11 7.9 10.1 7 9 7Z" />
                        <path d="M12 22C16 22 18.5 19.5 18.5 16C18.5 14.5 17.5 13.26 16.04 12.74C15.53 12.5 15.03 12.45 14.5 12.45C13.93 12.45 5.5 12.45 5.5 16C5.5 19.5 8 22 12 22Z" />
                      </svg>
                    </div>
                    <span className="text-xl font-bold">Wonderful Paws</span>
                  </div>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    Premium pet accessories crafted with love in Canada. We're dedicated to providing 
                    the finest quality products for your beloved furry friends.
                  </p>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <span className="text-2xl">🇨🇦</span>
                    <span className="font-semibold">Proudly Canadian</span>
                  </div>
                </div>

                {/* Quick Links */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                    <li><a href="/products" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
                    <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                    <li><a href="/policy" className="text-gray-300 hover:text-white transition-colors">Policy</a></li>
                    <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                    <li><a href="/cart" className="text-gray-300 hover:text-white transition-colors">Cart</a></li>
                  </ul>
                </div>

                {/* Categories */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Categories</h4>
                  <ul className="space-y-2">
                    <li><a href="/products?category=clothes" className="text-gray-300 hover:text-white transition-colors">Clothing</a></li>
                    <li><a href="/products?category=toys" className="text-gray-300 hover:text-white transition-colors">Toys</a></li>
                    <li><a href="/products?category=leashes" className="text-gray-300 hover:text-white transition-colors">Leashes</a></li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-700 pt-8 text-center">
                <p className="text-gray-400 mb-2">Made with ❤️ in Canada</p>
                <p className="text-sm text-gray-500">© 2024 Wonderful Paws. All rights reserved.</p>
              </div>
            </div>
          </footer>
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}