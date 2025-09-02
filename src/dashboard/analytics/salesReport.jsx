"use client"

import { useState, useEffect } from "react"

// Mock data for the dashboard
const mockSalesData = {
  totalRevenue: 125000,
  totalOrders: 1250,
  averageOrderValue: 100,
  conversionRate: 3.2,
  monthlyData: [
    { month: "Jan", revenue: 15000, orders: 150 },
    { month: "Feb", revenue: 18000, orders: 180 },
    { month: "Mar", revenue: 22000, orders: 220 },
    { month: "Apr", revenue: 19000, orders: 190 },
    { month: "May", revenue: 25000, orders: 250 },
    { month: "Jun", revenue: 26000, orders: 260 },
  ],
  topProducts: [
    { name: "Wireless Headphones", sales: 450, revenue: 22500 },
    { name: "Smart Watch", sales: 320, revenue: 19200 },
    { name: "Laptop Stand", sales: 280, revenue: 14000 },
    { name: "USB-C Cable", sales: 200, revenue: 4000 },
  ],
  recentOrders: [
    { id: "#12345", customer: "John Doe", amount: 150, status: "Completed" },
    { id: "#12346", customer: "Jane Smith", amount: 89, status: "Processing" },
    { id: "#12347", customer: "Mike Johnson", amount: 220, status: "Shipped" },
    { id: "#12348", customer: "Sarah Wilson", amount: 75, status: "Pending" },
  ],
}

const SalesReportDashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("30d")
  const [isLoading, setIsLoading] = useState(true)
  const [animationDelay, setAnimationDelay] = useState(0)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const StatCard = ({ title, value, change, icon, delay = 0 }) => (
    <div
      className={`group relative p-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 backdrop-blur-sm border border-gray-700/60 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-500 hover:-translate-y-1 animate-slide-in-up overflow-hidden`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800/30 to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-400 text-sm font-medium tracking-wide uppercase mb-3">{title}</p>
          <p className="text-3xl font-bold text-white mb-2 tracking-tight">{value}</p>
          <p className="text-emerald-400 text-sm font-semibold bg-emerald-900/30 px-3 py-1 rounded-full inline-block border border-emerald-700/50">
            {change}
          </p>
        </div>
        <div className="text-5xl opacity-30 group-hover:opacity-50  duration-300 group-hover:scale-110 transform transition-transform">
          {icon}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/70 to-gray-300/70 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  )

  const ChartBar = ({ height, label, value, delay = 0 }) => (
    <div className="flex flex-col items-center space-y-3 group">
      <div
        className="relative w-10 bg-gray-800 rounded-t-xl overflow-hidden shadow-inner border border-gray-700"
        style={{ height: "140px" }}
      >
        <div
          className="absolute bottom-0 w-full bg-gradient-to-t from-gray-600 via-gray-500 to-gray-400 rounded-t-xl transition-all duration-1000 ease-out group-hover:from-white/80 group-hover:via-gray-300 group-hover:to-gray-200 shadow-lg"
          style={{
            height: `${height}%`,
            animationDelay: `${delay}ms`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 pointer-events-none" />
      </div>
      <span className="text-xs text-gray-400 font-medium">{label}</span>
      <span className="text-xs font-bold text-gray-200 bg-gray-800/80 px-2 py-1 rounded-lg border border-gray-700">
        {formatCurrency(value)}
      </span>
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-gray-700 border-t-white rounded-full animate-spin mx-auto mb-6 shadow-lg"></div>
          <p className="text-gray-300 animate-pulse text-lg font-medium">Loading Sales Report...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* header */}
      <header className="sticky top-0  bg-gradient-to-r from-black/90 via-gray-900/90 to-black/90 backdrop-blur-xl border-b border-gray-700/60 shadow-xl">
        <div className=" mx-auto px-7 lg:px-28 py-6">
          <div className="flex items-center justify-between">
            <div className="animate-fade-in">
              <h1 className=" text-2xl lg:text-4xl font-bold text-white tracking-tight">Sales Dashboard</h1>
              <p className="text-gray-300 mt-2 text-lg">Track your ecommerce performance with precision</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 items-center space-x-4 animate-fade-in">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-gray-800 border border-gray-600 text-gray-200 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/50 transition-all duration-200 shadow-sm font-medium"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <button className="bg-gradient-to-r from-gray-700 to-black hover:from-gray-600 hover:to-gray-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl border border-gray-600">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10">
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 animate-fade-in">Key Performance Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard
              title="Total Revenue"
              value={formatCurrency(mockSalesData.totalRevenue)}
              change="+12.5% from last month"
              icon="💰"
              delay={100}
            />
            <StatCard
              title="Total Orders"
              value={mockSalesData.totalOrders.toLocaleString()}
              change="+8.2% from last month"
              icon="📦"
              delay={200}
            />
            <StatCard
              title="Average Order Value"
              value={formatCurrency(mockSalesData.averageOrderValue)}
              change="+3.1% from last month"
              icon="💳"
              delay={300}
            />
            <StatCard
              title="Conversion Rate"
              value={`${mockSalesData.conversionRate}%`}
              change="+0.5% from last month"
              icon="📈"
              delay={400}
            />
          </div>
        </section>

        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Revenue Chart */}
            <div
              className="p-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 backdrop-blur-sm border border-gray-700/60 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "500ms" }}
            >
              <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
                Monthly Revenue Trends
              </h3>
              <div className="flex items-end justify-between space-x-3 h-48 px-4">
                {mockSalesData.monthlyData.map((data, index) => (
                  <ChartBar
                    key={data.month}
                    height={(data.revenue / 26000) * 100}
                    label={data.month}
                    value={data.revenue}
                    delay={600 + index * 100}
                  />
                ))}
              </div>
            </div>

            {/* Orders Chart */}
            <div
              className="p-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 backdrop-blur-sm border border-gray-700/60 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 animate-slide-in-up"
              style={{ animationDelay: "600ms" }}
            >
              <h3 className="text-xl font-bold text-white mb-8 flex items-center">
                <span className="w-3 h-3 bg-gray-300 rounded-full mr-3"></span>
                Monthly Order Volume
              </h3>
              <div className="flex items-end justify-between space-x-3 h-48 px-4">
                {mockSalesData.monthlyData.map((data, index) => (
                  <ChartBar
                    key={data.month}
                    height={(data.orders / 260) * 100}
                    label={data.month}
                    value={data.orders}
                    delay={700 + index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Top Products */}
          <div
            className="p-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 backdrop-blur-sm border border-gray-700/60 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 animate-slide-in-up"
            style={{ animationDelay: "800ms" }}
          >
            <h3 className="text-xl font-bold text-white mb-8 flex items-center">
              <span className="w-3 h-3 bg-emerald-400 rounded-full mr-3"></span>
              Top Performing Products
            </h3>
            <div className="space-y-4">
              {mockSalesData.topProducts.map((product, index) => (
                <div
                  key={product.name}
                  className="flex items-center justify-between p-5 bg-gray-800/60 rounded-xl hover:bg-gray-700/60 transition-all duration-200 hover:scale-[1.02] border border-gray-700"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-white rounded-full"></div>
                    <div>
                      <p className="font-semibold text-white">{product.name}</p>
                      <p className="text-sm text-gray-400">{product.sales} units sold</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white text-lg">{formatCurrency(product.revenue)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Orders */}
          <div
            className="p-8 bg-gradient-to-br from-gray-900 via-black to-gray-800 backdrop-blur-sm border border-gray-700/60 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 animate-slide-in-up"
            style={{ animationDelay: "900ms" }}
          >
            <h3 className="text-xl font-bold text-white mb-8 flex items-center">
              <span className="w-3 h-3 bg-gray-300 rounded-full mr-3"></span>
              Recent Order Activity
            </h3>
            <div className="space-y-4">
              {mockSalesData.recentOrders.map((order, index) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-5 bg-gray-800/60 rounded-xl hover:bg-gray-700/60 transition-all duration-200 hover:scale-[1.02] border border-gray-700"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-gradient-to-r from-gray-400 to-white rounded-full"></div>
                    <div>
                      <p className="font-semibold text-white">{order.id}</p>
                      <p className="text-sm text-gray-400">{order.customer}</p>
                    </div>
                  </div>
                  <div className="text-right flex items-center space-x-3">
                    <p className="font-bold text-white text-lg">{formatCurrency(order.amount)}</p>
                    <span
                      className={`text-xs px-3 py-1.5 rounded-full font-semibold ${
                        order.status === "Completed"
                          ? "bg-emerald-900/50 text-emerald-300 border border-emerald-700"
                          : order.status === "Processing"
                            ? "bg-amber-900/50 text-amber-300 border border-amber-700"
                            : order.status === "Shipped"
                              ? "bg-blue-900/50 text-blue-300 border border-blue-700"
                              : "bg-gray-800/50 text-gray-300 border border-gray-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div
            className="p-10 bg-gradient-to-br from-gray-900/90 via-black to-gray-800/90 backdrop-blur-sm border border-gray-700/60 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-300 animate-slide-in-up"
            style={{ animationDelay: "1000ms" }}
          >
            <h3 className="text-2xl font-bold text-white mb-10 text-center">Performance Insights & Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-800/40 rounded-2xl hover:bg-gray-700/40 transition-all duration-300 hover:scale-105 border border-gray-700 shadow-sm">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="font-bold text-white mb-3 text-lg">Growth Momentum</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Revenue is up 12.5% compared to last month, showing strong growth momentum across all categories.
                </p>
              </div>
              <div className="text-center p-8 bg-gray-800/40 rounded-2xl hover:bg-gray-700/40 transition-all duration-300 hover:scale-105 border border-gray-700 shadow-sm">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="font-bold text-white mb-3 text-lg">Top Performer</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Wireless Headphones are your best-selling product this month with exceptional conversion rates.
                </p>
              </div>
              <div className="text-center p-8 bg-gray-800/40 rounded-2xl hover:bg-gray-700/40 transition-all duration-300 hover:scale-105 border border-gray-700 shadow-sm">
                <div className="text-4xl mb-4">💡</div>
                <h4 className="font-bold text-white mb-3 text-lg">Strategic Recommendation</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Consider increasing inventory for high-performing products to capitalize on current demand trends.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

     
    </div>
  )
}

export default SalesReportDashboard
