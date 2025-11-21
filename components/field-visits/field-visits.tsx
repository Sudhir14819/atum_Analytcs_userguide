'use client'

import { useState } from 'react'
import { Plus, MapPin } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function FieldVisits() {
  const [activeTab, setActiveTab] = useState('saved')

  const visits = [
    {
      id: 1,
      date: '15 Nov 25',
      time: '2:30 PM',
      location: 'Downtown Office',
      dealer: 'Siva demo',
      status: 'Completed',
      type: 'Dealer',
    },
    {
      id: 2,
      date: '14 Nov 25',
      time: '11:00 AM',
      location: 'Central District',
      dealer: 'Raj Enterprises',
      status: 'Completed',
      type: 'Distributor',
    },
  ]

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Field Visits</h1>
            <p className="text-muted-foreground mt-1">Track and manage your field visits</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 w-full md:w-auto">
            <Plus size={20} />
            New Visit
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border pb-4">
          {['saved', 'draft'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-medium capitalize transition ${
                activeTab === tab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-muted-foreground'
              }`}
            >
              {tab === 'saved' ? 'Saved (Online)' : 'Draft (Offline)'}
            </button>
          ))}
        </div>

        {/* Visits List */}
        <div className="space-y-4">
          {visits.map((visit) => (
            <Card key={visit.id} className="p-6 border border-border hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {visit.status}
                    </span>
                    <span className="text-sm text-muted-foreground">{visit.type}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{visit.dealer}</h3>
                  <div className="flex flex-col md:flex-row md:gap-6 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {visit.location}
                    </div>
                    <div>{visit.date} at {visit.time}</div>
                  </div>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View Details →
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
