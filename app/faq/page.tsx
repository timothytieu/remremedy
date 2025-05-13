import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Script from "next/script"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <SiteHeader />

        <main className="mx-auto max-w-3xl py-12">
          <h1 className="mb-8 text-center text-4xl font-bold tracking-tight sm:text-5xl">Frequently Asked Questions</h1>

          <div className="mx-auto mt-8 rounded-xl bg-white p-6 shadow-md dark:bg-slate-800">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left text-lg font-medium">What is REMedy?</AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  REMedy is an AI sleep companion designed specifically for people whose lives don't fit into
                  conventional sleep advice. We help shift workers, parents, pilots, and others with unpredictable
                  schedules find quality rest within their real-world constraints – not despite them.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How is REMedy different from other sleep apps?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  <p>
                    While most sleep apps are built for traditional 9-to-5 schedules, REMedy understands that your 3AM
                    might be someone else's noon. We're different because we:
                  </p>
                  <ul className="ml-6 mt-2 list-disc space-y-1">
                    <li>Adapt to rotating, irregular, and night shift schedules</li>
                    <li>Provide compassionate, real-time support during those lonely midnight hours</li>
                    <li>Connect with your wearables to understand your unique physical patterns</li>
                    <li>Meet you where you are with empathy and humanity, not rigid rules or judgment</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Who is REMedy designed for?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  <p>
                    While our solution can be helpful for anyone aiming to get more consistent, high quality sleep, we
                    are initially focusing on building specifically for people who have irregular sleep patterns:
                  </p>
                  <ul className="ml-6 mt-2 list-disc space-y-1">
                    <li>Healthcare workers navigating shift rotations</li>
                    <li>Flight crews crossing time zones</li>
                    <li>New parents up at all hours</li>
                    <li>First responders with unpredictable schedules</li>
                    <li>Anyone whose sleep has been overlooked by conventional solutions</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left text-lg font-medium">
                  Is REMedy clinically validated?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  While REMedy isn't a regulated medical device or therapeutic, our approach is grounded in sleep
                  science and behavioral research. We're developed our methodology in consultation with sleep experts
                  and building a platform that prioritizes your wellbeing. We're committed to transparency about what we
                  know, what we're still learning, and how we're evolving.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How does REMedy actually work?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  <p>REMedy works through a simple, conversational interface where you can:</p>
                  <ul className="ml-6 mt-2 list-disc space-y-1">
                    <li>Connect your calendar and wearable devices</li>
                    <li>Share your upcoming schedule changes</li>
                    <li>Receive personalized sleep plans that adapt as your life changes</li>
                    <li>Chat with an empathetic AI companion during those lonely 3AM moments</li>
                    <li>Get gentle, timely nudges based on your actual physical state, not just the clock</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left text-lg font-medium">
                  How do you protect my data?
                </AccordionTrigger>
                <AccordionContent className="text-slate-700 dark:text-slate-300">
                  Your data is yours – period. We believe earning your trust is a continuous process, not a one-time
                  checkbox. Your data is never sold and only used to improve your personal experience. You maintain
                  complete control over what you share, and we'll always be transparent about how it's used.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </main>

        <SiteFooter />
      </div>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />
    </div>
  )
}
