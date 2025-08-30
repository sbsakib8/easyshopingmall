"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Star, Heart, Share2, ShoppingCart, Plus, Minus, Truck, Shield, RotateCcw, 
  CheckCircle, Eye, Zap, Award, Clock, ChevronLeft, ChevronRight, Package,
  MessageCircle, ThumbsUp, Gift, CreditCard, Smartphone, Headphones,
  Volume2, VolumeX, Play, Pause, BarChart3, TrendingUp, Users, Verified,
  Calendar, MapPin, Filter, Search, X, ZoomIn, ZoomOut, MoreHorizontal
} from 'lucide-react';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [isZoomed, setIsZoomed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState('standard');
  const [showImageModal, setShowImageModal] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCompare, setShowCompare] = useState(false);
  const imageRef = useRef(null);

  const product = {
    id: 1,
    name: "Premium Wireless Headphones Pro Max Elite",
    brand: "AudioTech",
    model: "AT-PM2024",
    price: 12999,
    originalPrice: 16999,
    discount: 24,
    rating: 4.8,
    reviewCount: 1247,
    soldCount: 2847,
    viewCount: 15420,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&h=800&fit=crop"
    ],
    colors: [
      { name: 'Midnight Black', value: '#1a1a1a', available: true, stock: 25 },
      { name: 'Pearl White', value: '#f8f9fa', available: true, stock: 18 },
      { name: 'Rose Gold', value: '#e8b4b8', available: false, stock: 0 },
      { name: 'Ocean Blue', value: '#4a90e2', available: true, stock: 12 },
      { name: 'Forest Green', value: '#10b981', available: true, stock: 8 }
    ],
    sizes: [
      { size: 'S', label: 'Small', available: true },
      { size: 'M', label: 'Medium', available: true },
      { size: 'L', label: 'Large', available: true },
      { size: 'XL', label: 'Extra Large', available: false }
    ],
    variants: [
      { id: 'standard', name: 'Standard Edition', price: 12999, features: ['Basic Features'] },
      { id: 'pro', name: 'Pro Edition', price: 15999, features: ['Pro Features', 'Extended Warranty'] },
      { id: 'premium', name: 'Premium Edition', price: 18999, features: ['All Features', '3 Year Warranty', 'Premium Case'] }
    ],
    stock: 47,
    features: [
      { icon: <Volume2 className="w-4 h-4" />, text: 'Active Noise Cancellation' },
      { icon: <Clock className="w-4 h-4" />, text: '30H Battery Life' },
      { icon: <Zap className="w-4 h-4" />, text: 'Fast Charging (5min = 3hrs)' },
      { icon: <Smartphone className="w-4 h-4" />, text: 'Bluetooth 5.3' },
      { icon: <Award className="w-4 h-4" />, text: 'Premium Materials' },
      { icon: <Shield className="w-4 h-4" />, text: 'IPX4 Water Resistant' }
    ],
    description: "Experience the pinnacle of audio excellence with our Premium Wireless Headphones Pro Max Elite. Engineered with cutting-edge noise cancellation technology, premium materials, and intelligent sound processing for an unparalleled listening experience that adapts to your environment.",
    specifications: {
      'Brand': 'AudioTech',
      'Model': 'AT-PM2024',
      'Type': 'Over-Ear Wireless',
      'Connectivity': 'Bluetooth 5.3, USB-C, 3.5mm',
      'Battery Life': '30 hours (ANC On), 40 hours (ANC Off)',
      'Charging Time': '2 hours (Quick charge: 5min = 3hrs)',
      'Weight': '280g',
      'Drivers': '40mm Dynamic Drivers',
      'Frequency Response': '20Hz - 40kHz',
      'Impedance': '32Ω',
      'Warranty': '2 Years International'
    },
    reviews: [
      { id: 1, user: 'John D.', rating: 5, comment: 'Amazing sound quality!', date: '2024-01-15', verified: true },
      { id: 2, user: 'Sarah M.', rating: 4, comment: 'Great battery life', date: '2024-01-12', verified: true },
      { id: 3, user: 'Mike R.', rating: 5, comment: 'Perfect for travel', date: '2024-01-10', verified: false }
    ]
  };

  // Auto-play image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!showImageModal && !isZoomed) {
        setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
        setSelectedImage((prev) => (prev + 1) % product.images.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [showImageModal, isZoomed, product.images.length]);

  const handleImageChange = (index) => {
    setSelectedImage(index);
    setCurrentImageIndex(index);
    setIsImageLoading(true);
  };

  const handleQuantityChange = (type) => {
    if (type === 'increase' && quantity < product.stock) {
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
    const next = (selectedImage + 1) % product.images.length;
    handleImageChange(next);
  };

  const prevImage = () => {
    const prev = selectedImage === 0 ? product.images.length - 1 : selectedImage - 1;
    handleImageChange(prev);
  };

  return (
    <div className="min-h-screen py-10 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
          <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3">
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
              src={product.images[selectedImage]} 
              alt={product.name}
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
          <span>Audio</span>
          <ChevronRight className="w-4 h-4" />
          <span>Headphones</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Images Section */}
          <div className="space-y-6">
            {/* Main Image */}
            <div className="relative group">
              <div className="aspect-square rounded-3xl overflow-hidden bg-white shadow-2xl ring-1 ring-black/10">
                <img 
                  ref={imageRef}
                  src={product.images[selectedImage]}
                  alt={product.name}
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
                    <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
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
                    -{product.discount}% OFF
                  </span>
                  <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Fast Delivery
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
                  <button className="p-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {selectedImage + 1} / {product.images.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((image, index) => (
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
                    alt={`${product.name} ${index + 1}`}
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
                  <span className="text-sm font-semibold">{product.viewCount.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500">Views</p>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="flex items-center justify-center gap-1 text-blue-600 mb-1">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">{product.soldCount.toLocaleString()}</span>
                </div>
                <p className="text-xs text-gray-500">Sold</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-purple-600 mb-1">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-semibold">{product.reviewCount}</span>
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
                  <span className="text-emerald-600 font-semibold text-sm">{product.brand}</span>
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs text-gray-500">Model: {product.model}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full text-xs font-medium">
                    Best Seller
                  </span>
                  <Verified className="w-4 h-4 text-blue-500" />
                </div>
              </div>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 transition-colors ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="ml-2 text-gray-700 font-semibold">{product.rating}</span>
                </div>
                <span className="text-gray-500">({product.reviewCount} reviews)</span>
                <div className="flex items-center gap-1 text-emerald-600">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm font-medium">98% recommended</span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-gray-50 to-emerald-50 rounded-2xl p-6">
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                  ৳{product.price.toLocaleString()}
                </span>
                <span className="text-xl text-gray-500 line-through">৳{product.originalPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Save ৳{(product.originalPrice - product.price).toLocaleString()}
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
                <span className="text-gray-600">({product.stock} available)</span>
              </div>
              <div className="flex items-center gap-2 text-orange-600">
                <Package className="w-4 h-4" />
                <span className="text-sm font-medium">Only {product.stock} left!</span>
              </div>
            </div>

            {/* Variant Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Choose Edition</h3>
              <div className="space-y-3">
                {product.variants.map((variant) => (
                  <label
                    key={variant.id}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      selectedVariant === variant.id
                        ? 'border-emerald-500 bg-emerald-50 shadow-md'
                        : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="radio"
                        name="variant"
                        value={variant.id}
                        checked={selectedVariant === variant.id}
                        onChange={() => setSelectedVariant(variant.id)}
                        className="w-4 h-4 text-emerald-600"
                      />
                      <div>
                        <span className="font-semibold text-gray-900">{variant.name}</span>
                        <div className="flex gap-2 mt-1">
                          {variant.features.map((feature, idx) => (
                            <span key={idx} className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="font-bold text-emerald-600">৳{variant.price.toLocaleString()}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => color.available && setSelectedColor(color.name)}
                    disabled={!color.available}
                    className={`relative p-1 rounded-full transition-all duration-300 ${
                      selectedColor === color.name 
                        ? 'ring-2 ring-emerald-500 ring-offset-2 scale-110' 
                        : 'hover:scale-105'
                    } ${!color.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <div 
                      className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                      style={{ backgroundColor: color.value }}
                    />
                    {selectedColor === color.name && (
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
              {selectedColor && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Selected: {selectedColor}</span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">
                    {product.colors.find(c => c.name === selectedColor)?.stock} in stock
                  </span>
                </div>
              )}
            </div>

            {/* Size Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Size</h3>
              <div className="grid grid-cols-4 gap-3">
                {product.sizes.map((sizeInfo) => (
                  <button
                    key={sizeInfo.size}
                    onClick={() => sizeInfo.available && setSelectedSize(sizeInfo.size)}
                    disabled={!sizeInfo.available}
                    className={`p-3 rounded-xl border-2 transition-all duration-300 ${
                      selectedSize === sizeInfo.size
                        ? 'border-emerald-500 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white shadow-lg transform scale-105'
                        : sizeInfo.available
                        ? 'border-gray-300 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50'
                        : 'border-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-semibold">{sizeInfo.size}</div>
                      <div className="text-xs opacity-75">{sizeInfo.label}</div>
                    </div>
                  </button>
                ))}
              </div>
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
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Total Amount</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 bg-clip-text text-transparent">
                    ৳{(product.variants.find(v => v.id === selectedVariant)?.price * quantity || product.price * quantity).toLocaleString()}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={handleAddToCart}
                  className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:via-green-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 group"
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
            <div className="bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-6 space-y-4 border border-emerald-100">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-emerald-600" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
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
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
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
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded mx-auto mb-2"></div>
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
                      {product.reviewCount}
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
                    {product.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">What's in the Box</h4>
                    <ul className="space-y-2">
                      {['Premium Wireless Headphones Pro Max Elite', 'USB-C Charging Cable', '3.5mm Audio Cable', 'Premium Carrying Case', 'Quick Start Guide', 'Warranty Card'].map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">Perfect For</h4>
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
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === 'specifications' && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 transition-all duration-300 group">
                      <span className="font-semibold text-gray-900 group-hover:text-emerald-800">{key}</span>
                      <span className="text-gray-700 group-hover:text-emerald-700 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 rounded-2xl border border-emerald-200">
                  <h4 className="text-lg font-semibold text-emerald-800 mb-3">Additional Information</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Verified className="w-4 h-4 text-emerald-600" />
                      <span>CE & FCC Certified</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600" />
                      <span>Made in Germany</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span>Released: January 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-emerald-600" />
                      <span>CES Innovation Award 2024</span>
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
                  <button className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300">
                    Write Review
                  </button>
                </div>

                {/* Review Summary */}
                <div className="bg-gradient-to-r from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                  <div className="flex items-center gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-emerald-600">{product.rating}</div>
                      <div className="flex items-center justify-center gap-1 my-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">{product.reviewCount} reviews</div>
                    </div>
                    
                    <div className="flex-1">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center gap-3 mb-2">
                          <span className="text-sm font-medium w-8">{rating}★</span>
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 h-2 rounded-full transition-all duration-700"
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
                  {product.reviews.map((review) => (
                    <div key={review.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold">
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
                    Related Headphones {item}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ))}
                    <span className="text-xs text-gray-500 ml-1">(4.{8-item})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-emerald-600">৳{(9999 + item * 1000).toLocaleString()}</span>
                    <button className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white p-2 rounded-lg hover:shadow-lg transition-all duration-300">
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