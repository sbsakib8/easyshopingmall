"use client";
import React, { useState } from "react";
import {
  ShoppingBag,
  Laptop,
  Footprints,
  Coffee,
  Sparkles,
  Heart,
  Gem,
  Star,
  Eye,
  ShoppingCart,
} from "lucide-react";
import { products } from "@/src/data/productdata/popularProduct";

const PopularProducts = () => {
  const [activeCategory, setActiveCategory] = useState("FASHION");

  const categories = [
    { id: "FASHION", name: "FASHION", icon: <Sparkles className="w-5 h-5" /> },
    { id: "ELECTRONICS", name: "ELECTRONICS", icon: <Laptop className="w-5 h-5" /> },
    { id: "BAGS", name: "BAGS", icon: <ShoppingBag className="w-5 h-5" /> },
    { id: "FOOTWEAR", name: "FOOTWEAR", icon: <Footprints className="w-5 h-5" /> },
    { id: "GROCERIES", name: "GROCERIES", icon: <Coffee className="w-5 h-5" /> },
    { id: "BEAUTY", name: "BEAUTY", icon: <Heart className="w-5 h-5" /> },
    { id: "WELLNESS", name: "WELLNESS", icon: <Sparkles className="w-5 h-5" /> },
    { id: "JEWELLERY", name: "JEWELLERY", icon: <Gem className="w-5 h-5" /> },
  ];

  

  const currentProducts = products[activeCategory] || [];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen mt-3  bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Top Header with Categories */}
      <div className="sticky top-0 z-20 bg-white shadow-md px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Popular Products
        </h2>

        <div className="flex items-center justify-center gap-3 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-xl font-medium transition-all duration-300 whitespace-nowrap ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.5s ease-out forwards",
              }}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-8 container">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {activeCategory.charAt(0) + activeCategory.slice(1).toLowerCase()}
          </h1>
          <p className="text-gray-600">
            Discover amazing products in this category
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                  </button>
                  <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                    <Eye className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {product.name}
                </h3>
                <div className="flex items-center mb-3">
                  <div className="flex items-center space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.rating})
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-green-600">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PopularProducts;
