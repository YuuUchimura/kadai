'use client';

import { Shield, Truck, RotateCcw, CreditCard, Lock, Mail } from 'lucide-react';

export default function PolicyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Policies</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We believe in transparency and want you to feel confident shopping with us. 
          Here are our policies to ensure you have the best experience possible.
        </p>
      </div>

      {/* Policy Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Shipping Policy */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-black rounded-full p-3 mr-4">
              <Truck className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Shipping Policy</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Delivery Times</h3>
              <ul className="space-y-1 text-sm">
                <li>• Standard Shipping: 3-5 business days</li>
                <li>• Express Shipping: 1-2 business days</li>
                <li>• Free shipping on orders over $75 CAD</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Shipping Areas</h3>
              <p className="text-sm">We currently ship to all provinces and territories across Canada.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Processing Time</h3>
              <p className="text-sm">Orders are processed within 1-2 business days before shipping.</p>
            </div>
          </div>
        </div>

        {/* Return Policy */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-black rounded-full p-3 mr-4">
              <RotateCcw className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Return Policy</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">30-Day Returns</h3>
              <p className="text-sm">Return any item within 30 days of purchase for a full refund.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Condition Requirements</h3>
              <ul className="space-y-1 text-sm">
                <li>• Items must be in original condition</li>
                <li>• Original packaging required</li>
                <li>• Tags must be attached</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Size Exchanges</h3>
              <p className="text-sm">Wrong size? We offer free size exchanges within 30 days.</p>
            </div>
          </div>
        </div>

        {/* Payment Policy */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-black rounded-full p-3 mr-4">
              <CreditCard className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Payment Policy</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Accepted Payment Methods</h3>
              <ul className="space-y-1 text-sm">
                <li>• All major credit cards (Visa, MasterCard, Amex)</li>
                <li>• PayPal</li>
                <li>• Apple Pay & Google Pay</li>
                <li>• Shop Pay</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Currency</h3>
              <p className="text-sm">All prices are displayed in Canadian Dollars (CAD).</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Payment Security</h3>
              <p className="text-sm">All transactions are secured with SSL encryption via Stripe.</p>
            </div>
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-6">
            <div className="bg-black rounded-full p-3 mr-4">
              <Lock className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Collection</h3>
              <p className="text-sm">We only collect information necessary to process your orders and improve your experience.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Protection</h3>
              <p className="text-sm">Your personal information is encrypted and stored securely. We never sell your data.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email Communications</h3>
              <p className="text-sm">You can unsubscribe from marketing emails at any time. Order confirmations will still be sent.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Warranty Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 mb-16">
        <div className="text-center mb-8">
          <div className="bg-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Guarantee</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We stand behind the quality of our products. If you're not completely satisfied, 
            we'll make it right.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="font-bold text-lg text-gray-900 mb-2">1-Year Warranty</h3>
            <p className="text-gray-600 text-sm">All products come with a 1-year warranty against manufacturing defects.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg text-gray-900 mb-2">Quality Promise</h3>
            <p className="text-gray-600 text-sm">If a product doesn't meet our quality standards, we'll replace it free of charge.</p>
          </div>
          <div className="text-center">
            <h3 className="font-bold text-lg text-gray-900 mb-2">Customer Support</h3>
            <p className="text-gray-600 text-sm">Our friendly support team is here to help with any questions or concerns.</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black rounded-3xl p-12 text-center text-white">
        <div className="mb-6">
          <Mail className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Questions About Our Policies?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Our customer service team is here to help clarify any questions you may have.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-gray-300">hello@wonderfulpaws.ca</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Phone Support</h3>
            <p className="text-gray-300">+1 (555) 123-PAWS</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Response Time</h3>
            <p className="text-gray-300">Within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}