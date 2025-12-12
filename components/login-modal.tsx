"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Lock } from "lucide-react"

interface LoginModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function LoginModal({ open, onOpenChange }: LoginModalProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    console.log("Login attempt:", { email, password })
    setTimeout(() => {
      setIsLoading(false)
      setEmail("")
      setPassword("")
      onOpenChange(false)
    }, 500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-white border-2 border-[#fd812a]">
        <DialogHeader>
          <DialogTitle className="font-mono text-2xl font-bold text-gray-900">Login</DialogTitle>
          <DialogDescription className="text-gray-700 font-semibold">
            Sign in to your District Eat & Play account
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-900 font-semibold mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-5 h-5 text-[#fd812a]" />
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-2 border-[#fd812a]/30 text-gray-900 pl-10 font-semibold focus:border-[#fd812a]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-900 font-semibold mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 w-5 h-5 text-[#fd812a]" />
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white border-2 border-[#fd812a]/30 text-gray-900 pl-10 font-semibold focus:border-[#fd812a]"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#fd812a] to-orange-600 hover:from-[#fd812a]/90 hover:to-orange-600/90 text-white font-bold shadow-lg hover:shadow-xl transition-all disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </Button>

          <p className="text-center text-sm text-gray-700 font-semibold">
            Don't have an account?{" "}
            <button
              type="button"
              className="text-[#fd812a] hover:underline font-bold"
              onClick={() => console.log("Redirect to signup")}
            >
              Sign up
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}
