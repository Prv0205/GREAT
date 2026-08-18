import Link from 'next/link'
import Image from 'next/image'
import { Play, Info, GraduationCap, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ContentRow } from '@/components/content-row'
import { TeacherCard } from '@/components/teacher-card'
import { subjects, teachers } from '@/lib/site-data'

const approaches = [
  {
    icon: GraduationCap,
    title: 'Overall skill development of the subject',
    body: 'We build deep, lasting understanding — the core skills, reasoning and confidence that carry a student well beyond any single exam.',
  },
  {
    icon: BookOpen,
    title: 'School curriculum help',
    body: 'Focused support that tracks exactly what your student is covering in school, keeping homework, tests and the State Exams on course.',
  },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[72vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="GREAT students learning in a bright, imaginative classroom"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
        </div>

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-accent">
            <span className="flex h-2 w-2 rounded-full bg-accent" />
            Now welcoming learners · Galway
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl">
            Big learning. Bright futures. GREAT.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
            Friendly tuition for Junior Infants through Leaving Cert. We help children build strong
            foundations, confidence and exam skills in Maths, English, Science and Irish.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button render={<Link href="/enroll" />} size="lg" className="glow-primary">
              <Play className="fill-primary-foreground" />
              Register Interest
            </Button>
            <Button render={<Link href="/courses" />} size="lg" variant="secondary">
              <Info />
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Rows */}
      <div className="relative z-10 -mt-8 pb-8">
        <ContentRow title="Explore Our Subjects" subjects={subjects} />
      </div>

      {/* Our approaches */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">Our approaches</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground text-pretty">
          Two ways we help every student — pick the focus that fits, or blend both.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {approaches.map((approach) => (
            <div
              key={approach.title}
              className="rounded-xl border border-border/60 bg-card p-7 transition-colors hover:border-primary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/15">
                <approach.icon className="h-5 w-5 text-accent" />
              </span>
              <h3 className="mt-4 font-display text-lg font-bold text-balance">{approach.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {approach.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Teachers */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Meet Our Tutors
            </h2>
            <p className="mt-2 text-muted-foreground">
              A friendly team helping every learner feel confident, curious and capable.
            </p>
          </div>
          <Button
            render={<Link href="/about" />}
            variant="ghost"
            className="hidden shrink-0 sm:inline-flex"
          >
            View all
          </Button>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.name} teacher={teacher} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/20 via-card to-card p-10 text-center sm:p-16">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            A happy learner is a confident learner
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-pretty">
            Talk to us about your child&apos;s goals and we&apos;ll help you find the right subject, tutor and
            timetable.
          </p>
          <Button render={<Link href="/enroll" />} size="lg" className="mt-8 glow-primary">
            Register Interest
          </Button>
        </div>
      </section>
    </main>
  )
}
