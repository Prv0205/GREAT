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

type Props = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return subjects.map((subject) => ({
    slug: subject.slug,
  }))
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params

  const subject = subjects.find(
    (item) => item.slug === slug
  )

  return {
    title: subject
      ? `${subject.title} · GREAT Galway Tuition`
      : 'Subject · GREAT Galway Tuition',
    description: subject?.description,
  }
}

export default async function SubjectPage({
  params,
}: Props) {
  const { slug } = await params

  const subject = subjects.find(
    (item) => item.slug === slug
  )

  if (!subject) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold">
            Subject not found
          </h1>

          <p className="mt-4 text-muted-foreground">
            We could not find this subject.
          </p>

          <Button
            render={<Link href="/courses" />}
            className="mt-8 bg-[#169B62] text-white"
          >
            Back to Subjects
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main>
      {/* Irish flag colours */}
      <div className="flex h-1.5">
        <div className="w-1/3 bg-[#169B62]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#FF883E]" />
      </div>

      {/* Subject header */}
      <section className="bg-[#F8FCFA]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 font-semibold text-[#169B62]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Subjects
          </Link>

          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[360px_1fr]">

            {/* Image */}
            <div className="relative mx-auto aspect-[2/3] w-full max-w-[360px] overflow-hidden rounded-2xl bg-white shadow-lg">

              <Image
                src={subject.poster}
                alt={`${subject.title} course poster`}
                fill
                priority
                sizes="360px"
                className="object-cover"
              />

            </div>

            {/* Details */}
            <div>

              <div className="flex flex-wrap gap-3 text-sm">

                <span className="flex items-center gap-1 rounded-full bg-[#E8F5EF] px-3 py-1.5 font-semibold text-[#169B62]">
                  <Star className="h-4 w-4 fill-[#FF883E] text-[#FF883E]" />
                  {subject.rating}
                </span>

                <span className="flex items-center gap-1 text-muted-foreground">
                  <GraduationCap className="h-4 w-4 text-[#169B62]" />
                  {subject.level}
                </span>

                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-4 w-4 text-[#169B62]" />
                  {subject.duration}
                </span>

              </div>

              <h1 className="mt-5 font-display text-5xl font-extrabold text-[#169B62]">
                {subject.title}
              </h1>

              <p className="mt-2 text-lg font-semibold text-[#FF883E]">
                {subject.tagline}
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                {subject.description}
              </p>

              {/* Topics */}
              <h2 className="mt-8 font-display text-xl font-bold">
                What we cover
              </h2>

              <ul className="mt-4 grid gap-3 sm:grid-cols-2">

                {subject.topics.map((topic) => (
                  <li
                    key={topic}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E8F5EF]">
                      <Check className="h-4 w-4 text-[#169B62]" />
                    </span>

                    <span className="text-sm font-medium">
                      {topic}
                    </span>
                  </li>
                ))}

              </ul>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">

                <Button
                  render={<Link href="/enroll" />}
                  size="lg"
                  className="bg-[#169B62] text-white hover:bg-[#117C4E]"
                >
                  <Play className="fill-white" />
                  Enroll in {subject.title}
                </Button>

                <Button
                  render={<Link href="/about" />}
                  size="lg"
                  variant="secondary"
                >
                  Meet Our Tutors
                </Button>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why GREAT */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold text-[#169B62]">
            GREAT TUITION
          </span>

          <h2 className="mt-2 font-display text-3xl font-extrabold">
            Build confidence in {subject.title}
          </h2>

          <p className="mt-4 text-muted-foreground">
            Friendly tuition that helps students understand,
            practise and enjoy learning.
          </p>

        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <GraduationCap className="h-7 w-7 text-[#169B62]" />

            <h3 className="mt-4 font-bold">
              Curriculum Support
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Lessons connected to what students learn at school.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <Star className="h-7 w-7 text-[#FF883E]" />

            <h3 className="mt-4 font-bold">
              Confidence Building
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Encouraging lessons that help students become confident learners.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <Check className="h-7 w-7 text-[#169B62]" />

            <h3 className="mt-4 font-bold">
              Exam Preparation
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Practical preparation for tests and State Exams.
            </p>
          </div>

        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

        <div className="overflow-hidden rounded-3xl border border-[#169B62]/30 bg-white p-10 text-center shadow-sm">

          <div className="mx-auto mb-8 flex h-1.5 max-w-md">
            <div className="w-1/3 bg-[#169B62]" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-[#FF883E]" />
          </div>

          <h2 className="font-display text-3xl font-extrabold">
            Ready to get started with {subject.title}?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Talk to us about your child&apos;s goals and we&apos;ll
            help you find the right tutor and timetable.
          </p>

          <Button
            render={<Link href="/enroll" />}
            size="lg"
            className="mt-8 bg-[#169B62] text-white hover:bg-[#117C4E]"
          >
            Register Interest
          </Button>

        </div>

      </section>
    </main>
  )
}
