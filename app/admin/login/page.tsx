"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { validateAdminLogin, setAdminSession } from "@/lib/admin-auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    if (validateAdminLogin(email, password)) {
      setAdminSession()
      router.push("/admin/dashboard")
    } else {
      setError("Invalid email or password")
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fd812a]/10 via-white to-[#02ffff]/10 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image src="/images/logo.png" alt="District Eat & Play" width={80} height={80} className="mx-auto mb-4" />
          </Link>
          <h1 className="font-mono text-3xl font-bold text-gray-900 mb-2">DISTRICT</h1>
          <p className="text-[#fd812a] font-semibold text-sm">Admin Dashboard</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-lg border-4 border-[#fd812a] shadow-xl p-8">
          <h2 className="font-mono text-2xl font-bold text-gray-900 mb-6 text-center">Login</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border-2 border-[#fd812a]/30 focus:border-[#fd812a]"
                disabled={loading}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border-2 border-[#fd812a]/30 focus:border-[#fd812a]"
                disabled={loading}
                required
              />
            </div>

            {error && <div className="bg-red-100 border-2 border-red-400 text-red-700 px-4 py-2 rounded-lg font-semibold text-sm">{error}</div>}

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-[#fd812a] to-orange-600 hover:from-[#fd812a]/90 hover:to-orange-700 text-white font-bold py-2 rounded-lg transition-all"
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600 font-semibold mb-4">Back to website?</p>
            <Link href="/" className="text-[#fd812a] hover:underline font-bold">
              Go to Homepage
            </Link>
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 text-center text-sm text-gray-600 font-semibold">
          <p>This is a secure admin area</p>
          <p>Authorized personnel only</p>
        </div>
      </div>
    </div>
  )
}
