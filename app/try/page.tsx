import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { TryForm } from "@/components/try-form"

export default function TryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <SiteHeader />

        <main className="mx-auto max-w-3xl py-12">
          <h1 className="mb-8 text-center text-4xl font-bold tracking-tight sm:text-5xl">Try REMedy</h1>

          <div className="mx-auto rounded-xl bg-white p-8 shadow-lg dark:bg-slate-800">
            <h2 className="mb-4 text-2xl font-semibold text-center">Get Your Personalized Sleep Plan</h2>
            <p className="mb-8 text-center text-slate-600 dark:text-slate-400">
              Submit your schedule and preferences below, and a real human from the REMedy team will craft a
              personalized sleep plan just for you. We'll send it back with at least 3 hours' notice before your
              bedtime, complete with a downloadable calendar and guidance you can actually use.
            </p>

            <TryForm />
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}
