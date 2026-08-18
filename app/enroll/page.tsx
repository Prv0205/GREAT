import type { Metadata } from 'next'
import { Clock, Users, ShieldCheck, Sparkles } from 'lucide-react'
import { EnrollForm } from '@/components/enroll-form'

export const metadata: Metadata = {
  title: 'Enroll · GREAT Galway Tuition',
  description:
    'Find the right support for Junior & Leaving Cert grinds at GREAT, Galway. We respond within one working day.',
}

const perks = [
  { icon: Sparkles, title: 'Free trial session', body: 'Sit in on a class before you commit.' },
  { icon: Users, title: 'Small capped groups', body: 'Real attention for every student.' },
  { icon: Clock, title: 'Flexible timetable', body: 'Evening and weekend slots available.' },
  { icon: ShieldCheck, title: 'Exam-proven method', body: '96% of students hit H1–H3.' },
]

export default function EnrollPage() {
  return (
    <main>
      <section className="border-b border-border/60 bg-popover">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Start learning
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Find the right support
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
            Tell us a little about your child and the subjects they would like help with. We&apos;ll help
            you find the right tutor and timetable.
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <EnrollForm />

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border/60 bg-card p-6">
            <h2 className="font-display text-lg font-bold">Why parents choose GREAT</h2>
            <ul className="mt-5 space-y-5">
              {perks.map((perk) => (
                <li key={perk.title} className="flex gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                    <perk.icon className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <div className="font-medium">{perk.title}</div>
                    <div className="text-sm text-muted-foreground">{perk.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 to-card p-6">
            <h2 className="font-display text-lg font-bold">Prefer to talk?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Call the centre directly and we&apos;ll answer any questions.
            </p>
            <a
              href="tel:+35391123456"
              className="mt-4 inline-block font-display text-xl font-bold text-accent"
            >
              (091) 123 456
            </a>
            <p className="mt-1 text-sm text-muted-foreground">12 Eyre Square, Galway City</p>
          </div>
        </aside>
      </div>
    </main>
  )
}
