export default function ProductFeatures() {
  return (
    <div className="mt-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center group">
          <div className="bg-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <span className="text-3xl">🏃</span>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-3">Active Lifestyle</h3>
          <p className="text-gray-600 leading-relaxed">Designed for active dogs who love to play, explore, and enjoy outdoor adventures with their families.</p>
        </div>
        <div className="text-center group">
          <div className="bg-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <span className="text-3xl">🌿</span>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-3">Safe Materials</h3>
          <p className="text-gray-600 leading-relaxed">Crafted with premium, pet-safe, non-toxic materials that prioritize your dog's health and comfort.</p>
        </div>
        <div className="text-center group">
          <div className="bg-black rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <span className="text-3xl">🇨🇦</span>
          </div>
          <h3 className="font-bold text-xl text-gray-900 mb-3">Made in Canada</h3>
          <p className="text-gray-600 leading-relaxed">Proudly designed and crafted with love in Canada, supporting local artisans and quality craftsmanship.</p>
        </div>
      </div>
    </div>
  );
}