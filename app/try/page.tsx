"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function TryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <SiteHeader />

        <main className="mx-auto max-w-5xl py-12">
          <h1 className="mb-8 text-center text-4xl font-bold tracking-tight sm:text-5xl">Try REMedy</h1>

          <div className="mx-auto rounded-xl bg-white p-8 shadow-lg dark:bg-slate-800">
            <div className="asana-embed-container mx-auto">
              <style jsx global>{`
                .asana-embed-container {
                  position: relative;
                  width: 100%;
                }
                .asana-embed-iframe {
                  border: 1px solid #ddd;
                  border-radius: 0.5rem;
                  width: 100%;
                  max-width: 100%;
                  background-color: white;
                  min-height: 2500px; /* Much taller to show the entire form */
                }
                .asana-embed-footer {
                  display: flex;
                  justify-content: flex-end;
                  margin-top: 8px;
                }
                .asana-embed-footer-link {
                  display: flex;
                  align-items: center;
                  color: #6b7280;
                  font-size: 0.75rem;
                  text-decoration: none;
                }
                .asana-embed-footer-text {
                  margin-right: 4px;
                }
                .asana-embed-footer-logo {
                  background-image: url('https://form.asana.com/static/asana-logo.svg');
                  background-repeat: no-repeat;
                  background-size: contain;
                  width: 48px;
                  height: 16px;
                }
                @media (max-width: 768px) {
                  .asana-embed-iframe {
                    min-height: 2000px; /* Even taller on mobile */
                  }
                }
              `}</style>
              <iframe
                className="asana-embed-iframe"
                height="2000"
                src="https://form.asana.com/?k=yk-QzjmWy2UAs5UKr5KSUQ&d=1210267651296430&embed=true"
                frameBorder="0"
                scrolling="no"
              ></iframe>
              <div className="asana-embed-footer">
                <a
                  rel="noreferrer nofollow noopener"
                  target="_blank"
                  className="asana-embed-footer-link"
                  href="https://asana.com/?utm_source=embedded_form"
                >
                  <span className="asana-embed-footer-text">Form powered by</span>
                  <div className="asana-embed-footer-logo" role="img" aria-label="Logo of Asana"></div>
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-4xl text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              REMedy is an early-stage wellness offering, not a provider of medical advice or clinical sleep treatment.
              The sleep suggestions we offer are based on your input and general sleep science, they're meant to
              support, not replace, professional guidance. While AI models will be used to generate your personalized
              plan, your data will never be sold without your consent, and all personally identifiable information will
              be deleted after the experiment concludes.
            </p>
          </div>
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}
