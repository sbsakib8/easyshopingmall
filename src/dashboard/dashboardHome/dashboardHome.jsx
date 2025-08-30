"use client"
import { useState, useEffect } from "react";
import { 
  Home, ShoppingCart, Package, Users, Settings, 
  Bell, Search, Menu, X, TrendingUp, Eye,
  Star, DollarSign, Calendar, BarChart3,
  Filter, Download, RefreshCw, Plus,
  Edit, Trash2, ChevronDown, ChevronRight,
  Image, Tag, Truck, MessageSquare,
  FileText, Shield, Globe, Mail,
  Clock, ArrowUp, Activity, Zap
} from 'lucide-react';  

const DashboardHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const statsCards = [
    {
      title: 'Total Users',
      value: '7,174',
      change: '+12.5%',
      changeType: 'positive',
      icon: Users,
      gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
      shadowColor: 'shadow-emerald-500/25'
    },
    {
      title: 'Total Orders',
      value: '356',
      change: '+8.2%',
      changeType: 'positive',
      icon: ShoppingCart,
      gradient: 'from-purple-400 via-violet-500 to-indigo-600',
      shadowColor: 'shadow-purple-500/25'
    },
    {
      title: 'Total Products',
      value: '104',
      change: '+3.1%',
      changeType: 'positive',
      icon: Package,
      gradient: 'from-blue-400 via-sky-500 to-cyan-600',
      shadowColor: 'shadow-blue-500/25'
    },
    {
      title: 'Total Revenue',
      value: '৳2,45,320',
      change: '+15.3%',
      changeType: 'positive',
      icon: DollarSign,
      gradient: 'from-amber-400 via-orange-500 to-red-500',
      shadowColor: 'shadow-amber-500/25'
    }
  ];

  const quickActions = [
    { label: 'Add Product', icon: Plus, gradient: 'from-green-400 to-emerald-500', description: 'Create new product' },
    { label: 'View Orders', icon: Eye, gradient: 'from-blue-400 to-indigo-500', description: 'Check recent orders' },
    { label: 'Analytics', icon: BarChart3, gradient: 'from-purple-400 to-violet-500', description: 'View insights' },
    { label: 'Customers', icon: Users, gradient: 'from-pink-400 to-rose-500', description: 'Manage customers' },
    { label: 'Settings', icon: Settings, gradient: 'from-gray-400 to-slate-500', description: 'Configure system' },
    { label: 'Reports', icon: FileText, gradient: 'from-indigo-400 to-purple-500', description: 'Generate reports' }
  ];

  const recentOrders = [
    { id: '#ORD-001', customer: 'John Doe', amount: '৳1,299', status: 'Completed', time: '2 hours ago', avatar: 'JD' },
    { id: '#ORD-002', customer: 'Jane Smith', amount: '৳899', status: 'Processing', time: '4 hours ago', avatar: 'JS' },
    { id: '#ORD-003', customer: 'Mike Johnson', amount: '৳2,199', status: 'Shipped', time: '6 hours ago', avatar: 'MJ' },
    { id: '#ORD-004', customer: 'Sarah Wilson', amount: '৳1,599', status: 'Pending', time: '8 hours ago', avatar: 'SW' }
  ];

  const topProducts = [
    { name: 'Wireless Headphones', sales: '245 sold', price: '৳3,299', rating: 4.8, trend: '+15%' },
    { name: 'Smart Watch', sales: '189 sold', price: '৳12,999', rating: 4.7, trend: '+12%' },
    { name: 'Phone Case', sales: '156 sold', price: '৳599', rating: 4.9, trend: '+8%' },
    { name: 'Bluetooth Speaker', sales: '134 sold', price: '৳2,199', rating: 4.6, trend: '+5%' }
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <main className={`transition-all  duration-500 ease-out ${sidebarOpen ? 'ml-72' : 'ml-0 md:ml-20'} mt-16 p-4 sm:p-6 lg:p-8`}>
        
        {/* Welcome Section */}
        <div className="mb-8 animate-fadeInDown">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-6 sm:p-8 text-white shadow-2xl shadow-blue-500/20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 animate-float"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                    Welcome back, Sakib! 👋
                  </h1>
                  <p className="text-blue-100 text-sm sm:text-base">
                    Here's what's happening with your store today
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 text-right">
                  <p className="text-lg font-semibold">
                    {currentTime.toLocaleDateString('en-BD')}
                  </p>
                  <p className="text-blue-200 text-sm">
                    {currentTime.toLocaleTimeString('en-BD')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {statsCards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative bg-white/80 backdrop-blur-sm p-6 rounded-3xl border border-white/40 shadow-lg ${card.shadowColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 animate-slideInUp overflow-hidden`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${card.gradient} shadow-lg ${card.shadowColor} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <card.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1 text-green-600">
                    <ArrowUp className="w-4 h-4" />
                    <span className="text-sm font-bold">{card.change}</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {card.title}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {card.value}
                  </p>
                  <p className="text-xs text-gray-500">
                    from last month
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Quick Actions
            </h2>
            <div className="flex items-center space-x-2 text-gray-500">
              <Activity className="w-4 h-4" />
              <span className="text-sm">Live Dashboard</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {quickActions.map((action, index) => (
              <button
                key={action.label}
                className="group relative bg-white/70 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/30 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-bounceIn overflow-hidden"
                style={{
                  animationDelay: `${(index + 6) * 100}ms`
                }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${action.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-r ${action.gradient} flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <action.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <p className="text-sm font-bold text-gray-900 mb-1">
                    {action.label}
                  </p>
                  <p className="text-xs text-gray-500 hidden sm:block">
                    {action.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 mb-8">
          
          {/* Recent Orders */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl shadow-blue-500/10 p-6 sm:p-8 animate-slideInLeft overflow-hidden relative">
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Recent Orders
                  </h3>
                </div>
                <button className="group flex items-center space-x-2 text-blue-600 hover:text-purple-600 text-sm font-semibold transition-all duration-300 hover:scale-105">
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              <div className="space-y-4">
                {recentOrders.map((order, index) => (
                  <div 
                    key={order.id} 
                    className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-gray-50/80 to-blue-50/60 hover:from-blue-50/80 hover:to-purple-50/80 border border-gray-100/60 hover:border-blue-200/60 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 transform hover:scale-102 animate-slideInRight"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <span className="text-white font-bold text-sm">{order.avatar}</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <p className="text-sm font-bold text-gray-900">
                            {order.id}
                          </p>
                          <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                            order.status === 'Completed' ? 'bg-green-100 text-green-700' :
                            order.status === 'Processing' ? 'bg-yellow-100 text-yellow-700' :
                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                            'bg-gray-100 text-gray-700'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          {order.customer} • {order.time}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        {order.amount}
                      </p>
                      <div className="flex items-center space-x-1 text-green-600">
                        <TrendingUp className="w-3 h-3" />
                        <span className="text-xs font-medium">Active</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl shadow-purple-500/10 p-6 sm:p-8 animate-slideInRight overflow-hidden relative">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Top Selling Products
                  </h3>
                </div>
                <button className="group flex items-center space-x-2 text-purple-600 hover:text-pink-600 text-sm font-semibold transition-all duration-300 hover:scale-105">
                  <span>View All</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
              
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div 
                    key={product.name} 
                    className="group flex items-center justify-between p-4 rounded-2xl bg-gradient-to-r from-gray-50/80 to-purple-50/60 hover:from-purple-50/80 hover:to-pink-50/80 border border-gray-100/60 hover:border-purple-200/60 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 transform hover:scale-102 animate-slideInLeft"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                          {product.name}
                        </p>
                        <div className="flex items-center space-x-3 mt-1">
                          <p className="text-xs text-gray-500">
                            {product.sales}
                          </p>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-600 font-medium">
                              {product.rating}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {product.price}
                      </p>
                      <div className="flex items-center space-x-1 text-green-600">
                        <ArrowUp className="w-3 h-3" />
                        <span className="text-xs font-bold">{product.trend}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          
          {/* Sales Chart Preview */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl shadow-indigo-500/10 p-6 sm:p-8 animate-fadeInUp overflow-hidden relative">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full -translate-y-20 translate-x-20"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    Sales Overview
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">This Month</span>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>
              
              {/* Mock Chart Area */}
              <div className="h-48 sm:h-64 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-2xl border border-blue-100/50 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-gray-600 font-medium">Chart will be rendered here</p>
                  <p className="text-sm text-gray-500">Sales analytics visualization</p>
                </div>
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-white/40 shadow-xl shadow-green-500/10 p-6 sm:p-8 animate-slideInRight overflow-hidden relative">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-green-400/10 to-teal-400/10 rounded-full translate-y-16 -translate-x-16"></div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 rounded-xl bg-gradient-to-r from-green-500 to-teal-600 shadow-lg">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Live Activity
                </h3>
              </div>
              
              <div className="space-y-4">
                {[
                  { action: 'New order received', time: '2 min ago', type: 'order' },
                  { action: 'Product updated', time: '5 min ago', type: 'product' },
                  { action: 'Customer registered', time: '12 min ago', type: 'user' },
                  { action: 'Payment processed', time: '18 min ago', type: 'payment' },
                  { action: 'Review submitted', time: '25 min ago', type: 'review' }
                ].map((activity, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50/60 hover:bg-gradient-to-r hover:from-green-50/80 hover:to-teal-50/80 border border-gray-100/40 hover:border-green-200/60 transition-all duration-300 transform hover:scale-105 animate-slideInUp"
                    style={{animationDelay: `${index * 50}ms`}}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'order' ? 'bg-gradient-to-r from-blue-400 to-blue-500' :
                      activity.type === 'product' ? 'bg-gradient-to-r from-purple-400 to-purple-500' :
                      activity.type === 'user' ? 'bg-gradient-to-r from-green-400 to-green-500' :
                      activity.type === 'payment' ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                      'bg-gradient-to-r from-pink-400 to-pink-500'
                    } shadow-md`}>
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mb-6 animate-fadeInUp">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors duration-300" />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border-0 bg-white/70 backdrop-blur-sm text-gray-700 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/20 shadow-lg shadow-blue-500/5 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 animate-fadeInUp" style={{animationDelay: '0.8s'}}>
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl p-6 text-white shadow-xl shadow-green-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Zap className="w-6 h-6" />
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Live</span>
              </div>
              <p className="text-2xl font-bold mb-1">98.5%</p>
              <p className="text-sm text-green-100">Server Uptime</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl p-6 text-white shadow-xl shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Globe className="w-6 h-6" />
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">+12%</span>
              </div>
              <p className="text-2xl font-bold mb-1">1,432</p>
              <p className="text-sm text-blue-100">Active Visitors</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl p-6 text-white shadow-xl shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <Star className="w-6 h-6" />
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Excellent</span>
              </div>
              <p className="text-2xl font-bold mb-1">4.8</p>
              <p className="text-sm text-purple-100">Avg. Rating</p>
            </div>
          </div>
        </div>

      </main>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
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

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-10px) rotate(1deg);
          }
          66% {
            transform: translateY(5px) rotate(-1deg);
          }
        }

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

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-fadeInDown {
          animation: fadeInDown 0.8s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
          opacity: 0;
          animation-fill-mode: forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInRight {
          animation: slideInRight 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounceIn {
          animation: bounceIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        /* Glassmorphism effects */
        .glass {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
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
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }

        /* Responsive animations for mobile */
        @media (max-width: 768px) {
          .animate-slideInLeft,
          .animate-slideInRight,
          .animate-slideInUp,
          .animate-bounceIn {
            animation-duration: 0.4s;
          }
          
          .animate-fadeInDown,
          .animate-fadeInUp {
            animation-duration: 0.5s;
          }
        }

        /* Enhanced hover effects */
        .hover-glow:hover {
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.2),
                      0 6px 12px rgba(139, 92, 246, 0.15);
        }

        /* Gradient animations */
        .gradient-animate {
          background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #ec4899, #06b6d4);
          background-size: 400% 400%;
          animation: gradientShift 4s ease infinite;
        }

        /* Particle effects */
        @keyframes particle1 {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-100px) translateX(50px) rotate(180deg); opacity: 0; }
        }

        @keyframes particle2 {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-80px) translateX(-30px) rotate(-180deg); opacity: 0; }
        }

        .particle {
          animation: particle1 3s ease-out infinite;
        }

        .particle:nth-child(2n) {
          animation: particle2 4s ease-out infinite;
          animation-delay: 1s;
        }

        /* Enhanced mobile responsiveness */
        @media (max-width: 640px) {
          .grid {
            gap: 1rem;
          }
          
          .p-6 {
            padding: 1rem;
          }
          
          .p-8 {
            padding: 1.5rem;
          }
          
          .text-3xl {
            font-size: 1.5rem;
          }
          
          .text-2xl {
            font-size: 1.25rem;
          }
        }

        /* Loading shimmer effect */
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }

        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          background-size: 200px 100%;
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}

export default DashboardHome