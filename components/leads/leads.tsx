'use client'

import { useState } from 'react'
import { Search, Plus, MoreVertical, MessageCircle, Phone } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function Leads() {
  const [filter, setFilter] = useState('not-contacted')

  const leads = [
    {
      id: 1,
      date: '07 Nov 25',
      name: 'Ssmb@ testing',
      phone: '91700100120',
      inquiry: 'Item enquiry',
      hasWhatsApp: true,
      hasCall: true,
    },
    {
      id: 2,
      date: '01 Nov 25',
      name: 'Siva demo',
      phone: '919189797646',
      inquiry: 'Item enquiry',
      hasWhatsApp: true,
      hasCall: true,
    },
    {
      id: 3,
      date: '01 Nov 25',
      name: 'Siva',
      phone: '919884845555',
      inquiry: 'Item enquiry',
      hasWhatsApp: true,
      hasCall: true,
    },
    {
      id: 4,
      date: '01 Nov 25',
      name: 'Sudhir',
      phone: '919874655455',
      inquiry: 'Item enquiry',
      hasWhatsApp: true,
      hasCall: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background p-4 md:p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Leads</h1>
            <p className="text-muted-foreground mt-1">Manage your sales pipeline efficiently</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2 w-full md:w-auto">
            <Plus size={20} />
            Create Lead
          </Button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Search leads..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-card"
            />
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4 border-b border-border">
          {[
            { id: 'not-contacted', label: 'Not yet contacted', color: 'text-blue-600' },
            { id: 'followup', label: 'Follow ups', color: 'text-gray-600' },
            { id: 'booked', label: 'Booked', color: 'text-gray-600' },
            { id: 'lost', label: 'Lost', color: 'text-gray-600' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`font-medium pb-2 whitespace-nowrap transition ${
                filter === tab.id
                  ? `${tab.color} border-b-2 ${tab.color.replace('text-', 'border-')}`
                  : 'text-muted-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Actions Bar */}
        <div className="flex gap-3 mb-6 flex-wrap">
          <label className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg cursor-pointer hover:bg-card transition">
            <input type="checkbox" className="w-4 h-4" />
            <span className="text-sm">Select</span>
          </label>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm font-medium">
            Actions ▼
          </button>
          <button className="ml-auto text-muted-foreground hover:text-foreground">
            <MoreVertical size={20} />
          </button>
        </div>

        {/* Leads List */}
        <div className="space-y-4">
          {leads.map((lead) => (
            <Card key={lead.id} className="p-6 border border-border hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="w-5 h-5 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm text-muted-foreground">{lead.date}</span>
                      {lead.hasWhatsApp && (
                        <button className="p-2 border-2 border-green-500 rounded-full hover:bg-green-50 transition">
                          <MessageCircle size={16} className="text-green-600" />
                        </button>
                      )}
                      {lead.hasCall && (
                        <button className="p-2 border-2 border-blue-500 rounded-full hover:bg-blue-50 transition">
                          <Phone size={16} className="text-blue-600" />
                        </button>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{lead.name}</h3>
                    <p className="text-muted-foreground">
                      <Phone size={14} className="inline mr-2" />
                      {lead.phone}{' '}
                      <span className="text-blue-600 font-medium">{lead.inquiry}</span>
                    </p>
                  </div>
                </div>
                <button className="text-muted-foreground hover:text-foreground">
                  <MoreVertical size={20} />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
