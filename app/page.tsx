import { WaitlistForm } from "@/components/waitlist-form"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <SiteHeader />

        <main className="mx-auto max-w-3xl py-16 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Sleep that adapts to your life, not the other way around.
          </h1>

          <div className="mx-auto max-w-md rounded-xl bg-white p-8 shadow-lg dark:bg-slate-800">
            <h2 className="mb-4 text-2xl font-semibold">Join our early access community</h2>
            <p className="mb-6 text-slate-600 dark:text-slate-400">
              Be the first to know when we launch. Sign up to get early access.
            </p>

            <WaitlistForm />
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}
