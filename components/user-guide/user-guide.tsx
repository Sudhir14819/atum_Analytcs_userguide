'use client'

import { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface GuideSection {
  id: string
  title: string
  description: string
  steps: Array<{
    number: number
    title: string
    description: string
    highlight: string
  }>
  color: string
  icon: string
}

export function UserGuide() {
  const [expandedSection, setExpandedSection] = useState<string | null>('login')

  const sections: GuideSection[] = [
    {
      id: 'login',
      title: '🔐 Login to ATUM Analytics',
      description: 'Get started by signing into your account',
      color: 'from-blue-500 to-blue-600',
      icon: '🔑',
      steps: [
        {
          number: 1,
          title: 'Enter Username',
          description: 'Input your registered email address',
          highlight: 'Username field at the top of the login form',
        },
        {
          number: 2,
          title: 'Enter Password',
          description: 'Type your secure password',
          highlight: 'Password field with show/hide toggle',
        },
        {
          number: 3,
          title: 'Click Login',
          description: 'Submit your credentials',
          highlight: 'Blue Login button at the bottom',
        },
      ],
    },
    {
      id: 'dashboard',
      title: '📊 Dashboard Overview',
      description: 'View your business metrics and analytics',
      color: 'from-green-500 to-green-600',
      icon: '📈',
      steps: [
        {
          number: 1,
          title: 'Select Date Range',
          description: 'Filter data by custom dates',
          highlight: 'Blue date range selector at the top',
        },
        {
          number: 2,
          title: 'View Business Metrics',
          description: 'See total purchases, business value, and bookings',
          highlight: 'Cards in the Business Overview section',
        },
        {
          number: 3,
          title: 'Check Enquiries',
          description: 'Monitor generated enquiries and conversions',
          highlight: 'Enquiries Overview section below',
        },
      ],
    },
    {
      id: 'create-leads',
      title: '👥 Create New Leads',
      description: 'Add customers to your sales pipeline',
      color: 'from-pink-500 to-pink-600',
      icon: '➕',
      steps: [
        {
          number: 1,
          title: 'Click Plus Icon',
          description: 'Navigate to create a new lead',
          highlight: 'Plus button in the top-right corner',
        },
        {
          number: 2,
          title: 'Fill Customer Details',
          description: 'Enter name, mobile, email, and company info',
          highlight: 'All required fields marked with red asterisks *',
        },
        {
          number: 3,
          title: 'Choose Item',
          description: 'Select the product the customer is interested in',
          highlight: 'Item dropdown field',
        },
        {
          number: 4,
          title: 'Save Lead',
          description: 'Submit the form to add the lead',
          highlight: 'Blue Save button at the bottom',
        },
      ],
    },
    {
      id: 'manage-leads',
      title: '📋 Manage Lead Stages',
      description: 'Move leads through your sales pipeline',
      color: 'from-purple-500 to-purple-600',
      icon: '🔄',
      steps: [
        {
          number: 1,
          title: 'Not Yet Contacted',
          description: 'New leads appear here - ready for first contact',
          highlight: 'First stage in the lead pipeline',
        },
        {
          number: 2,
          title: 'Follow-Up',
          description: 'Add follow-up details and schedule callback',
          highlight: 'Click three dots menu and select Follow Up',
        },
        {
          number: 3,
          title: 'Booked',
          description: 'Customer has committed to a purchase with down payment',
          highlight: 'Add quantity, value, and measurement details',
        },
        {
          number: 4,
          title: 'Purchased',
          description: 'Complete sale with invoice',
          highlight: 'Upload invoice and close the deal',
        },
      ],
    },
    {
      id: 'field-visits',
      title: '🗺️ Field Visits Tracking',
      description: 'Log and track your field activities',
      color: 'from-orange-500 to-orange-600',
      icon: '📍',
      steps: [
        {
          number: 1,
          title: 'Create New Visit',
          description: 'Click the plus icon to add a field visit',
          highlight: 'New Visit button in the header',
        },
        {
          number: 2,
          title: 'Select Details',
          description: 'Choose group, type, and user',
          highlight: 'Dropdown menus for classification',
        },
        {
          number: 3,
          title: 'Capture Location',
          description: 'Get GPS coordinates of your visit location',
          highlight: 'Map capture button',
        },
        {
          number: 4,
          title: 'Upload Image',
          description: 'Take a photo at the visit location',
          highlight: 'Camera upload field',
        },
        {
          number: 5,
          title: 'Save Visit',
          description: 'Submit to save the field visit',
          highlight: 'Blue Save button',
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50 to-background p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent mb-4">
            ATUM Analytics User Guide
          </h1>
          <p className="text-lg text-muted-foreground">
            Complete walkthrough of all features with helpful annotations and instructions
          </p>
        </div>

        {/* Guide Sections */}
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="group">
              <button
                onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
                className="w-full"
              >
                <Card className="p-6 border border-border hover:shadow-lg transition cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`w-16 h-16 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center text-3xl shadow-lg`}>
                        {section.icon}
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
                        <p className="text-muted-foreground text-sm">{section.description}</p>
                      </div>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`text-muted-foreground transition-transform ${
                        expandedSection === section.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </Card>
              </button>

              {/* Expanded Content */}
              {expandedSection === section.id && (
                <div className="mt-4 space-y-4 animate-in fade-in-50 duration-300">
                  {section.steps.map((step) => (
                    <Card
                      key={step.number}
                      className="p-6 border-l-4 border-l-blue-600 bg-card hover:shadow-md transition"
                    >
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold">
                            {step.number}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2">
                            {step.title}
                          </h4>
                          <p className="text-muted-foreground mb-3">{step.description}</p>
                          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <ArrowRight size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-blue-900 font-medium">{step.highlight}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <Card className="mt-12 p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 border border-yellow-200">
          <h3 className="text-2xl font-bold text-yellow-900 mb-6">💡 Pro Tips</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <span className="text-2xl">✨</span>
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">Use Filters</h4>
                <p className="text-yellow-800">Filter leads by date range and location for better management</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">📱</span>
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">Mobile Ready</h4>
                <p className="text-yellow-800">Access all features on your phone while on the field</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">📊</span>
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">Track Analytics</h4>
                <p className="text-yellow-800">Monitor your performance through the dashboard metrics</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-2xl">🔔</span>
              <div>
                <h4 className="font-semibold text-yellow-900 mb-2">Set Reminders</h4>
                <p className="text-yellow-800">Use follow-up dates to never miss a customer callback</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Footer */}
        <div className="mt-12 text-center pb-8">
          <p className="text-muted-foreground mb-4">
            Need more help? Contact our support team or explore the dashboard
          </p>
          <div className="inline-flex gap-4">
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition">
              Contact Support
            </button>
            <button className="px-6 py-2 border border-border hover:bg-card rounded-lg font-medium transition">
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
