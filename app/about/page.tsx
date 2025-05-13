import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <SiteHeader />

        <main className="mx-auto max-w-3xl py-12">
          <h1 className="mb-8 text-center text-4xl font-bold tracking-tight sm:text-5xl">About Us</h1>

          <div className="prose prose-slate mx-auto dark:prose-invert lg:prose-lg">
            <p>
              We believe everyone deserves great sleep – even when your schedule doesn't fit into a traditional 9-to-5
              box. REMedy is building an AI-powered sleep companion for the millions whose lives require something more
              adaptable than standard, perfectionist sleep advice.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">Why We Exist</h2>
            <p>
              Nurses ending 12-hour night shifts. Pilots crossing time zones. New parents up for 3AM feedings. Military
              captains on rotating schedules.
            </p>
      
            <p>
              These aren't edge cases – they're essential workers with lives in their hands whose sleep has been
              overlooked for too long. We see this as more than a personal challenge; it's a growing public health
              crisis affecting productivity, safety, and quality of life for millions.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">Our Journey</h2>
            <p>
              REMedy began at UC Berkeley Haas's storied Lean Launchpad course, where our cross-disciplinary team
              conducted over 150 in-depth conversations with people struggling to find rest within unpredictable lives.
            </p>
            <p>
              What we discovered wasn't surprising, but it was profound: people don't need more rigid sleep rules – they
              need adaptive, personalized plans and guidance that holistically understands their unique rhythms and
              realities.
            </p>
            <p>
              We have extremely ambitious aims to make an impact in the sleep deprivation public health crisis, and
              we're continuing this mission at Berkeley SkyDeck's Pad-13 incubator, building technology that truly
              learns from your life.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">What Sets Us Apart</h2>
            <p>
              Our mobile app doesn't just track your sleep – it works with you to find it. By understanding your health
              data, calendar, and daily patterns, REMedy creates dynamic, personalized sleep plans that flex with your
              changing schedule.
            </p>
            <p>
              Think of us as a calming, encouraging companion – there when you need guidance at 3AM, celebrating your
              small wins, and adapting alongside you as your life evolves.
            </p>

            <h2 className="mt-8 text-2xl font-semibold">The Moment Is Now</h2>
            <p>
              We're at a critical juncture where sleep science, AI capabilities, and societal awareness have converged. With the support of our community, we're building a solution that can scale to millions, creating a world where quality sleep is accessible to everyone.
            </p>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}
