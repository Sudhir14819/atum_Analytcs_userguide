'use client'

import { LayoutDashboard, FileText, Users, Menu, BookOpen } from 'lucide-react'

interface NavigationProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'leads', label: 'Leads', icon: Users },
    { id: 'field-visits', label: 'Field Visits', icon: FileText },
    { id: 'guide', label: 'Guide', icon: BookOpen },
    { id: 'menu', label: 'Menu', icon: Menu },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:relative bg-card border-t border-border md:border-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-around md:gap-8 px-2 py-3 md:px-6 md:py-4">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = currentPage === item.id
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-3 md:px-4 py-2 rounded-lg transition ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon size={20} />
                <span className="text-xs md:text-sm font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
