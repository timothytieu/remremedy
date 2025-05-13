import Link from "next/link"
import { MoonIcon } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="container mx-auto flex items-center justify-between py-6">
      <div className="flex items-center space-x-2">
        <MoonIcon className="h-8 w-8 text-purple-600" />
        <Link href="/" className="text-xl font-bold">
          REMedy
        </Link>
      </div>
      <nav className="flex space-x-6">
        <Link
          href="/"
          className="text-sm font-medium text-slate-700 transition-colors hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-slate-700 transition-colors hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
        >
          About Us
        </Link>
        <Link
          href="/faq"
          className="text-sm font-medium text-slate-700 transition-colors hover:text-purple-600 dark:text-slate-300 dark:hover:text-purple-400"
        >
          FAQ
        </Link>
      </nav>
    </header>
  )
}
