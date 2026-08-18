import Link from 'next/link'
import { MapPin, Mail } from 'lucide-react'
import { navLinks, subjects } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-popover">
      <div className="irish-tricolour absolute inset-x-0 top-0 h-1" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary font-display text-lg font-extrabold text-primary-foreground">
              G
            </span>
            <span className="font-display text-lg font-bold tracking-tight">GREAT</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Friendly tuition in Galway for Maths, English, Science and Irish — helping children learn with confidence.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Explore</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Subjects</h3>
          <ul className="mt-4 flex flex-col gap-2.5">
            {subjects.map((s) => (
              <li key={s.slug}>
                <Link
                  href="/courses"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold">Visit the Centre</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>12 Eyre Square, Galway City, H91 GR8T</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              <a
                href="mailto:hello@great-galway.ie"
                className="transition-colors hover:text-foreground"
              >
                hello@great-galway.ie
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-6 text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} GREAT — Galway Regional Education And Tutorial Centre. All
          rights reserved.
        </div>
      </div>
    </footer>
  )
}
