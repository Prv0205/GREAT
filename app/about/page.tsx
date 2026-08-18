import type { Metadata } from 'next'
import Link from 'next/link'
import { Target, HeartHandshake, Trophy, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TeacherCard } from '@/components/teacher-card'
import { teachers } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'About · GREAT Galway Tuition',
  description:
    'Meet the tutors and story behind GREAT — Galway Regional Education And Tutorial Centre.',
}

const values = [
  {
    icon: Target,
    title: 'Exam-first method',
    body: 'Everything we teach maps to the marking scheme. Students learn how to earn marks, not just the content.',
  },
  {
    icon: HeartHandshake,
    title: 'Small groups',
    body: 'Capped class sizes mean real attention, faster feedback and a tutor who knows every student by name.',
  },
  {
    icon: Trophy,
    title: 'Proven results',
    body: 'A decade of H1s across Junior and Leaving Cert, with families returning year after year.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <section className="border-b border-border/60 bg-popover">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            About GREAT
          </span>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Learning that children enjoy, parents can trust
          </h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
            GREAT is a welcoming place for children to learn, ask questions and grow in confidence. We
            combine clear teaching, encouraging tutors and practical support across Maths, English,
            Science and Irish.
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            12 Eyre Square, Galway City
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <div key={value.title} className="rounded-xl border border-border/60 bg-card p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15">
                <value.icon className="h-5 w-5 text-accent" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
          Meet Our Tutors
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground text-pretty">
          Friendly tutors who make lessons engaging, understandable and encouraging.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.name} teacher={teacher} />
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-popover">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-balance">
            Come sit in on a class
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground text-pretty">
            Register your interest and we&apos;ll arrange a trial session with the right tutor for
            your student.
          </p>
          <Button render={<Link href="/enroll" />} size="lg" className="mt-7 glow-primary">
            Register Interest
          </Button>
        </div>
      </section>
    </main>
  )
}
