"use client"

import { useEffect } from "react"

export function FAQSchema() {
  useEffect(() => {
    // Only run in production environment
    if (process.env.NODE_ENV === "production") {
      const script = document.createElement("script")
      script.type = "application/ld+json"
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is REMedy?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "REMedy is an AI sleep companion designed specifically for people whose lives don't fit into conventional sleep advice. We help shift workers, parents, pilots, and others with unpredictable schedules find quality rest within their real-world constraints – not despite them.",
            },
          },
          {
            "@type": "Question",
            name: "How is REMedy different from other sleep apps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "While most sleep apps are built for traditional 9-to-5 schedules, REMedy understands that your 3AM might be someone else's noon. We're different because we: <ul><li>Adapt to rotating, irregular, and night shift schedules</li><li>Provide compassionate, real-time support during those lonely midnight hours</li><li>Connect with your wearables to understand your unique physical patterns</li><li>Meet you where you are with empathy and humanity, not rigid rules or judgment</li></ul>",
            },
          },
          {
            "@type": "Question",
            name: "Who is REMedy designed for?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "While our solution can be helpful for anyone aiming to get more consistent, high quality sleep, we are initially focusing on building specifically for people who have irregular sleep patterns: <ul><li>Healthcare workers navigating shift rotations</li><li>Flight crews crossing time zones</li><li>New parents up at all hours</li><li>First responders with unpredictable schedules</li><li>Anyone whose sleep has been overlooked by conventional solutions</li></ul>",
            },
          },
          {
            "@type": "Question",
            name: "Is REMedy clinically validated?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "While REMedy isn't a regulated medical device or therapeutic, our approach is grounded in sleep science and behavioral research. We're developed our methodology in consultation with sleep experts and building a platform that prioritizes your wellbeing. We're committed to transparency about what we know, what we're still learning, and how we're evolving.",
            },
          },
          {
            "@type": "Question",
            name: "How does REMedy actually work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "REMedy works through a simple, conversational interface where you can: <ul><li>Connect your calendar and wearable devices</li><li>Share your upcoming schedule changes</li><li>Receive personalized sleep plans that adapt as your life changes</li><li>Chat with an empathetic AI companion during those lonely 3AM moments</li><li>Get gentle, timely nudges based on your actual physical state, not just the clock</li></ul>",
            },
          },
          {
            "@type": "Question",
            name: "How do you protect my data?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Your data is yours – period. We believe earning your trust is a continuous process, not a one-time checkbox. Your data is never sold and only used to improve your personal experience. You maintain complete control over what you share, and we'll always be transparent about how it's used.",
            },
          },
        ],
      })
      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [])

  return null
}
