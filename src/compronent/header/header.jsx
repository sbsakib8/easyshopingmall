"use client";
import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Package,
  Star,
  Zap
} from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartCount, setCartCount] = useState(4);
  const [wishlistCount, setWishlistCount] = useState(2);
  const [language, setLanguage] = useState('English');
  const [currency, setCurrency] = useState('USD');
  
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 40,
    hours: 0,
    minutes: 24,
    seconds: 42
  });

  // Categories data
  const categories = [
    { name: 'Electronics', icon: '📱', subcategories: ['Smartphones', 'Laptops', 'Headphones', 'Cameras'] },
    { name: 'Fashion', icon: '👕', subcategories: ['Men\'s Clothing', 'Women\'s Clothing', 'Shoes', 'Accessories'] },
    { name: 'Home & Kitchen', icon: '🏠', subcategories: ['Furniture', 'Appliances', 'Decor', 'Kitchen Tools'] },
    { name: 'Sports & Fitness', icon: '⚽', subcategories: ['Exercise Equipment', 'Sports Gear', 'Outdoor', 'Fitness Accessories'] },
    { name: 'Books & Media', icon: '📚', subcategories: ['Books', 'Movies', 'Music', 'Games'] },
    { name: 'Beauty & Health', icon: '💄', subcategories: ['Skincare', 'Makeup', 'Hair Care', 'Health Supplements'] },
    { name: 'Automotive', icon: '🚗', subcategories: ['Car Parts', 'Accessories', 'Tools', 'Maintenance'] },
    { name: 'Baby & Kids', icon: '🍼', subcategories: ['Baby Care', 'Toys', 'Kids Clothing', 'Strollers'] }
  ];

  // Navigation items
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Vendors', href: '#' },
    { name: 'Pages', href: '#' },
    { name: 'Blog', href: '#', badge: 'New' },
    { name: 'Dashboard', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Top Gradient Banner with Enhanced Design */}
      <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 h-[60px] hidden lg:block text-white text-sm py-3 px-4 relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-2 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-8 left-32 w-1 h-1 bg-yellow-300 rounded-full animate-bounce"></div>
          <div className="absolute top-4 right-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-7 right-40 w-1 h-1 bg-yellow-300 rounded-full animate-bounce delay-500"></div>
        </div>
        
        <div className="px-32 mx-auto text-center flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span className="font-semibold tracking-wide">FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/30 backdrop-blur-sm rounded-lg px-3 py-1 border border-white/20 shadow-lg">
              <div className="flex items-center space-x-1 animate-pulse">
                <span className="font-bold text-lg">{timeLeft.days.toString().padStart(2, '0')}</span>
                <span className="text-xs opacity-90">Days</span>
              </div>
              <div className="w-px h-4 bg-white/40"></div>
              <div className="flex items-center space-x-1 animate-pulse delay-75">
                <span className="font-bold text-lg">{timeLeft.hours.toString().padStart(2, '0')}</span>
                <span className="text-xs opacity-90">Hour</span>
              </div>
              <div className="w-px h-4 bg-white/40"></div>
              <div className="flex items-center space-x-1 animate-pulse delay-150">
                <span className="font-bold text-lg">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                <span className="text-xs opacity-90">Min</span>
              </div>
              <div className="w-px h-4 bg-white/40"></div>
              <div className="flex items-center space-x-1 animate-pulse delay-200">
                <span className="font-bold text-lg text-yellow-300">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                <span className="text-xs opacity-90">Sec</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
            <span className="font-medium">Need help? Call Us: +258 3268 21485</span>
          </div>
        </div>
      </div>

      {/* Secondary Top Bar with Subtle Gradient */}
      <div className="bg-gradient-to-r h-[80px] from-slate-50 to-gray-100 hidden lg:block border-b border-gray-200/80 text-sm py-3 px-4 backdrop-blur-sm">
        <div className="  px-5 py-3 lg:px-32 mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-2 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group">
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group">
              My Account
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group">
              Wishlist
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <div className="flex items-center space-x-2 text-gray-500">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse"></div>
              <span>We deliver to your everyday from 7:00 to 22:00</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {/* Language Dropdown with Enhanced Styling */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-200/60 shadow-sm hover:shadow-md"
              >
                <span className="font-medium">{language}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white/95 backdrop-blur-md border border-gray-200/60 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-5 duration-200">
                  {['English', 'বাংলা', 'العربية'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {setLanguage(lang); setIsLanguageOpen(false);}}
                      className="block w-full text-left px-4 py-2.5 text-sm hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-600 transition-all duration-200 font-medium"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Currency Dropdown with Enhanced Styling */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                className="flex items-center space-x-1 text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-gray-200/60 shadow-sm hover:shadow-md"
              >
                <span className="font-medium">{currency}</span>
                <ChevronDown size={14} className={`transition-transform duration-300 ${isCurrencyOpen ? 'rotate-180' : ''}`} />
              </button>
              {isCurrencyOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white/95 backdrop-blur-md border border-gray-200/60 rounded-xl shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-5 duration-200 ">
                  {['USD', 'BDT', 'EUR'].map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {setCurrency(curr); setIsCurrencyOpen(false);}}
                      className="block w-full text-left px-4 py-2.5 text-sm hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-600 transition-all duration-200 font-medium"
                    >
                      {curr}n
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-105 relative group font-medium">
              Track Order
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header with Glass Effect */}
      <header className="bg-white/95 h-[100px] backdrop-blur-md shadow-lg sticky top-0 z-40 border-b border-gray-200/50">
        <div className=" mx-auto lg:px-32">
          <div className="flex items-center justify-between py-4">
            {/* Enhanced Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <div className="w-7 h-7 bg-white rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                      <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                </div>
                <div className="transform group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">EASY</span>
                  <span className="text-2xl font-bold text-gray-800">SHOPPING</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#467r44] to-teal-600 bg-clip-text text-transparent">MALL</span>
                  
                </div>
              </div>
            </div>

            {/* Enhanced Search Bar */}
            <div className="hidden md:flex flex-1 max-w-3xl mx-8">
              <div className="flex w-full shadow-lg rounded-2xl overflow-hidden border border-gray-200/60 bg-white/90 backdrop-blur-sm">
                {/* Categories Button */}
                <div className="relative">
                  <button
                    onClick={toggleCategories}
                    className="flex items-center space-x-2 bg-gradient-to-r from-gray-100 to-gray-50 px-6 py-4 hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-600 transition-all duration-300 group"
                  >
                    <Menu size={18} className="group-hover:rotate-90 transition-transform duration-300" />
                    <span className="font-semibold">Categories</span>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Enhanced Categories Dropdown */}
                  {isCategoriesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md border border-gray-200/60 rounded-2xl shadow-2xl z-50 animate-in fade-in slide-in-from-top-5 duration-300 overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-4">
                        <h3 className="text-white font-bold text-lg flex items-center space-x-2">
                          <Star className="w-5 h-5" />
                          <span>Shop by Category</span>
                        </h3>
                      </div>
                      <div className="grid grid-cols-1 py-2 max-h-96 overflow-y-auto">
                        {categories.map((category, index) => (
                          <div key={index} className="group relative">
                            <button className="flex items-center space-x-3 w-full px-6 py-4 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 group">
                              <span className="text-xl transform group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                              <span className="font-semibold text-gray-700 group-hover:text-emerald-600">{category.name}</span>
                              <ChevronDown size={14} className="ml-auto transform -rotate-90 group-hover:text-emerald-600 transition-colors duration-300" />
                            </button>
                            
                            {/* Subcategories */}
                            <div className="absolute left-full top-0 w-64 bg-white/95 backdrop-blur-md border border-gray-200/60 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ml-2 overflow-hidden">
                              <div className="bg-gradient-to-r from-gray-50 to-white p-3 border-b border-gray-200/60">
                                <h4 className="font-semibold text-gray-800">{category.name}</h4>
                              </div>
                              <div className="py-2">
                                {category.subcategories.map((sub, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href="#"
                                    className="block px-4 py-3 text-gray-600 hover:text-emerald-600 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-200 font-medium"
                                  >
                                    {sub}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Search Input */}
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search for products, categories or brands"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-6 py-4 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 font-medium"
                  />
                </div>

                {/* Search Button */}
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 flex items-center space-x-2 group shadow-lg">
                  <Search size={18} className="group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-semibold">Search</span>
                </button>
              </div>
            </div>

            {/* Enhanced Right Side Icons */}
            <div className="flex items-center space-x-6">
              {/* Account */}
              <div className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-emerald-600 transition-all duration-300 cursor-pointer group">
                <div className="p-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 group-hover:from-emerald-100 group-hover:to-teal-100 transition-all duration-300 shadow-sm">
                  <User size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">Account</div>
                </div>
              </div>

              {/* Wishlist */}
              <div className="relative cursor-pointer group">
                <div className="flex items-center space-x-2 text-gray-700 group-hover:text-emerald-600 transition-all duration-300">
                  <div className="relative p-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 group-hover:from-pink-100 group-hover:to-rose-100 transition-all duration-300 shadow-sm">
                    <Heart size={20} className="group-hover:scale-110 transition-transform duration-300 group-hover:text-pink-600" />
                    {wishlistCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-bounce shadow-lg">
                        {wishlistCount}
                      </span>
                    )}
                  </div>
                  <div className="hidden md:block">
                    <div className="text-xs text-gray-500 font-medium">Wishlist</div>
                  </div>
                </div>
              </div>

              {/* Cart */}
              <div className="relative cursor-pointer group">
                <div className="flex items-center space-x-2 text-gray-700 group-hover:text-emerald-600 transition-all duration-300">
                  <div className="relative p-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 group-hover:from-emerald-100 group-hover:to-teal-100 transition-all duration-300 shadow-sm">
                    <ShoppingCart size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse shadow-lg">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <div className="hidden md:block">
                    <div className="text-xs text-gray-500 font-medium">Cart</div>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-3 rounded-xl bg-gradient-to-r from-gray-100 to-gray-50 hover:from-emerald-100 hover:to-teal-100 text-gray-700 hover:text-emerald-600 transition-all duration-300 shadow-sm"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="flex shadow-lg rounded-2xl overflow-hidden bg-white/90 backdrop-blur-sm border border-gray-200/60">
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent focus:outline-none text-gray-700 placeholder-gray-500 font-medium"
                />
              </div>
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300">
                <Search size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Menu */}
        <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 border-t border-gray-200/60 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <nav className="hidden md:flex items-center justify-between py-4">
              <div className="flex items-center space-x-8">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="relative flex items-center space-x-1 text-gray-700 hover:text-emerald-600 font-semibold transition-all duration-300 group hover:scale-105"
                  >
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-sm animate-pulse">
                        {item.badge}
                      </span>
                    )}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </a>
                ))}
              </div>
              
              <div className="flex items-center space-x-6">
                <span className="text-gray-600 font-semibold flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-500 animate-spin" />
                  <span>Trending Products</span>
                </span>
                <div className="bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white px-6 py-3 rounded-2xl flex items-center space-x-3 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-xl transform hover:scale-105">
                  <Package size={16} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span className="font-bold">Get 30% Discount Now</span>
                  <span className="bg-white text-emerald-600 px-3 py-1 rounded-full text-sm font-bold shadow-sm animate-bounce">Sale</span>
                </div>
              </div>
            </nav>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/60 animate-in slide-in-from-top-5 duration-300">
            <nav className="px-4 py-4 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center justify-between py-4 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-600 rounded-xl transition-all duration-300 font-medium shadow-sm"
                >
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-pulse">
                      {item.badge}
                    </span>
                  )}
                </a>
              ))}
              
              <div className="border-t border-gray-200/60 pt-4 mt-4">
                <button
                  onClick={toggleCategories}
                  className="flex items-center justify-between w-full py-4 px-4 text-gray-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 hover:text-emerald-600 rounded-xl transition-all duration-300 font-medium shadow-sm"
                >
                  <span>Categories</span>
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isCategoriesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isCategoriesOpen && (
                  <div className="mt-2 ml-4 space-y-1 bg-gradient-to-r from-gray-50 to-white rounded-xl p-2">
                    {categories.map((category, index) => (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center space-x-3 py-3 px-3 text-gray-600 hover:text-emerald-600 transition-all duration-200 rounded-lg hover:bg-white font-medium"
                      >
                        <span className="text-lg">{category.icon}</span>
                        <span>{category.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;