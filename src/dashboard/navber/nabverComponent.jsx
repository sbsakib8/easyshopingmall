"use client";
import React, { useState, useEffect } from 'react';
import { 
  Home, ShoppingCart, Package, Users, Settings, 
  Bell, Search, Menu, X, TrendingUp, Eye,
  Star, DollarSign, Calendar, BarChart3,
  Filter, Download, RefreshCw, Plus,
  Edit, Trash2, ChevronDown, ChevronRight,
  Image, Tag, Truck, MessageSquare,
  FileText, Shield, Globe, Mail,
  Clock
} from 'lucide-react';
import Link from 'next/link';
import LayoutWrapDashboard from '@/app/(dashboard)/LayoutWrapDashboard';

const DashboardNebver = ({children}) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [expandedMenus, setExpandedMenus] = useState({});
  const [notifications, setNotifications] = useState(3);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const toggleSubmenu = (menuId) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: Home,
      path: '/dashboard'
    },
    {
      id: 'products',
      label: 'Products',
      icon: Package,
      submenu: [
        { path:"products/allproducts", id: '11', label: 'All Products', icon: Package },
        { path:"products/addproduct", id: '12', label: 'Add Product', icon: Plus },
        { path:"products/categories", id: '13', label: 'Categories', icon: Tag },
        { path:"products/brands", id: '14', label: 'Brands', icon: Star },
        { path:"products/inventory", id: '15', label: 'Inventory', icon: BarChart3 }
      ]
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: ShoppingCart,
      submenu: [
        { path:"allproducts", id: 'all-orders', label: 'All Orders', icon: ShoppingCart },
        { path:"allproducts", id: 'pending-orders', label: 'Pending Orders', icon: Clock },
        { path:"allproducts", id: 'shipped-orders', label: 'Shipped Orders', icon: Truck },
        { path:"allproducts", id: 'returns', label: 'Returns', icon: RefreshCw }
      ]
    },
    {
      id: 'customers',
      label: 'Customers',
      icon: Users,
      submenu: [
        { path:"allproducts", id: 'all-customers', label: 'All Customers', icon: Users },
        { path:"allproducts", id: 'customer-groups', label: 'Customer Groups', icon: Users },
        { path:"allproducts", id: 'reviews', label: 'Reviews', icon: MessageSquare }
      ]
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: TrendingUp,
      submenu: [
        { path:"allproducts", id: 'sales-report', label: 'Sales Report', icon: BarChart3 },
        { path:"allproducts", id: 'product-analytics', label: 'Product Analytics', icon: Package },
        { path:"allproducts", id: 'customer-analytics', label: 'Customer Analytics', icon: Users },
        { path:"allproducts", id: 'traffic-analytics', label: 'Traffic Analytics', icon: Globe }
      ]
    },
    {
      id: 'marketing',
      label: 'Marketing',
      icon: TrendingUp,
      submenu: [
        { path:"allproducts", id: 'campaigns', label: 'Campaigns', icon: Mail },
        { path:"allproducts", id: 'coupons', label: 'Coupons', icon: Tag },
        { path:"allproducts", id: 'banners', label: 'Banners', icon: Image },
        { path:"allproducts", id: 'newsletters', label: 'Newsletters', icon: Mail }
      ]
    },
    {
      id: 'content',
      label: 'Content',
      icon: FileText,
      submenu: [
        { path:"allproducts", id: 'pages', label: 'Pages', icon: FileText },
        { path:"allproducts", id: 'blogs', label: 'Blogs', icon: FileText },
        { path:"allproducts", id: 'media', label: 'Media Library', icon: Image }
      ]
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      submenu: [
        { path:"allproducts", id: 'general', label: 'General Settings', icon: Settings },
        { path:"allproducts", id: 'payment', label: 'Payment Settings', icon: DollarSign },
        { path:"allproducts", id: 'shipping', label: 'Shipping Settings', icon: Truck },
        { path:"allproducts", id: 'security', label: 'Security', icon: Shield }
      ]
    }
  ];

  return (
    <div className=" bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-blue-500/5">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side */}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleSidebar}
                className="group p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Menu className="w-5 h-5 text-white group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              <div className="flex items-center space-x-3 animate-fadeIn">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 animate-pulse">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-violet-600 bg-clip-text text-transparent">
                    ECOMMERCE
                  </h1>
                  <p className="text-xs text-gray-500 font-medium">Admin Dashboard</p>
                </div>
              </div>
            </div>

            {/* Center - Search */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Search products, orders, customers..."
                  className="w-full pl-12 pr-4 py-3 rounded-2xl border-0 bg-white/70 backdrop-blur-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-3">
              <button className="relative p-3 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 hover:from-orange-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <Bell className="w-5 h-5 text-white group-hover:animate-bounce" />
                {notifications > 0 && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-red-500 to-rose-500 text-white text-xs rounded-full flex items-center justify-center animate-bounce shadow-lg">
                    {notifications}
                  </span>
                )}
              </button>

              <div className="flex items-center space-x-3 pl-4 border-l border-gray-200/60">
                <div className="relative group">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-400 via-teal-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/25 transform group-hover:scale-110 transition-all duration-300">
                    <span className="text-white font-bold text-sm group-hover:animate-pulse">SH</span>
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-30 blur transition-all duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <p className="text-sm font-semibold text-gray-800">
                    Sakib Hossain
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    Super Admin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 z-40 h-[calc(100vh-4rem)] transition-all duration-500 ease-out ${
          sidebarOpen ? 'w-72' : 'w-0 md:w-20'
        } bg-white/95 backdrop-blur-xl border-r border-white/20 shadow-2xl shadow-blue-500/10 overflow-hidden`}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-violet-500/5 pointer-events-none"></div>
        
        <div className="flex flex-col h-full relative z-10">
          <div className="flex-1 px-4 py-6 overflow-y-auto">
            <nav className="space-y-3">
              {menuItems.map((item, index) => (
                <div key={item.id} className="animate-slideInLeft" style={{animationDelay: `${index * 0.1}s`}}>
                  <button
                    onClick={() => {
                      setActiveMenu(item.id);
                      if (item.submenu) {
                        toggleSubmenu(item.id);
                      }
                    }}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                      activeMenu === item.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-xl shadow-blue-500/25 transform scale-105'
                        : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105'
                    }`}
                  >
                    {/* Animated background */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${activeMenu === item.id ? 'opacity-30' : ''}`}></div>
                    
                    <Link href={`${item.path}`} className="flex items-center space-x-4 relative z-10">
                      <div className={`p-2 rounded-xl transition-all duration-300 ${
                        activeMenu === item.id 
                          ? 'bg-white/20 shadow-lg' 
                          : 'group-hover:bg-blue-100/50'
                      }`}>
                        <item.icon className={`w-5 h-5 transition-all duration-300 ${
                          activeMenu === item.id 
                            ? 'text-white scale-110' 
                            : 'text-gray-600 group-hover:text-blue-600 group-hover:scale-110'
                        }`} />
                      </div>
                      {(sidebarOpen || !item.submenu) && (
                        <span className={`transition-all duration-300 ${
                          sidebarOpen ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-4'
                        } font-medium`}>
                          {item.label}
                        </span>
                      )}
                    </Link>
                    {item.submenu && sidebarOpen && (
                      <ChevronRight
                        className={`w-5 h-5 transition-all duration-300 relative z-10 ${
                          expandedMenus[item.id] ? 'rotate-90 text-blue-600' : 'text-gray-400'
                        } ${activeMenu === item.id ? 'text-white' : ''}`}
                      />
                    )}
                  </button>
                  
                  {/* Submenu */}
                  {item.submenu && sidebarOpen && (
                    <div className={`mt-3 ml-6 space-y-2 overflow-hidden transition-all duration-500 transform ${
                      expandedMenus[item.id] 
                        ? 'max-h-96 opacity-100 translate-y-0' 
                        : 'max-h-0 opacity-0 -translate-y-4'
                    }`}>
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          href={`/dashboard/${subItem.path}`}
                          key={subItem.id}
                          onClick={() => setActiveMenu(subItem.id)}
                          className={`group flex items-center space-x-3 px-4 py-2.5 text-sm rounded-xl transition-all duration-300 transform hover:scale-105 ${
                            activeMenu === subItem.id
                              ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg shadow-blue-500/20'
                              : 'text-gray-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 hover:shadow-md'
                          } animate-slideInRight`}
                          style={{animationDelay: `${subIndex * 0.05}s`}}
                        >
                          <div className={`p-1.5 rounded-lg transition-all duration-300 ${
                            activeMenu === subItem.id 
                              ? 'bg-white/20' 
                              : 'group-hover:bg-blue-100/60'
                          }`}>
                            <subItem.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                          </div>
                          <span className="font-medium">{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-white/20">
            {sidebarOpen && (
              <div className="relative p-4 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 group overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="flex items-center space-x-3 relative z-10">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg group-hover:animate-bounce">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">
                      Upgrade to Pro
                    </p>
                    <p className="text-xs text-white/80">
                      Unlock premium features
                    </p>
                  </div>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
                <div className="absolute bottom-3 right-4 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
              </div>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <LayoutWrapDashboard/>
     
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.4s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(241, 245, 249, 0.5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }

        /* Mobile responsive adjustments */
        @media (max-width: 768px) {
          .animate-slideInLeft {
            animation-duration: 0.4s;
          }
        }

        /* Glassmorphism effect */
        .glass {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }

        /* Gradient text animation */
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-animate {
          background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4);
          background-size: 400% 400%;
          animation: gradientShift 4s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Hover glow effects */
        .glow-on-hover:hover {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5),
                      0 0 40px rgba(139, 92, 246, 0.3),
                      0 0 60px rgba(236, 72, 153, 0.2);
        }
      `}</style>
    </div>
  );
};

export default DashboardNebver;