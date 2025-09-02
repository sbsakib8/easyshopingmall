"use client"

import { useState, useEffect } from "react"

// Traffic Analytics Dashboard Component
 const TrafficAnalyticsDashboard=()=> {
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d")
  const [isLoading, setIsLoading] = useState(true)

  // Mock data for analytics
  const [analyticsData, setAnalyticsData] = useState({
    totalVisitors: 0,
    pageViews: 0,
    bounceRate: 0,
    avgSessionDuration: 0,
    conversionRate: 0,
    revenue: 0,
  })

  const [chartData, setChartData] = useState([])
  const [topPages, setTopPages] = useState([])
  const [trafficSources, setTrafficSources] = useState([])
  const [deviceStats, setDeviceStats] = useState([])

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnalyticsData({
        totalVisitors: 24567,
        pageViews: 89432,
        bounceRate: 34.2,
        avgSessionDuration: 245,
        conversionRate: 3.8,
        revenue: 45678,
      })

      setChartData([
        { date: "2024-01-01", visitors: 1200, pageViews: 3400, revenue: 2400 },
        { date: "2024-01-02", visitors: 1800, pageViews: 4200, revenue: 3200 },
        { date: "2024-01-03", visitors: 2200, pageViews: 5100, revenue: 4100 },
        { date: "2024-01-04", visitors: 1900, pageViews: 4800, revenue: 3800 },
        { date: "2024-01-05", visitors: 2400, pageViews: 5600, revenue: 4500 },
        { date: "2024-01-06", visitors: 2800, pageViews: 6200, revenue: 5200 },
        { date: "2024-01-07", visitors: 3200, pageViews: 7100, revenue: 5800 },
      ])

      setTopPages([
        { page: "/products", views: 15420, percentage: 32.4 },
        { page: "/home", views: 12340, percentage: 26.1 },
        { page: "/categories", views: 8760, percentage: 18.5 },
        { page: "/checkout", views: 5430, percentage: 11.4 },
        { page: "/about", views: 3210, percentage: 6.8 },
      ])

      setTrafficSources([
        { source: "Organic Search", visitors: 12340, percentage: 45.2 },
        { source: "Direct", visitors: 8760, percentage: 32.1 },
        { source: "Social Media", visitors: 4320, percentage: 15.8 },
        { source: "Email", visitors: 1890, percentage: 6.9 },
      ])

      setDeviceStats([
        { device: "Desktop", users: 14567, percentage: 59.3 },
        { device: "Mobile", users: 8901, percentage: 36.2 },
        { device: "Tablet", users: 1099, percentage: 4.5 },
      ])

      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [selectedTimeRange])

  // Format numbers
  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + "M"
    if (num >= 1000) return (num / 1000).toFixed(1) + "K"
    return num.toString()
  }

  // Format duration
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  // Loading component
  const LoadingCard = () => (
    <div className="glass-effect rounded-xl p-6 animate-pulse">
      <div className="h-4 bg-muted rounded w-1/3 mb-4"></div>
      <div className="h-8 bg-muted rounded w-2/3 mb-2"></div>
      <div className="h-3 bg-muted rounded w-1/2"></div>
    </div>
  )

  return (
    <div className="min-h-screen gradient-bg p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="animate-fade-in">
          <div className="glass-effect rounded-xl p-6 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Traffic Analytics</h1>
                <p className="text-muted-foreground">Monitor your ecommerce performance and visitor insights</p>
              </div>

              {/* Time Range Selector */}
              <div className="flex gap-2">
                {["24h", "7d", "30d", "90d"].map((range) => (
                  <button
                    key={range}
                    onClick={() => setSelectedTimeRange(range)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedTimeRange === range
                        ? "bg-primary text-primary-foreground animate-pulse-glow"
                        : "bg-secondary/20 text-muted-foreground hover:bg-secondary/40"
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 animate-slide-up">
          {isLoading ? (
            Array(6)
              .fill(0)
              .map((_, i) => <LoadingCard key={i} />)
          ) : (
            <>
              <MetricCard
                title="Total Visitors"
                value={formatNumber(analyticsData.totalVisitors)}
                change="+12.5%"
                positive={true}
                icon="👥"
              />
              <MetricCard
                title="Page Views"
                value={formatNumber(analyticsData.pageViews)}
                change="+8.3%"
                positive={true}
                icon="📄"
              />
              <MetricCard
                title="Bounce Rate"
                value={`${analyticsData.bounceRate}%`}
                change="-2.1%"
                positive={true}
                icon="⚡"
              />
              <MetricCard
                title="Avg. Session"
                value={formatDuration(analyticsData.avgSessionDuration)}
                change="+15.2%"
                positive={true}
                icon="⏱️"
              />
              <MetricCard
                title="Conversion Rate"
                value={`${analyticsData.conversionRate}%`}
                change="+0.5%"
                positive={true}
                icon="🎯"
              />
              <MetricCard
                title="Revenue"
                value={`$${formatNumber(analyticsData.revenue)}`}
                change="+23.1%"
                positive={true}
                icon="💰"
              />
            </>
          )}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slide-up">
          {/* Visitors Chart */}
          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Visitors Trend</h3>
            {isLoading ? (
              <div className="h-64 bg-muted/20 rounded animate-pulse"></div>
            ) : (
              <div className="h-64 relative">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="visitorsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Chart lines */}
                  <polyline
                    fill="none"
                    stroke="rgb(16, 185, 129)"
                    strokeWidth="3"
                    points="50,150 100,120 150,100 200,110 250,80 300,60 350,40"
                    className="animate-[drawLine_2s_ease-out]"
                  />

                  {/* Fill area */}
                  <polygon
                    fill="url(#visitorsGradient)"
                    points="50,150 100,120 150,100 200,110 250,80 300,60 350,40 350,180 50,180"
                    className="animate-[fillArea_2s_ease-out_0.5s_both]"
                  />

                  {/* Data points */}
                  {chartData.map((point, index) => (
                    <circle
                      key={index}
                      cx={50 + index * 50}
                      cy={150 - point.visitors / 50}
                      r="4"
                      fill="rgb(16, 185, 129)"
                      className="animate-[popIn_0.5s_ease-out] hover:r-6 transition-all cursor-pointer"
                      style={{ animationDelay: `${index * 0.1 + 1}s` }}
                    />
                  ))}
                </svg>
              </div>
            )}
          </div>

          {/* Revenue Chart */}
          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Revenue Trend</h3>
            {isLoading ? (
              <div className="h-64 bg-muted/20 rounded animate-pulse"></div>
            ) : (
              <div className="h-64 relative">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <defs>
                    <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(234, 88, 12)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(234, 88, 12)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Revenue bars */}
                  {chartData.map((point, index) => (
                    <rect
                      key={index}
                      x={40 + index * 45}
                      y={180 - point.revenue / 50}
                      width="30"
                      height={point.revenue / 50}
                      fill="rgb(234, 88, 12)"
                      className="animate-[growBar_1s_ease-out] hover:fill-orange-400 transition-colors cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    />
                  ))}
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Data Tables Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-slide-up">
          {/* Top Pages */}
          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Top Pages</h3>
            {isLoading ? (
              <div className="space-y-3">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="h-12 bg-muted/20 rounded animate-pulse"></div>
                  ))}
              </div>
            ) : (
              <div className="space-y-3">
                {topPages.map((page, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors cursor-pointer"
                  >
                    <div>
                      <p className="font-medium text-foreground">{page.page}</p>
                      <p className="text-sm text-muted-foreground">{formatNumber(page.views)} views</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{page.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Traffic Sources */}
          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Traffic Sources</h3>
            {isLoading ? (
              <div className="space-y-3">
                {Array(4)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="h-12 bg-muted/20 rounded animate-pulse"></div>
                  ))}
              </div>
            ) : (
              <div className="space-y-3">
                {trafficSources.map((source, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors cursor-pointer"
                  >
                    <div>
                      <p className="font-medium text-foreground">{source.source}</p>
                      <p className="text-sm text-muted-foreground">{formatNumber(source.visitors)} visitors</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">{source.percentage}%</p>
                      <div className="w-16 h-2 bg-secondary/30 rounded-full mt-1">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${source.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Device Stats */}
          <div className="glass-effect rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">Device Breakdown</h3>
            {isLoading ? (
              <div className="space-y-3">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="h-12 bg-muted/20 rounded animate-pulse"></div>
                  ))}
              </div>
            ) : (
              <div className="space-y-4">
                {deviceStats.map((device, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{device.device}</span>
                      <span className="text-sm text-muted-foreground">{device.percentage}%</span>
                    </div>
                    <div className="w-full h-3 bg-secondary/30 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          index === 0 ? "bg-primary" : index === 1 ? "bg-chart-2" : "bg-chart-3"
                        }`}
                        style={{
                          width: `${device.percentage}%`,
                          animationDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                    <p className="text-xs text-muted-foreground">{formatNumber(device.users)} users</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Real-time Activity */}
        <div className="glass-effect rounded-xl p-6 animate-slide-up">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-foreground">Real-time Activity</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-secondary/10 rounded-lg">
              <p className="text-2xl font-bold text-primary">127</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
            <div className="text-center p-4 bg-secondary/10 rounded-lg">
              <p className="text-2xl font-bold text-chart-2">43</p>
              <p className="text-sm text-muted-foreground">Page Views/min</p>
            </div>
            <div className="text-center p-4 bg-secondary/10 rounded-lg">
              <p className="text-2xl font-bold text-chart-3">8</p>
              <p className="text-sm text-muted-foreground">Conversions/hr</p>
            </div>
            <div className="text-center p-4 bg-secondary/10 rounded-lg">
              <p className="text-2xl font-bold text-chart-4">$2,340</p>
              <p className="text-sm text-muted-foreground">Revenue Today</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations styles */}
      <style jsx>{`
        @keyframes drawLine {
          from { stroke-dasharray: 1000; stroke-dashoffset: 1000; }
          to { stroke-dasharray: 1000; stroke-dashoffset: 0; }
        }
        
        @keyframes fillArea {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes popIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        @keyframes growBar {
          from { transform: scaleY(0); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>
    </div>
  )
}

// Metric Card Component
function MetricCard({ title, value, change, positive, icon }) {
  return (
    <div className="glass-effect rounded-xl p-6 hover:bg-secondary/5 transition-all duration-300 cursor-pointer group">
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{icon}</span>
        <span
          className={`text-sm font-medium px-2 py-1 rounded-full ${
            positive ? "text-primary bg-primary/10" : "text-destructive bg-destructive/10"
          }`}
        >
          {change}
        </span>
      </div>
      <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
      <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{value}</p>
    </div>
  )
}

export default TrafficAnalyticsDashboard
