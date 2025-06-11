"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/product-card";
import {
  Shirt,
  // Gamepad2,
  Bone,
  Dog as Leash,
  ArrowRight,
  Star,
  Shield,
  Truck,
} from "lucide-react";
import top2 from "@/src/shared/images/top2.png";
import footerImage from "@/src/shared/images/footer.png";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 
        bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-70"
        >
          <Image src={top2} alt="top2" fill className="object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Enjoy wonderful fluffy life
              {/* <span className="text-black block"></span> */}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Discover our curated collection of premium clothing, toys, and
              leashes designed for your beloved furry friends. Quality
              craftsmanship meets Canadian values.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/products">
                <Button
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-black fill-current" />
                <span className="font-medium">5-Star Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-black" />
                <span className="font-medium">Safe Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-black" />
                <span className="font-medium">Free Shipping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find exactly what your furry friend needs from our carefully
              curated collections
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Clothes */}
            <Link href="/products?category=clothes" className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-gray-200">
                <div className="bg-black rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shirt className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Premium Clothing
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Stylish and comfortable clothing designed to keep your dog
                  looking great and feeling cozy in any weather condition.
                </p>
              </div>
            </Link>

            {/* Toys */}
            <Link href="/products?category=toys" className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-gray-200">
                <div className="bg-black rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Bone className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Interactive Toys
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Engaging and durable toys designed to stimulate your dog's
                  mind, promote healthy play, and strengthen your bond.
                </p>
              </div>
            </Link>

            {/* Leashes */}
            <Link href="/products?category=leashes" className="group">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border border-gray-200">
                <div className="bg-black rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Leash className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quality Leashes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Durable and comfortable leashes engineered for safety and
                  control during walks, training, and outdoor adventures.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular items, loved by dogs and their owners across
              Canada
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-16">
            <Link href="/products">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Size Guide Image Section - Only on Home Page */}
      <section className="">
        <div className="w-full">
          <div className="relative overflow-hidden shadow-2xl">
            <Image
              src={footerImage}
              alt="A Size For Every Dog - Various dogs wearing different sized clothing and accessories"
              // width={1400}
              // height={1400}
              className="w-full h-auto object-cover"
              onError={(e) => {
                // Fallback to a solid color background with text if image fails
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `
                    <div class="bg-gradient-to-r from-gray-800 to-black h-96 flex items-center justify-center">
                      <div class="text-center text-white">
                        <h3 class="text-4xl md:text-6xl font-bold mb-4">A Size For Every Dog</h3>
                        <p class="text-xl md:text-2xl opacity-90">From tiny puppies to gentle giants</p>
                      </div>
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Crafted with Love in Canada 🇨🇦
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            At Wonderful Paws, we believe every dog deserves the finest
            accessories. Our products are meticulously crafted with premium
            materials and designed with both comfort and style in mind. From our
            home in Canada, we're proud to serve dog lovers worldwide with
            quality accessories that celebrate the special bond between you and
            your furry companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/products">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Shop Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
