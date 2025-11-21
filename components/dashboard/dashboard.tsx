'use client'

import { useState } from 'react'
import { Calendar } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function Dashboard() {
  const [dateRange, setDateRange] = useState('2025-10-20 to 2025-11-19')

  const metrics = [
    { label: 'Total purchases', value: 8, icon: '📦', color: 'bg-blue-100' },
    { label: 'Total business value in Lakhs', value: '₹22.10', icon: '💰', color: 'bg-green-100' },
    { label: 'Total Booking', value: 5, icon: '📅', color: 'bg-pink-100' },
  ]

  const enquiriesMetrics = [
    { label: 'Total Generated', value: 0, icon: '📊', color: 'bg-purple-100' },
    { label: 'Pending', value: 0, icon: '⏳', color: 'bg-orange-100' },
    { label: 'Followup', value: 0, icon: '🔄', color: 'bg-cyan-100' },
    { label: 'Converted', value: 0, icon: '✅', color: 'bg-green-100' },
    { label: 'Closed', value: 0, icon: '🔒', color: 'bg-red-100' },
    { label: 'Junk', value: 0, icon: '🗑️', color: 'bg-gray-100' },
  ]

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">Welcome back! Here's your business overview.</p>
          </div>
        </div>

        {/* Date Range Filter */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
            <Calendar size={18} />
            <span className="font-medium">{dateRange}</span>
          </div>
        </div>

        {/* Business Overview Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Business Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {metrics.map((metric) => (
              <Card key={metric.label} className="p-6 border border-border hover:shadow-lg transition">
                <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center mb-4`}>
                  <span className="text-xl">{metric.icon}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">{metric.label}</p>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Enquiries Overview Section */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">Enquiries Overview</h2>
          
          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-border overflow-x-auto pb-4">
            <button className="font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 whitespace-nowrap">
              Overview
            </button>
            <button className="text-muted-foreground hover:text-foreground transition pb-2 whitespace-nowrap">
              Graphs
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {enquiriesMetrics.map((metric) => (
              <Card key={metric.label} className="p-6 border border-border hover:shadow-lg transition">
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 ${metric.color} rounded-lg flex items-center justify-center`}>
                    <span className="text-xl">{metric.icon}</span>
                  </div>
                  <p className="text-3xl font-bold text-foreground">{metric.value}</p>
                </div>
                <p className="text-muted-foreground text-sm mt-4">{metric.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
