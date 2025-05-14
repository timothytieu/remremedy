"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2Icon, UploadIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Updated Google Apps Script URL with production deployment
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyHxFVJSPJwUet6Rx2M9cp4VwouDC3ST0rzgbpCwnNbjkSfQ_4wBE4BXWqEbw0m6MtW/exec"

export function TryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
  const [fileName, setFileName] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const form = e.currentTarget
    const formData = new FormData(form)

    // Add timestamp
    formData.append("timestamp", new Date().toISOString())

    try {
      // For Google Apps Script, we need to use a no-cors approach with a standard form submission
      // This is because Google Apps Script has CORS restrictions

      // Create a hidden iframe for submission
      const iframe = document.createElement("iframe")
      iframe.style.display = "none"
      document.body.appendChild(iframe)

      // Create a form inside the iframe
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
      if (!iframeDoc) throw new Error("Could not access iframe document")

      const iframeForm = iframeDoc.createElement("form")
      iframeForm.method = "POST"
      iframeForm.action = GOOGLE_SCRIPT_URL

      // Add all form data as hidden inputs
      formData.forEach((value, key) => {
        // Skip file inputs as they can't be handled this way
        if (!(value instanceof File)) {
          const input = iframeDoc.createElement("input")
          input.type = "hidden"
          input.name = key
          input.value = value.toString()
          iframeForm.appendChild(input)
        }
      })

      iframeDoc.body.appendChild(iframeForm)

      // Submit the form
      iframeForm.submit()

      // Clean up after a delay
      setTimeout(() => {
        document.body.removeChild(iframe)
      }, 5000)

      // Mark as submitted
      setIsSubmitted(true)
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name)
    }
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 py-8">
        <CheckCircle2Icon className="h-16 w-16 text-green-500" />
        <h3 className="text-xl font-medium">Thank you for your submission!</h3>
        <p className="text-center text-slate-600 dark:text-slate-400">
          We've received your information and will craft a personalized sleep plan for you. Look for it in your inbox
          soon!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} method="POST" className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required className="mt-1" />
        </div>

        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" required className="mt-1" />
        </div>

        <div>
          <Label htmlFor="timezone">Time Zone</Label>
          <Select name="timezone" required>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select your time zone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pacific">Pacific Time (PT)</SelectItem>
              <SelectItem value="mountain">Mountain Time (MT)</SelectItem>
              <SelectItem value="central">Central Time (CT)</SelectItem>
              <SelectItem value="eastern">Eastern Time (ET)</SelectItem>
              <SelectItem value="other">Other (Please specify in notes)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="schedule">What's your work schedule this week? (Optional: Upload a screenshot)</Label>
          <div className="mt-1">
            <Textarea id="schedule-text" name="schedule-text" rows={3} className="mb-2" />
            <div className="flex items-center space-x-2">
              <Label
                htmlFor="schedule-file"
                className="flex cursor-pointer items-center rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <UploadIcon className="mr-2 h-4 w-4" />
                {fileName ? fileName : "Upload schedule"}
              </Label>
              <Input
                id="schedule-file"
                name="schedule-file"
                type="file"
                accept="image/*,.pdf"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="sleep-schedule">What's your normal sleep schedule on days off?</Label>
          <Textarea id="sleep-schedule" name="sleep-schedule" rows={3} className="mt-1" />
        </div>

        <div>
          <Label htmlFor="challenges">What's getting in the way of you getting great sleep right now?</Label>
          <Textarea id="challenges" name="challenges" rows={3} className="mt-1" />
        </div>

        <div>
          <Label htmlFor="success">What would success look like for you this week?</Label>
          <Textarea id="success" name="success" rows={3} className="mt-1" />
        </div>

        <div>
          <Label htmlFor="activities">Any activities that help your sleep (e.g. sun walks, yoga)?</Label>
          <Textarea id="activities" name="activities" rows={3} className="mt-1" />
        </div>

        <div>
          <Label htmlFor="additional">Anything else we should know?</Label>
          <Textarea id="additional" name="additional" rows={3} className="mt-1" />
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  )
}
