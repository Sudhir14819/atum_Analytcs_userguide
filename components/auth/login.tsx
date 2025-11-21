'use client'

import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface LoginProps {
  onLogin: () => void
}

export function Login({ onLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false)
  const [username, setUsername] = useState('adminone@yopmail.com')
  const [password, setPassword] = useState('password')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl mb-4">
            <div className="text-white font-bold text-2xl">⚡</div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">ATUM Analytics</h1>
          <p className="text-muted-foreground">Sign in to your dashboard</p>
        </div>

        {/* Login Form */}
        <div className="bg-card rounded-2xl shadow-lg p-8 border border-border">
          <div className="space-y-5">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Username
              </label>
              <Input
                type="email"
                placeholder="adminone@yopmail.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-accent"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-accent pr-12"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button
              onClick={onLogin}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              Login
            </Button>

            {/* Footer Links */}
            <div className="text-center space-y-2 text-sm">
              <p className="text-muted-foreground">
                Forgot your password?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Reset here
                </a>
              </p>
              <p className="text-muted-foreground">
                Don&apos;t have an account?{' '}
                <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-4 text-muted-foreground">
          <div className="w-12 h-12 bg-blue-100 rounded-full opacity-50" />
          <div className="w-12 h-12 bg-pink-100 rounded-full opacity-50" />
          <div className="w-12 h-12 bg-green-100 rounded-full opacity-50" />
        </div>
      </div>
    </div>
  )
}
