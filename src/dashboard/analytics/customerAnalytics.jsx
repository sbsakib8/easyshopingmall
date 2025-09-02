"use client"

import { useState, useEffect } from "react"

// Mock data for customer analytics
const mockCustomerData = {
  totalCustomers: 15420,
  newCustomers: 1250,
  returningCustomers: 8930,
  customerRetentionRate: 68.5,
  averageLifetimeValue: 485,
  averageOrderValue: 125,
  customerGrowthData: [
    { month: "Jan", new: 980, returning: 1200, total: 2180 },
    { month: "Feb", new: 1120, returning: 1350, total: 2470 },
    { month: "Mar", new: 1050, returning: 1480, total: 2530 },
    { month: "Apr", new: 1180, returning: 1520, total: 2700 },
    { month: "May", new: 1250, returning: 1680, total: 2930 },
    { month: "Jun", new: 1320, returning: 1750, total: 3070 },
  ],
  demographics: {
    ageGroups: [
      { range: "18-24", percentage: 15, count: 2313 },
      { range: "25-34", percentage: 35, count: 5397 },
      { range: "35-44", percentage: 28, count: 4318 },
      { range: "45-54", percentage: 15, count: 2313 },
      { range: "55+", percentage: 7, count: 1079 },
    ],
    locations: [
      { country: "United States", percentage: 45, count: 6939 },
      { country: "Canada", percentage: 18, count: 2776 },
      { country: "United Kingdom", percentage: 12, count: 1850 },
      { country: "Germany", percentage: 10, count: 1542 },
      { country: "Others", percentage: 15, count: 2313 },
    ],
  },
  topCustomers: [
    { name: "Sarah Johnson", orders: 45, spent: 2250, status: "VIP" },
    { name: "Michael Chen", orders: 38, spent: 1890, status: "Premium" },
    { name: "Emma Davis", orders: 32, spent: 1680, status: "Premium" },
    { name: "James Wilson", orders: 28, spent: 1420, status: "Regular" },
  ],
  behaviorMetrics: {
    averageSessionDuration: "4m 32s",
    bounceRate: 24.5,
    pagesPerSession: 3.8,
    conversionRate: 3.2,
  },
}

 const CustomerAnalyticsDashboard=()=> {
  const [selectedPeriod, setSelectedPeriod] = useState("30d")
  const [isLoading, setIsLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("overview")

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount)
  }

  const StatCard = ({
    title,
    value,
    change,
    icon,
    delay = 0,
    trend = "up",
  }) => (
    <div
      className={`p-6 bg-gradient-to-br from-card to-card/80 border-border hover:border-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/10 animate-slide-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-foreground mt-2">{value}</p>
          <p
            className={`text-sm mt-1 ${
              trend === "up" ? "text-green-400" : trend === "down" ? "text-red-400" : "text-yellow-400"
            }`}
          >
            {change}
          </p>
        </div>
        <div className="text-4xl opacity-20">{icon}</div>
      </div>
    </div>
  )

  const ChartBar = ({
    height,
    label,
    value,
    delay = 0,
    color = "accent",
  }) => (
    <div className="flex flex-col items-center space-y-2">
      <div className="relative w-8 bg-muted/20 rounded-t-lg overflow-hidden" style={{ height: "120px" }}>
        <div
          className={`absolute bottom-0 w-full bg-gradient-to-t from-${color} to-${color}/70 rounded-t-lg transition-all duration-1000 ease-out hover:from-${color}/80 hover:to-${color}`}
          style={{
            height: `${height}%`,
            animationDelay: `${delay}ms`,
          }}
        />
      </div>
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-xs font-semibold text-foreground">{value.toLocaleString()}</span>
    </div>
  )

  const DemographicBar = ({
    label,
    percentage,
    count,
    delay = 0,
  }) => (
    <div className="space-y-2 animate-slide-in-left" style={{ animationDelay: `${delay}ms` }}>
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{label}</span>
        <span className="text-sm text-muted-foreground">{percentage}%</span>
      </div>
      <div className="w-full bg-muted/20 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-accent to-accent/70 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-xs text-muted-foreground">{count.toLocaleString()} customers</div>
    </div>
  )

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-card flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent/20 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground animate-pulse-slow">Loading Customer Analytics...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-card">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-background to-card/50 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="animate-fade-in">
              <h1 className="text-3xl font-bold text-foreground">Customer Analytics Dashboard</h1>
              <p className="text-muted-foreground mt-1">Understand your customer behavior and demographics</p>
            </div>
            <div className="flex items-center space-x-4 animate-fade-in">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-card border border-border text-foreground px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all duration-200"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
                <option value="1y">Last year</option>
              </select>
              <button className="bg-accent hover:bg-accent/80 text-accent-foreground transition-all duration-200 hover:scale-105">
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-card/50 p-1 rounded-lg animate-fade-in">
            {["overview", "demographics", "behavior", "retention"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 capitalize ${
                  activeTab === tab
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <>
            {/* Key Metrics */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6 animate-fade-in">Key Customer Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                  title="Total Customers"
                  value={mockCustomerData.totalCustomers.toLocaleString()}
                  change="+8.2% from last month"
                  icon="👥"
                  delay={100}
                />
                <StatCard
                  title="New Customers"
                  value={mockCustomerData.newCustomers.toLocaleString()}
                  change="+12.5% from last month"
                  icon="🆕"
                  delay={200}
                />
                <StatCard
                  title="Returning Customers"
                  value={mockCustomerData.returningCustomers.toLocaleString()}
                  change="+5.8% from last month"
                  icon="🔄"
                  delay={300}
                />
                <StatCard
                  title="Retention Rate"
                  value={`${mockCustomerData.customerRetentionRate}%`}
                  change="+2.1% from last month"
                  icon="📈"
                  delay={400}
                />
                <StatCard
                  title="Avg Lifetime Value"
                  value={formatCurrency(mockCustomerData.averageLifetimeValue)}
                  change="+15.3% from last month"
                  icon="💎"
                  delay={500}
                />
                <StatCard
                  title="Avg Order Value"
                  value={formatCurrency(mockCustomerData.averageOrderValue)}
                  change="+3.7% from last month"
                  icon="🛒"
                  delay={600}
                />
              </div>
            </section>

            {/* Customer Growth Chart */}
            <section className="mb-12">
              <div
                className="p-6 bg-gradient-to-br from-card to-card/80 border-border animate-slide-in-up"
                style={{ animationDelay: "700ms" }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Customer Growth Trend</h3>
                <div className="flex items-end justify-between space-x-2 h-48">
                  {mockCustomerData.customerGrowthData.map((data, index) => (
                    <div key={data.month} className="flex flex-col items-center space-y-2">
                      <div
                        className="relative w-12 bg-muted/20 rounded-t-lg overflow-hidden"
                        style={{ height: "160px" }}
                      >
                        <div
                          className="absolute bottom-0 w-full bg-gradient-to-t from-chart-1 to-chart-1/70 rounded-t-lg transition-all duration-1000 ease-out"
                          style={{
                            height: `${(data.new / 1400) * 100}%`,
                            animationDelay: `${800 + index * 100}ms`,
                          }}
                        />
                        <div
                          className="absolute bottom-0 w-full bg-gradient-to-t from-accent to-accent/70 rounded-t-lg transition-all duration-1000 ease-out"
                          style={{
                            height: `${(data.total / 3200) * 100}%`,
                            animationDelay: `${900 + index * 100}ms`,
                          }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">{data.month}</span>
                      <div className="text-center">
                        <div className="text-xs font-semibold text-foreground">{data.total.toLocaleString()}</div>
                        <div className="text-xs text-chart-1">{data.new} new</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Total Customers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-chart-1 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">New Customers</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Top Customers */}
            <section>
              <div
                className="p-6 bg-gradient-to-br from-card to-card/80 border-border animate-slide-in-up"
                style={{ animationDelay: "800ms" }}
              >
                <h3 className="text-xl font-semibold text-foreground mb-6">Top Customers</h3>
                <div className="space-y-4">
                  {mockCustomerData.topCustomers.map((customer, index) => (
                    <div
                      key={customer.name}
                      className="flex items-center justify-between p-4 bg-background/50 rounded-lg hover:bg-background/70 transition-all duration-200 hover:scale-102"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                          <span className="text-accent font-semibold">{customer.name.charAt(0)}</span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{customer.name}</p>
                          <p className="text-sm text-muted-foreground">{customer.orders} orders</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-foreground">{formatCurrency(customer.spent)}</p>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            customer.status === "VIP"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : customer.status === "Premium"
                                ? "bg-purple-500/20 text-purple-400"
                                : "bg-blue-500/20 text-blue-400"
                          }`}
                        >
                          {customer.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {/* Demographics Tab */}
        {activeTab === "demographics" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Age Demographics */}
            <div className="p-6 bg-gradient-to-br from-card to-card/80 border-border animate-slide-in-left">
              <h3 className="text-xl font-semibold text-foreground mb-6">Age Demographics</h3>
              <div className="space-y-4">
                {mockCustomerData.demographics.ageGroups.map((group, index) => (
                  <DemographicBar
                    key={group.range}
                    label={group.range}
                    percentage={group.percentage}
                    count={group.count}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>

            {/* Location Demographics */}
            <div className="p-6 bg-gradient-to-br from-card to-card/80 border-border animate-slide-in-right">
              <h3 className="text-xl font-semibold text-foreground mb-6">Geographic Distribution</h3>
              <div className="space-y-4">
                {mockCustomerData.demographics.locations.map((location, index) => (
                  <DemographicBar
                    key={location.country}
                    label={location.country}
                    percentage={location.percentage}
                    count={location.count}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Behavior Tab */}
        {activeTab === "behavior" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Avg Session Duration"
              value={mockCustomerData.behaviorMetrics.averageSessionDuration}
              change="+15.2% from last month"
              icon="⏱️"
              delay={100}
            />
            <StatCard
              title="Bounce Rate"
              value={`${mockCustomerData.behaviorMetrics.bounceRate}%`}
              change="-3.1% from last month"
              icon="📉"
              delay={200}
              trend="down"
            />
            <StatCard
              title="Pages per Session"
              value={mockCustomerData.behaviorMetrics.pagesPerSession.toString()}
              change="+8.7% from last month"
              icon="📄"
              delay={300}
            />
            <StatCard
              title="Conversion Rate"
              value={`${mockCustomerData.behaviorMetrics.conversionRate}%`}
              change="+5.4% from last month"
              icon="🎯"
              delay={400}
            />
          </div>
        )}

        {/* Retention Tab */}
        {activeTab === "retention" && (
          <div className="p-8 bg-gradient-to-br from-card to-card/80 border-border animate-scale-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Customer Retention Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background/30 rounded-lg hover:bg-background/50 transition-all duration-200">
                <div className="text-4xl mb-3">🔄</div>
                <h4 className="font-semibold text-foreground mb-2">Retention Rate</h4>
                <p className="text-3xl font-bold text-accent mb-2">{mockCustomerData.customerRetentionRate}%</p>
                <p className="text-muted-foreground text-sm">
                  {mockCustomerData.returningCustomers.toLocaleString()} customers returned
                </p>
              </div>
              <div className="text-center p-6 bg-background/30 rounded-lg hover:bg-background/50 transition-all duration-200">
                <div className="text-4xl mb-3">💎</div>
                <h4 className="font-semibold text-foreground mb-2">Lifetime Value</h4>
                <p className="text-3xl font-bold text-accent mb-2">
                  {formatCurrency(mockCustomerData.averageLifetimeValue)}
                </p>
                <p className="text-muted-foreground text-sm">Average customer lifetime value</p>
              </div>
              <div className="text-center p-6 bg-background/30 rounded-lg hover:bg-background/50 transition-all duration-200">
                <div className="text-4xl mb-3">📈</div>
                <h4 className="font-semibold text-foreground mb-2">Growth Rate</h4>
                <p className="text-3xl font-bold text-accent mb-2">+8.2%</p>
                <p className="text-muted-foreground text-sm">Monthly customer growth rate</p>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-background to-card/50 border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">© 2024 Ecommerce Customer Analytics Dashboard. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default CustomerAnalyticsDashboard