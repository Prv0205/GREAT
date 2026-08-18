import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Star, Clock, GraduationCap, Play, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { subjects } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Courses · GREAT Galway Tuition',
  description:
    'Junior & Leaving Cert courses in Mathematics, English, Science and Irish at GREAT, Galway.',
}

export default function CoursesPage() {
  return (
    <main>
      <section className="border-b border-border/60 bg-popover">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Our Subjects
          </span>
          <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            Subjects that make learning click
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
            Explore Maths, English, Science and Irish with colourful visual resources, supportive tuition
            and clear goals for every learner.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-14 sm:px-6 lg:px-8">
        {subjects.map((subject, i) => (
          <article
            key={subject.slug}
            className="grid items-center gap-8 lg:grid-cols-[300px_1fr]"
          >
            <div
              className={`relative mx-auto aspect-[2/3] w-full max-w-[300px] overflow-hidden rounded-xl border border-border/60 ${
                i % 2 === 1 ? 'lg:order-2' : ''
              }`}
            >
              <Image
                src={subject.poster || '/placeholder.svg'}
                alt={`${subject.title} course poster`}
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="flex items-center gap-1 rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-accent">
                  <Star className="h-3 w-3 fill-accent text-accent" />
                  {subject.rating}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <GraduationCap className="h-4 w-4" />
                  {subject.level}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {subject.duration}
                </span>
              </div>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight">
                {subject.title}
              </h2>
              <p className="mt-1 text-sm font-medium text-accent">{subject.tagline}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">
                {subject.description}
              </p>

              <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                {subject.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-sm">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20">
                      <Check className="h-3 w-3 text-accent" />
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button render={<Link href="/enroll" />} className="glow-primary">
                  <Play className="fill-primary-foreground" />
                  Enroll in {subject.title}
                </Button>
                <Button render={<Link href="/about" />} variant="secondary">
                  Meet the tutor
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="border-t border-border/60 bg-popover">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl text-balance">
            Not sure which course fits?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground text-pretty">
            Tell us your student&apos;s year and target grades and we&apos;ll build the right
            timetable.
          </p>
          <Button render={<Link href="/enroll" />} size="lg" className="mt-7 glow-primary">
            Register Interest
          </Button>
        </div>
      </section>
    </main>
  )
}
