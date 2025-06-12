"use client";

import { Heart, Award, Truck, Shield } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          About Wonderful Paws
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're passionate about creating premium pet accessories that bring joy
          to both dogs and their families. Founded in Canada with love, we
          believe every paw deserves the finest quality products.
        </p>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <Image
            src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Happy dogs wearing our products"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Wonderful Paws was born from a simple belief: our four-legged
              family members deserve the very best. As dog lovers ourselves, we
              understand the special bond between pets and their humans.
            </p>
            <p>
              Founded in 2020 in the heart of Canada, we started with a mission
              to create premium pet accessories that combine functionality,
              comfort, and style. Every product is carefully designed and tested
              to ensure it meets our high standards for quality and safety.
            </p>
            <p>
              Today, we're proud to serve thousands of happy customers across
              Canada, helping dogs look great and feel comfortable in every
              season and situation.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 mb-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Love & Care
            </h3>
            <p className="text-gray-600 text-sm">
              Every product is made with genuine love and care for your furry
              family members.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Premium Quality
            </h3>
            <p className="text-gray-600 text-sm">
              We use only the finest materials and craftsmanship in all our
              products.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Fast Delivery
            </h3>
            <p className="text-gray-600 text-sm">
              Quick and reliable shipping across Canada to get products to you
              fast.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Safety First
            </h3>
            <p className="text-gray-600 text-sm">
              All products are tested for safety and made with pet-safe
              materials.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">👩‍💼</span>
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Yu Uchimura
            </h3>
            <p className="text-gray-600 mb-2">Founder & CEO</p>
            <p className="text-sm text-gray-500">
              Dog lover and entrepreneur with 10+ years in pet industry
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">👨‍🎨</span>
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Yuu Uchimura
            </h3>
            <p className="text-gray-600 mb-2">Head of Design</p>
            <p className="text-sm text-gray-500">
              Creative designer specializing in functional pet accessories
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">👩‍🔬</span>
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">
              Dr. Emily Watson
            </h3>
            <p className="text-gray-600 mb-2">Quality Assurance</p>
            <p className="text-sm text-gray-500">
              Veterinarian ensuring all products meet safety standards
            </p>
          </div>
        </div>
      </div>

      {/* Canadian Pride Section */}
      <div className="bg-gradient-to-br from-red-50 to-white rounded-3xl p-12 text-center">
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We're proud to be a Canadian company, supporting local communities and
          crafting our products with the quality and care that Canada is known
          for worldwide.
        </p>
      </div>
    </div>
  );
}
