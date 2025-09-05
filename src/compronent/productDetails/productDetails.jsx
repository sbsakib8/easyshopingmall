"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, Heart, Share2, ShoppingCart, Plus, Minus, Truck, Shield, RotateCcw, 
  CheckCircle, Eye, Zap, Award, Clock, ChevronLeft, ChevronRight, Package,
  MessageCircle, ThumbsUp, Gift, CreditCard, Smartphone, Headphones,
  Volume2, VolumeX, Play, Pause, BarChart3, TrendingUp, Users, Verified,
  Calendar, MapPin, Filter, Search, X, ZoomIn, ZoomOut, MoreHorizontal,
  Palette, Sparkles, Droplets, Sun, Moon, Shirt, User, Ruler, Info,
  TestTube, Leaf, Scissors, Crown, Diamond, Flame, Snowflake
} from 'lucide-react';

const ProductDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState('electronics');
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [isZoomed, setIsZoomed] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  // Category definitions with specific data
  const categoryData = {
    electronics: {
      name: "Premium Wireless Headphones Pro Max Elite",
      brand: "AudioTech",
      model: "AT-PM2024",
      price: 12999,
      originalPrice: 16999,
      discount: 24,
      rating: 4.8,
      reviewCount: 1247,
      images: [
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&h=800&fit=crop"
      ],
      options: {
        colors: [
          { name: 'Midnight Black', value: '#1a1a1a', available: true, stock: 25 },
          { name: 'Pearl White', value: '#f8f9fa', available: true, stock: 18 },
          { name: 'Ocean Blue', value: '#4a90e2', available: true, stock: 12 }
        ],
        connectivity: [
          { name: 'Bluetooth 5.3', available: true },
          { name: 'USB-C', available: true },
          { name: 'Wireless + Wired', available: true }
        ],
        batteryLife: [
          { name: '30H (ANC On)', available: true },
          { name: '40H (ANC Off)', available: true }
        ]
      },
      features: [
        { icon: <Volume2 className="w-4 h-4" />, text: 'Active Noise Cancellation' },
        { icon: <Clock className="w-4 h-4" />, text: '30H Battery Life' },
        { icon: <Zap className="w-4 h-4" />, text: 'Fast Charging' },
        { icon: <Smartphone className="w-4 h-4" />, text: 'Bluetooth 5.3' },
        { icon: <Shield className="w-4 h-4" />, text: 'IPX4 Water Resistant' }
      ],
      categoryIcon: <Headphones className="w-6 h-6" />,
      gradientFrom: 'from-blue-600',
      gradientVia: 'via-purple-600',
      gradientTo: 'to-cyan-600'
    },
    clothing: {
      name: "Premium Cotton Designer T-Shirt",
      brand: "StyleCraft",
      model: "SC-TS2024",
      price: 2499,
      originalPrice: 3999,
      discount: 37,
      rating: 4.6,
      reviewCount: 892,
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&h=800&fit=crop"
      ],
      options: {
        colors: [
          { name: 'Classic Black', value: '#000000', available: true, stock: 45 },
          { name: 'Pure White', value: '#ffffff', available: true, stock: 32 },
          { name: 'Navy Blue', value: '#1e3a8a', available: true, stock: 28 },
          { name: 'Forest Green', value: '#166534', available: true, stock: 15 },
          { name: 'Crimson Red', value: '#dc2626', available: false, stock: 0 }
        ],
        sizes: [
          { size: 'XS', label: 'Extra Small', chest: '32-34"', available: true, stock: 8 },
          { size: 'S', label: 'Small', chest: '34-36"', available: true, stock: 15 },
          { size: 'M', label: 'Medium', chest: '36-38"', available: true, stock: 25 },
          { size: 'L', label: 'Large', chest: '38-40"', available: true, stock: 18 },
          { size: 'XL', label: 'Extra Large', chest: '40-42"', available: true, stock: 12 },
          { size: 'XXL', label: '2X Large', chest: '42-44"', available: false, stock: 0 }
        ],
        material: [
          { name: '100% Organic Cotton', available: true },
          { name: 'Cotton Blend', available: true },
          { name: 'Bamboo Cotton', available: true }
        ],
        fit: [
          { name: 'Slim Fit', available: true },
          { name: 'Regular Fit', available: true },
          { name: 'Relaxed Fit', available: true }
        ]
      },
      features: [
        { icon: <Shirt className="w-4 h-4" />, text: '100% Organic Cotton' },
        { icon: <Leaf className="w-4 h-4" />, text: 'Eco-Friendly Dyes' },
        { icon: <Shield className="w-4 h-4" />, text: 'Fade Resistant' },
        { icon: <User className="w-4 h-4" />, text: 'Unisex Design' },
        { icon: <Scissors className="w-4 h-4" />, text: 'Pre-Shrunk Fabric' }
      ],
      categoryIcon: <Shirt className="w-6 h-6" />,
      gradientFrom: 'from-pink-500',
      gradientVia: 'via-rose-500',
      gradientTo: 'to-orange-500'
    },
    beauty: {
      name: "Luxury Anti-Aging Serum with Retinol",
      brand: "GlowLux",
      model: "GL-RET30",
      price: 4599,
      originalPrice: 6999,
      discount: 34,
      rating: 4.9,
      reviewCount: 2156,
      images: [
        "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=800&h=800&fit=crop"
      ],
      options: {
        skinType: [
          { name: 'All Skin Types', available: true, description: 'Suitable for everyone' },
          { name: 'Sensitive Skin', available: true, description: 'Gentle formula' },
          { name: 'Oily Skin', available: true, description: 'Oil-free formula' },
          { name: 'Dry Skin', available: true, description: 'Extra moisturizing' }
        ],
        concentration: [
          { name: '0.5% Retinol', available: true, description: 'Beginner friendly' },
          { name: '1% Retinol', available: true, description: 'Advanced formula' },
          { name: '2% Retinol', available: false, description: 'Professional strength' }
        ],
        size: [
          { name: '15ml', price: 2999, available: true },
          { name: '30ml', price: 4599, available: true },
          { name: '50ml', price: 6999, available: true }
        ],
        concerns: [
          { name: 'Fine Lines', available: true },
          { name: 'Dark Spots', available: true },
          { name: 'Uneven Texture', available: true },
          { name: 'Dullness', available: true }
        ]
      },
      features: [
        { icon: <Sparkles className="w-4 h-4" />, text: 'Clinical Strength Retinol' },
        { icon: <Droplets className="w-4 h-4" />, text: 'Hyaluronic Acid Infused' },
        { icon: <TestTube className="w-4 h-4" />, text: 'Dermatologist Tested' },
        { icon: <Leaf className="w-4 h-4" />, text: 'Cruelty-Free & Vegan' },
        { icon: <Crown className="w-4 h-4" />, text: 'Luxury Skincare' }
      ],
      categoryIcon: <Sparkles className="w-6 h-6" />,
      gradientFrom: 'from-purple-500',
      gradientVia: 'via-pink-500',
      gradientTo: 'to-rose-500'
    },
    home: {
      name: "Smart LED Strip Lights with App Control",
      brand: "HomeTech",
      model: "HT-LED2024",
      price: 3999,
      originalPrice: 5999,
      discount: 33,
      rating: 4.7,
      reviewCount: 654,
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&h=800&fit=crop"
      ],
      options: {
        length: [
          { name: '2 meters', available: true, price: 2999 },
          { name: '5 meters', available: true, price: 3999 },
          { name: '10 meters', available: true, price: 6999 }
        ],
        type: [
          { name: 'RGB', available: true, description: '16 million colors' },
          { name: 'RGBW', available: true, description: 'RGB + warm white' },
          { name: 'RGB+CCT', available: true, description: 'Full spectrum' }
        ],
        control: [
          { name: 'App Control', available: true },
          { name: 'Voice Control', available: true },
          { name: 'Remote Control', available: true },
          { name: 'Music Sync', available: true }
        ],
        installation: [
          { name: 'Adhesive Back', available: true },
          { name: 'Mounting Clips', available: true },
          { name: 'Corner Connectors', available: true }
        ]
      },
      features: [
        { icon: <Palette className="w-4 h-4" />, text: '16M+ Colors' },
        { icon: <Smartphone className="w-4 h-4" />, text: 'Smart App Control' },
        { icon: <Volume2 className="w-4 h-4" />, text: 'Music Sync' },
        { icon: <Clock className="w-4 h-4" />, text: 'Timer & Scheduling' },
        { icon: <Zap className="w-4 h-4" />, text: 'Energy Efficient' }
      ],
      categoryIcon: <Sun className="w-6 h-6" />,
      gradientFrom: 'from-yellow-500',
      gradientVia: 'via-orange-500',
      gradientTo: 'to-red-500'
    }
  };

  const currentProduct = categoryData[selectedCategory];

  // Auto-play image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!showImageModal && !isZoomed) {
        setCurrentImageIndex((prev) => (prev + 1) % currentProduct.images.length);
        setSelectedImage((prev) => (prev + 1) % currentProduct.images.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [showImageModal, isZoomed, currentProduct.images.length]);

  const handleImageChange = (index) => {
    setSelectedImage(index);
    setCurrentImageIndex(index);
    setIsImageLoading(true);
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase' && quantity < 50) {
      setQuantity(quantity + 1);
    } else if (type === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleMouseMove = (e) => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  const nextImage = () => {
    const next = (selectedImage + 1) % currentProduct.images.length;
    handleImageChange(next);
  };

  const prevImage = () => {
    const prev = selectedImage === 0 ? currentProduct.images.length - 1 : selectedImage - 1;
    handleImageChange(prev);
  };

  const handleOptionChange = (optionType, value) => {
    setSelectedOptions({
      ...selectedOptions,
      [optionType]: value
    });
  };

  // Dynamic option renderer based on category
  const renderCategoryOptions = () => {
    const options = currentProduct.options;
    
    return Object.entries(options).map(([optionType, optionValues]) => (
      <div key={optionType} className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 capitalize flex items-center gap-2">
          {optionType === 'skinType' && <User className="w-5 h-5 text-purple-600" />}
          {optionType === 'colors' && <Palette className="w-5 h-5 text-pink-600" />}
          {optionType === 'sizes' && <Ruler className="w-5 h-5 text-blue-600" />}
          {optionType === 'material' && <Leaf className="w-5 h-5 text-green-600" />}
          {optionType === 'concentration' && <TestTube className="w-5 h-5 text-purple-600" />}
          {optionType === 'length' && <Ruler className="w-5 h-5 text-orange-600" />}
          {optionType.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
        </h3>
        
        {/* Color Options */}
        {optionType === 'colors' && (
          <div className="flex flex-wrap gap-3">
            {optionValues.map((color, index) => (
              <button
                key={index}
                onClick={() => color.available && handleOptionChange(optionType, color.name)}
                disabled={!color.available}
                className={`relative p-1 rounded-full transition-all duration-300 ${
                  selectedOptions[optionType] === color.name 
                    ? 'ring-2 ring-emerald-500 ring-offset-2 scale-110' 
                    : 'hover:scale-105'
                } ${!color.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div 
                  className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                  style={{ backgroundColor: color.value }}
                />
                {selectedOptions[optionType] === color.name && (
                  <CheckCircle className="absolute -top-1 -right-1 w-5 h-5 text-emerald-500 bg-white rounded-full" />
                )}
                {!color.available && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-0.5 bg-red-500 rotate-45"></div>
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
        
        {/* Size Options */}
        {optionType === 'sizes' && (
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {optionValues.map((sizeInfo) => (
              <button
                key={sizeInfo.size}
                onClick={() => sizeInfo.available && handleOptionChange(optionType, sizeInfo.size)}
                disabled={!sizeInfo.available}
                className={`group relative p-3 rounded-xl border-2 transition-all duration-300 ${
                  selectedOptions[optionType] === sizeInfo.size
                    ? `border-emerald-500 bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} text-white shadow-lg transform scale-105`
                    : sizeInfo.available
                    ? 'border-gray-300 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50'
                    : 'border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                }`}
              >
                <div className="text-center">
                  <div className="font-bold text-sm">{sizeInfo.size}</div>
                  <div className="text-xs opacity-75">{sizeInfo.label}</div>
                  {sizeInfo.chest && (
                    <div className="text-xs opacity-60 mt-1">{sizeInfo.chest}</div>
                  )}
                </div>
                {sizeInfo.stock && sizeInfo.stock <= 5 && sizeInfo.available && (
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-1 py-0.5 rounded-full">
                    {sizeInfo.stock}
                  </div>
                )}
              </button>
            ))}
          </div>
        )}
        
        {/* Generic Options */}
        {!['colors', 'sizes'].includes(optionType) && (
          <div className="space-y-3">
            {optionValues.map((option, index) => (
              <label
                key={index}
                className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedOptions[optionType] === option.name
                    ? 'border-emerald-500 bg-emerald-50 shadow-md'
                    : option.available !== false
                    ? 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                    : 'border-gray-200 opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    name={optionType}
                    value={option.name}
                    checked={selectedOptions[optionType] === option.name}
                    onChange={() => option.available !== false && handleOptionChange(optionType, option.name)}
                    disabled={option.available === false}
                    className="w-4 h-4 text-emerald-600"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">{option.name}</span>
                    {option.description && (
                      <div className="text-sm text-gray-600 mt-1">{option.description}</div>
                    )}
                  </div>
                </div>
                {option.price && (
                  <span className="font-bold text-emerald-600">৳{option.price.toLocaleString()}</span>
                )}
                {option.stock && (
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                    {option.stock} left
                  </span>
                )}
              </label>
            ))}
          </div>
        )}
        
        {selectedOptions[optionType] && optionType === 'colors' && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Selected: {selectedOptions[optionType]}</span>
            <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
              {optionValues.find(c => c.name === selectedOptions[optionType])?.stock} in stock
            </span>
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className={`min-h-screen py-10 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-emerald-50`}>
      {/* Category Selector */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Select Product Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(categoryData).map(([key, data]) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedCategory(key);
                  setSelectedOptions({});
                  setSelectedImage(0);
                }}
                className={`flex flex-col items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 ${
                  selectedCategory === key
                    ? `border-emerald-500 bg-gradient-to-r ${data.gradientFrom} ${data.gradientVia} ${data.gradientTo} text-white shadow-lg scale-105`
                    : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 text-gray-700'
                }`}
              >
                <div className={`p-3 rounded-full ${selectedCategory === key ? 'bg-white/20' : 'bg-gray-100'}`}>
                  {data.categoryIcon}
                </div>
                <span className="font-semibold text-sm capitalize">{key}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
          <div className={`bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3`}>
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Added to cart successfully!</span>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setShowImageModal(false)}>
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={() => setShowImageModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={currentProduct.images[selectedImage]} 
              alt={currentProduct.name}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <span>Home</span>
          <ChevronRight className="w-4 h-4" />
          <span className="capitalize">{selectedCategory}</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{currentProduct.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images Section */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl ring-1 ring-black/10">
                <img 
                  ref={imageRef}
                  src={currentProduct.images[selectedImage]}
                  alt={currentProduct.name}
                  className={`w-full h-full object-cover transition-all duration-700 ${isZoomed ? 'scale-150' : 'scale-100'} cursor-zoom-in`}
                  style={isZoomed ? {
                    transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`
                  } : {}}
                  onClick={() => setIsZoomed(!isZoomed)}
                  onMouseMove={handleMouseMove}
                  onLoad={() => setIsImageLoading(false)}
                />
                
                {/* Loading overlay */}
                {isImageLoading && (
                  <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
                    <div className={`w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin`}></div>
                  </div>
                )}

                {/* Image Navigation */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Badges */}
                <div className="absolute top-4 left-4 space-y-2">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse shadow-lg">
                    -{currentProduct.discount}% OFF
                  </span>
                  <span className={`bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1`}>
                    <Zap className="w-3 h-3" />
                    Best Seller
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 space-y-2">
                  <button 
                    onClick={toggleWishlist}
                    className={`p-3 rounded-full backdrop-blur-sm transition-all duration-300 ${isWishlisted ? 'bg-red-500 text-white scale-110' : 'bg-white/90 text-gray-700 hover:bg-red-500 hover:text-white hover:scale-110'} shadow-lg`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setShowImageModal(true)}
                    className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-purple-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
                  >
                    <ZoomIn className="w-5 h-5" />
                  </button>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {currentProduct.images.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-3">
              {currentProduct.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageChange(index)}
                  className={`aspect-square rounded-xl overflow-hidden ring-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'ring-emerald-500 ring-offset-2 scale-95 shadow-lg' 
                      : 'ring-transparent hover:ring-gray-300 hover:scale-95'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${currentProduct.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-emerald-600 mb-1">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm font-semibold">12.4K</span>
                </div>
                <p className="text-xs text-gray-500">Views</p>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">3.2K</span>
                </div>
                <p className="text-xs text-gray-500">Sold</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-purple-600 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-semibold">{currentProduct.reviewCount}</span>
                </div>
                <p className="text-xs text-gray-500">Reviews</p>
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-emerald-600 font-semibold text-sm">{currentProduct.brand}</span>
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs text-gray-500">Model: {currentProduct.model}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium capitalize">
                    {selectedCategory}
                  </span>
                  <Verified className="w-4 h-4 text-blue-500" />
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {currentProduct.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 transition-colors ${i < Math.floor(currentProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-700 font-semibold">{currentProduct.rating}</span>
                </div>
                <span className="text-gray-500">({currentProduct.reviewCount} reviews)</span>
                <div className="flex items-center gap-1 text-emerald-600">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm font-medium">98% recommended</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className={`bg-gradient-to-r from-gray-50 to-emerald-50 rounded-2xl p-6 border border-emerald-100`}>
              <div className="flex items-baseline gap-4 mb-2">
                <span className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} bg-clip-text text-transparent`}>
                  ৳{currentProduct.price.toLocaleString()}
                </span>
                <span className="text-xl text-gray-500 line-through">৳{currentProduct.originalPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className={`bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  Save ৳{(currentProduct.originalPrice - currentProduct.price).toLocaleString()}
                </span>
                <span className="flex items-center gap-1 text-orange-600 text-sm">
                  <Clock className="w-4 h-4" />
                  Limited time offer
                </span>
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-emerald-100">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-emerald-600 font-semibold">In Stock</span>
                <span className="text-gray-600">(47 available)</span>
              </div>
              <div className="flex items-center gap-2 text-orange-600">
                <Package className="w-4 h-4" />
                <span className="text-sm font-medium">Fast shipping available!</span>
              </div>
            </div>

            {/* Dynamic Category Options */}
            <div className="space-y-8">
              {renderCategoryOptions()}
            </div>

            {/* Quantity Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Quantity</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center border-2 border-gray-300 rounded-xl overflow-hidden">
                  <button
                    onClick={() => handleQuantityChange('decrease')}
                    className="p-3 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-3 font-bold text-lg min-w-[4rem] text-center bg-gray-50">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increase')}
                    className="p-3 hover:bg-gray-100 transition-colors duration-200 disabled:opacity-50"
                    disabled={quantity >= 50}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Total Amount</div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} bg-clip-text text-transparent`}>
                    ৳{(currentProduct.price * quantity).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleAddToCart}
                  className={`bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group`}
                >
                  <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                  Add to Cart
                </button>
                
                <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 group">
                  <Zap className="w-5 h-5 group-hover:animate-pulse" />
                  Buy Now
                </button>
              </div>

              {/* Additional Action Buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button className="flex items-center justify-center gap-2 bg-white border-2 border-emerald-300 text-emerald-700 py-3 px-4 rounded-xl font-medium hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300 hover:scale-105">
                  <Gift className="w-4 h-4" />
                  Gift Wrap
                </button>
                <button className="flex items-center justify-center gap-2 bg-white border-2 border-blue-300 text-blue-700 py-3 px-4 rounded-xl font-medium hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:scale-105">
                  <BarChart3 className="w-4 h-4" />
                  Compare
                </button>
                <button className="flex items-center justify-center gap-2 bg-white border-2 border-purple-300 text-purple-700 py-3 px-4 rounded-xl font-medium hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 hover:scale-105">
                  <MessageCircle className="w-4 h-4" />
                  Ask Expert
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className={`bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-6 space-y-4 border border-emerald-100`}>
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/70 backdrop-blur-sm rounded-xl hover:bg-white transition-all duration-300 hover:scale-105 group">
                    <div className="text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <span className="text-gray-800 font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-100 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} rounded-full mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Free Delivery</p>
                <p className="text-sm text-gray-600">On orders over ৳1000</p>
                <p className="text-xs text-emerald-600 font-medium mt-1">Estimated: 2-3 days</p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-100 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <RotateCcw className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-semibold text-gray-900 mb-2">Easy Returns</p>
                <p className="text-sm text-gray-600">30-day return policy</p>
                <p className="text-xs text-blue-600 font-medium mt-1">No questions asked</p>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-emerald-100 group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <p className="text-lg font-semibold text-gray-900 mb-2">2 Year Warranty</p>
                <p className="text-sm text-gray-600">Full manufacturer warranty</p>
                <p className="text-xs text-purple-600 font-medium mt-1">International coverage</p>
              </div>
            </div>

            {/* Payment Options */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-emerald-600" />
                Payment Options
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                  <div className={`w-8 h-8 bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} rounded mx-auto mb-2`}></div>
                  <p className="text-xs font-medium">Card Payment</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded mx-auto mb-2"></div>
                  <p className="text-xs font-medium">Mobile Banking</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded mx-auto mb-2"></div>
                  <p className="text-xs font-medium">Cash on Delivery</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-colors duration-300">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded mx-auto mb-2"></div>
                  <p className="text-xs font-medium">Installments</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Product Details Tabs */}
        <div className="mt-20">
          <div className="bg-white rounded-t-2xl shadow-lg">
            <nav className="flex space-x-0 border-b border-gray-200">
              {[
                { key: 'description', label: 'Description', icon: <Package className="w-4 h-4" /> },
                { key: 'specifications', label: 'Specifications', icon: <BarChart3 className="w-4 h-4" /> },
                { key: 'reviews', label: 'Reviews', icon: <MessageCircle className="w-4 h-4" /> }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`flex-1 flex items-center justify-center gap-2 py-6 px-6 border-b-2 font-medium text-sm transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'border-emerald-500 text-emerald-600 bg-emerald-50'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  {tab.key === 'reviews' && (
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs">
                      {currentProduct.reviewCount}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="bg-white rounded-b-2xl shadow-lg p-8">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Product Description</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Experience premium quality with our carefully crafted {currentProduct.name}. 
                    Designed with attention to detail and built to exceed expectations, this product 
                    combines functionality with style to deliver an exceptional user experience.
                  </p>
                </div>
                
                {selectedCategory === 'clothing' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Shirt className="w-5 h-5 text-rose-600" />
                        Care Instructions
                      </h4>
                      <ul className="space-y-2">
                        {['Machine wash cold with like colors', 'Do not bleach', 'Tumble dry low heat', 'Iron on medium heat if needed', 'Do not dry clean', 'Wash inside out to preserve print'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-green-600" />
                        Material Benefits
                      </h4>
                      <ul className="space-y-2">
                        {['Breathable organic cotton fabric', 'Moisture-wicking properties', 'Hypoallergenic and skin-friendly', 'Durable construction', 'Eco-friendly production', 'Comfortable all-day wear'].map((use, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span className="text-gray-700">{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {selectedCategory === 'beauty' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        Key Ingredients
                      </h4>
                      <ul className="space-y-2">
                        {['Retinol - Anti-aging powerhouse', 'Hyaluronic Acid - Deep hydration', 'Vitamin E - Antioxidant protection', 'Niacinamide - Pore refinement', 'Peptides - Skin firmness', 'Botanical extracts - Soothing'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <TestTube className="w-5 h-5 text-blue-600" />
                        Usage Instructions
                      </h4>
                      <ul className="space-y-2">
                        {['Cleanse face thoroughly', 'Apply 2-3 drops to face', 'Gently massage until absorbed', 'Use in evening routine only', 'Follow with moisturizer', 'Always use sunscreen in AM'].map((use, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span className="text-gray-700">{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {selectedCategory === 'electronics' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Package className="w-5 h-5 text-blue-600" />
                        What's in the Box
                      </h4>
                      <ul className="space-y-2">
                        {['Premium Wireless Headphones', 'USB-C Charging Cable', '3.5mm Audio Cable', 'Premium Carrying Case', 'Quick Start Guide', 'Warranty Card'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Headphones className="w-5 h-5 text-purple-600" />
                        Perfect For
                      </h4>
                      <ul className="space-y-2">
                        {['Music Enthusiasts', 'Professional Audio Work', 'Gaming & Entertainment', 'Travel & Commuting', 'Video Conferences', 'Content Creation'].map((use, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span className="text-gray-700">{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {selectedCategory === 'home' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Sun className="w-5 h-5 text-orange-600" />
                        Installation Guide
                      </h4>
                      <ul className="space-y-2">
                        {['Clean the mounting surface', 'Remove adhesive backing', 'Apply LED strip firmly', 'Connect to power adapter', 'Download smart app', 'Follow app setup guide'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                        <Palette className="w-5 h-5 text-pink-600" />
                        Smart Features
                      </h4>
                      <ul className="space-y-2">
                        {['Voice control compatibility', 'Music sync and rhythm', 'Timer and scheduling', 'Scene and mood lighting', 'DIY mode customization', 'Energy saving auto-off'].map((use, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            <span className="text-gray-700">{use}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === 'specifications' && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  
                  {selectedCategory === 'electronics' && (
                    <>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-emerald-800">Brand</span>
                        <span className="text-gray-700 group-hover:text-emerald-700 font-medium">{currentProduct.brand}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-emerald-800">Model</span>
                        <span className="text-gray-700 group-hover:text-emerald-700 font-medium">{currentProduct.model}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-emerald-800">Type</span>
                        <span className="text-gray-700 group-hover:text-emerald-700 font-medium">Over-Ear Wireless</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-emerald-800">Connectivity</span>
                        <span className="text-gray-700 group-hover:text-emerald-700 font-medium">Bluetooth 5.3, USB-C</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-emerald-800">Battery Life</span>
                        <span className="text-gray-700 group-hover:text-emerald-700 font-medium">30 hours (ANC On)</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-emerald-800">Weight</span>
                        <span className="text-gray-700 group-hover:text-emerald-700 font-medium">280g</span>
                      </div>
                    </>
                  )}

                  {selectedCategory === 'clothing' && (
                    <>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-rose-800">Brand</span>
                        <span className="text-gray-700 group-hover:text-rose-700 font-medium">{currentProduct.brand}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-rose-800">Material</span>
                        <span className="text-gray-700 group-hover:text-rose-700 font-medium">100% Organic Cotton</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-rose-800">Fit</span>
                        <span className="text-gray-700 group-hover:text-rose-700 font-medium">Regular Fit</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-rose-800">Care</span>
                        <span className="text-gray-700 group-hover:text-rose-700 font-medium">Machine Washable</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-rose-800">Origin</span>
                        <span className="text-gray-700 group-hover:text-rose-700 font-medium">Made in Bangladesh</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-rose-50 hover:to-pink-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-rose-800">Certification</span>
                        <span className="text-gray-700 group-hover:text-rose-700 font-medium">GOTS Certified</span>
                      </div>
                    </>
                  )}

                  {selectedCategory === 'beauty' && (
                    <>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-purple-800">Brand</span>
                        <span className="text-gray-700 group-hover:text-purple-700 font-medium">{currentProduct.brand}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-purple-800">Active Ingredient</span>
                        <span className="text-gray-700 group-hover:text-purple-700 font-medium">Retinol 1%</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-purple-800">Volume</span>
                        <span className="text-gray-700 group-hover:text-purple-700 font-medium">30ml / 1 fl oz</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-purple-800">Skin Type</span>
                        <span className="text-gray-700 group-hover:text-purple-700 font-medium">All Skin Types</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-purple-800">pH Level</span>
                        <span className="text-gray-700 group-hover:text-purple-700 font-medium">5.5 - 6.5</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-purple-800">Shelf Life</span>
                        <span className="text-gray-700 group-hover:text-purple-700 font-medium">24 months</span>
                      </div>
                    </>
                  )}

                  {selectedCategory === 'home' && (
                    <>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-orange-800">Brand</span>
                        <span className="text-gray-700 group-hover:text-orange-700 font-medium">{currentProduct.brand}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-orange-800">LED Type</span>
                        <span className="text-gray-700 group-hover:text-orange-700 font-medium">SMD 5050 RGB</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-orange-800">Length</span>
                        <span className="text-gray-700 group-hover:text-orange-700 font-medium">5 Meters</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-orange-800">Power</span>
                        <span className="text-gray-700 group-hover:text-orange-700 font-medium">24W / 12V DC</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-orange-800">Colors</span>
                        <span className="text-gray-700 group-hover:text-orange-700 font-medium">16 Million RGB</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 group">
                        <span className="font-semibold text-gray-900 group-hover:text-orange-800">Lifespan</span>
                        <span className="text-gray-700 group-hover:text-orange-700 font-medium">50,000+ Hours</span>
                      </div>
                    </>
                  )}
                </div>
                
                <div className={`mt-8 p-6 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 rounded-2xl border border-emerald-200`}>
                  <h4 className="text-lg font-semibold text-emerald-800 mb-3">Additional Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Verified className="w-4 h-4 text-emerald-600" />
                      <span>Quality Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span>International Shipping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span>Released: January 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-600" />
                      <span>Award Winning Design</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-8 animate-in fade-in duration-500">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
                  <button className={`bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300`}>
                    Write Review
                  </button>
                </div>

                {/* Review Summary */}
                <div className={`bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-6 border border-emerald-200`}>
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-emerald-600">{currentProduct.rating}</div>
                      <div className="flex items-center justify-center gap-1 my-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(currentProduct.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">{currentProduct.reviewCount} reviews</div>
                    </div>
                    
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-medium w-8">{rating}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className={`bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} h-2 rounded-full transition-all duration-700`}
                              style={{ width: `${rating === 5 ? 75 : rating === 4 ? 20 : rating === 3 ? 3 : rating === 2 ? 1 : 1}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600 w-12">{rating === 5 ? '75%' : rating === 4 ? '20%' : '3%'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-6">
                  {[
                    { id: 1, user: 'John D.', rating: 5, comment: 'Amazing quality and fast delivery!', date: '2024-01-15', verified: true },
                    { id: 2, user: 'Sarah M.', rating: 4, comment: 'Great value for money, highly recommended.', date: '2024-01-12', verified: true },
                    { id: 3, user: 'Mike R.', rating: 5, comment: 'Perfect for my needs, excellent customer service.', date: '2024-01-10', verified: false }
                  ].map((review) => (
                    <div key={review.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} rounded-full flex items-center justify-center text-white font-semibold`}>
                            {review.user.charAt(0)}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-gray-900">{review.user}</span>
                              {review.verified && (
                                <Verified className="w-4 h-4 text-blue-500" title="Verified Purchase" />
                              )}
                            </div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                      <div className="flex items-center gap-4 mt-4">
                        <button className="flex items-center gap-1 text-gray-500 hover:text-emerald-600 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm">Helpful (12)</span>
                        </button>
                        <button className="text-gray-500 hover:text-emerald-600 transition-colors text-sm">
                          Reply
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Load More Reviews */}
                <div className="text-center">
                  <button className="bg-white border-2 border-emerald-300 text-emerald-700 px-8 py-3 rounded-xl font-semibold hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300 hover:scale-105">
                    Load More Reviews
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-${1505740420928 + item}?w=400&h=400&fit=crop`}
                    alt={`Related product ${item}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-red-500 hover:text-white transition-all duration-300">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                    Related {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} {item}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(4.{8-item})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">৳{(2999 + item * 1000).toLocaleString()}</span>
                    <button className={`bg-gradient-to-r ${currentProduct.gradientFrom} ${currentProduct.gradientVia} ${currentProduct.gradientTo} text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300`}>
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;