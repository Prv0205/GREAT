import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeft,
  Check,
  Clock,
  GraduationCap,
  Play,
  Star,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { subjects } from '@/lib/site-data'

type SubjectPageProps = {
  params: {
    slug: string
  }
}

/*
 * GitHub Pages uses a static export.
 * This tells Next.js which subject pages to create.
 */
export function generateStaticParams() {
  return subjects.map((subject) => ({
    slug: subject.slug,
  }))
}

/*
 * Page metadata
 */
export async function generateMetadata({
  params,
}: SubjectPageProps): Promise<Metadata> {
  const subject = subjects.find(
    (item) => item.slug === params.slug
  )

  if (!subject) {
    return {
      title: 'Subject Not Found · GREAT Galway Tuition',
    }
  }

  return {
    title: `${subject.title} · GREAT Galway Tuition`,
    description: subject.description,
  }
}

export default function SubjectPage({
  params,
}: SubjectPageProps) {
  const subject = subjects.find(
    (item) => item.slug === params.slug
  )

  /*
   * If somebody enters an invalid subject URL
   */
  if (!subject) {
    return (
      <main className="min-h-[70vh] px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl font-extrabold">
            Subject not found
          </h1>

          <p className="mt-4 text-muted-foreground">
            Sorry, we could not find the subject you are looking for.
          </p>

          <Button
            render={<Link href="/courses" />}
            className="mt-8 bg-[#169B62] text-white hover:bg-[#117C4E]"
          >
            Back to Subjects
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* =====================================================
          IRISH TRICOLOUR TOP STRIP
          ===================================================== */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-[#169B62]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#FF883E]" />
      </div>

      {/* =====================================================
          SUBJECT HERO
          ===================================================== */}
      <section className="border-b border-border/60 bg-[#F8FCFA]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#169B62] transition-colors hover:text-[#FF883E]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Subjects
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[360px_1fr]">
            {/* =================================================
                SUBJECT POSTER
                ================================================= */}
            <div className="relative mx-auto aspect-[2/3] w-full max-w-[360px] overflow-hidden rounded-2xl border-2 border-[#D7E9DF] bg-white shadow-lg">
              <Image
                src={subject.poster}
                alt={`${subject.title} course poster`}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 360px"
                className="object-cover"
              />
            </div>

            {/* =================================================
                SUBJECT INFORMATION
                ================================================= */}
            <div>
              {/* Rating / level / duration */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1 rounded-full bg-[#E8F5EF] px-3 py-1.5 text-xs font-bold text-[#169B62]">
                  <Star className="h-3.5 w-3.5 fill-[#FF883E] text-[#FF883E]" />
                  {subject.rating}
                </span>

                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <GraduationCap className="h-4 w-4 text-[#169B62]" />
                  {subject.level}
                </span>

                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 text-[#169B62]" />
                  {subject.duration}
                </span>
              </div>

              {/* Subject title */}
              <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                <span className="text-[#169B62]">
                  {subject.title}
                </span>
              </h1>

              {/* Tagline */}
              <p className="mt-2 text-lg font-semibold text-[#FF883E]">
                {subject.tagline}
              </p>

              {/* Description */}
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {subject.description}
              </p>

              {/* =================================================
                  TOPICS
                  ================================================= */}
              <div className="mt-8">
                <h2 className="font-display text-xl font-bold">
                  What we cover
                </h2>

                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {subject.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E8F5EF]">
                        <Check className="h-4 w-4 text-[#169B62]" />
                      </span>

                      <span className="text-sm font-medium">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* =================================================
                  ACTION BUTTONS
                  ================================================= */}
              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  render={<Link href="/enroll" />}
                  size="lg"
                  className="bg-[#169B62] text-white hover:bg-[#117C4E] glow-primary"
                >
                  <Play className="fill-white" />
                  Enroll in {subject.title}
                </Button>

                <Button
                  render={<Link href="/about" />}
                  size="lg"
                  variant="secondary"
                  className="border border-[#169B62]/20 bg-white hover:bg-[#E8F5EF]"
                >
                  Meet Our Tutors
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY GREAT
          ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-[#169B62]">
            GREAT Tuition
          </span>

          <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Build confidence in {subject.title}
          </h2>

          <p className="mt-4 leading-relaxed text-muted-foreground">
            Our friendly approach helps students understand the subject,
            practise important skills and develop the confidence they need
            for school assessments and State Exams.
          </p>
        </div>

        {/* Three benefits */}
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {/* Curriculum */}
          <div className="rounded-2xl border border-[#D7E9DF] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5EF]">
              <GraduationCap className="h-5 w-5 text-[#169B62]" />
            </div>

            <h3 className="mt-4 font-display text-lg font-bold">
              Curriculum Support
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Lessons designed around what students are learning at school.
            </p>
          </div>

          {/* Confidence */}
          <div className="rounded-2xl border border-[#D7E9DF] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF1E8]">
              <Star className="h-5 w-5 text-[#FF883E]" />
            </div>

            <h3 className="mt-4 font-display text-lg font-bold">
              Confidence Building
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Friendly guidance that helps learners become more confident
              and independent.
            </p>
          </div>

          {/* Exams */}
          <div className="rounded-2xl border border-[#D7E9DF] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5EF]">
              <Check className="h-5 w-5 text-[#169B62]" />
            </div>

            <h3 className="mt-4 font-display text-lg font-bold">
              Exam Preparation
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Practical preparation for school tests and State Exams.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SUBJECT TOPICS
          ===================================================== */}
      <section className="bg-[#F8FCFA]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-[#FF883E]">
              Learning with GREAT
            </span>

            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
              Everything your child needs
            </h2>

            <p className="mt-4 text-muted-foreground">
              We combine clear explanations, regular practice and
              encouragement to make learning enjoyable.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-[#D7E9DF] bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {subject.topics.map((topic, index) => (
                <div
                  key={topic}
                  className="flex items-center gap-3 rounded-xl bg-[#F8FCFA] p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#169B62] text-xs font-bold text-white">
                    {index + 1}
                  </span>

                  <span className="font-medium">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
          ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#169B62]/30 bg-white p-10 text-center shadow-sm sm:p-14">
          {/* Irish tricolour */}
          <div className="absolute left-0 right-0 top-0 flex h-1.5">
            <div className="w-1/3 bg-[#169B62]" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-[#FF883E]" />
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready to get started with{' '}
            <span className="text-[#169B62]">
              {subject.title}
            </span>
            ?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Talk to us about your child&apos;s goals and we&apos;ll help
            you find the right tutor and timetable.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              render={<Link href="/enroll" />}
              size="lg"
              className="bg-[#169B62] text-white hover:bg-[#117C4E] glow-primary"
            >
              Register Interest
            </Button>

            <Button
              render={<Link href="/courses" />}
              size="lg"
              variant="secondary"
              className="border border-[#169B62]/20"
            >
              Explore All Subjects
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
