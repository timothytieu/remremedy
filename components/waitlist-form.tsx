"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2Icon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Using the provided Formspree form ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mzzrgweg"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData()
    formData.append("email", email)
    formData.append("source", "REMedy Waitlist")
    formData.append("timestamp", new Date().toISOString())

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        setEmail("")
      } else {
        const data = await response.json()
        throw new Error(data.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-4">
        <CheckCircle2Icon className="h-16 w-16 text-green-500" />
        <h3 className="text-xl font-medium">Thank you for your interest!</h3>
        <p className="text-slate-600 dark:text-slate-400">We'll notify you when we launch.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} method="POST" action={FORMSPREE_ENDPOINT} className="space-y-4">
      <div>
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
        {isSubmitting ? "Joining..." : "Join us"}
      </Button>
    </form>
  )
}
