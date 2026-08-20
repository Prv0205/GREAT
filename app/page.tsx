import Link from 'next/link'
import Image from 'next/image'
import { Play, Info, GraduationCap, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TeacherCard } from '@/components/teacher-card'
import { subjects, teachers } from '@/lib/site-data'
import { Contact } from '@/components/contact'

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
      {/* =====================================================
          HERO
          ===================================================== */}
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
         {/* GREAT logo watermark */}
        <div
          className="pointer-events-none absolute right-[-120px] top-1/2 z-[1] -translate-y-1/2 sm:right-[-100px] md:right-[-80px]"
          aria-hidden="true"
        >
          <Image
            src="/logo.png"
            alt=""
            width={650}
            height={650}
            className="h-[360px] w-[360px] object-contain opacity-[0.10] sm:h-[450px] sm:w-[450px] md:h-[560px] md:w-[560px] md:opacity-[0.18]"
          />
        </div>

          {/* Green / white / orange Irish-inspired overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
        </div>

        <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
          {/* Irish tricolour badge */}
          <div className="mb-5 w-fit overflow-hidden rounded-full border border-border bg-white shadow-sm">
            <div className="flex h-1">
              <span className="w-1/3 bg-[#169B62]" />
              <span className="w-1/3 bg-white" />
              <span className="w-1/3 bg-[#FF883E]" />
            </div>

            <div className="flex items-center gap-2 px-4 py-2">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#169B62]" />

              <span className="text-xs font-semibold text-[#169B62]">
                Now welcoming learners · Galway
              </span>
            </div>
          </div>

          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-6xl">
            Big learning.{' '}
            <span className="text-[#169B62]">Bright futures.</span>{' '}
            GREAT.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
            Friendly tuition for Junior Infants to Leaving Cert. We help
            children build strong foundations, confidence and exam skills in
            Maths, English, Science and Irish.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              render={<Link href="/enroll" />}
              size="lg"
              className="bg-[#169B62] text-white hover:bg-[#117C4E] glow-primary"
            >
              <Play className="fill-white" />
              Register Interest
            </Button>

            <Button
              render={<Link href="/courses" />}
              size="lg"
              variant="secondary"
              className="border border-[#169B62]/30 bg-white hover:bg-[#E8F5EF]"
            >
              <Info />
              Browse Subjects
            </Button>
          </div>
        </div>

        {/* Irish tricolour bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 flex h-1.5">
          <div className="w-1/3 bg-[#169B62]" />
          <div className="w-1/3 bg-white" />
          <div className="w-1/3 bg-[#FF883E]" />
        </div>
      </section>

      {/* =====================================================
          EXPLORE OUR SUBJECTS
          ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <div className="mb-3 flex justify-center">
            <span className="rounded-full bg-[#E8F5EF] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#169B62]">
              Explore Our Subjects
            </span>
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            Learning made{' '}
            <span className="text-[#169B62]">fun and engaging</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            With expert support in Maths, English, Science and Irish, we help children learn with confidence, 
            making every lesson engaging, enjoyable and meaningful.
          </p>
        </div>

        {/* Four evenly aligned subject cards */}
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {subjects.map((subject, index) => (
            <Link
              key={subject.slug}
              href={`/courses/${subject.slug}`}
              className="group flex h-full"
            >
              <article className="flex h-full w-full flex-col overflow-hidden rounded-2xl border-2 border-border bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#169B62] hover:shadow-lg">
                {/* Subject image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={subject.poster}
                    alt={`${subject.title} lessons`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Number badge */}
                  <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-sm font-extrabold text-[#169B62] shadow">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-extrabold text-[#169B62]">
                    {subject.title}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-[#FF883E]">
                    {subject.tagline}
                  </p>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {subject.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <span className="text-xs font-semibold text-muted-foreground">
                      {subject.level}
                    </span>

                    <span className="text-sm font-bold text-[#169B62] transition-colors group-hover:text-[#FF883E]">
                      Explore →
                    </span>
                  </div>
                </div>

                {/* Irish tricolour accent */}
                <div className="flex h-1">
                  <div className="w-1/3 bg-[#169B62]" />
                  <div className="w-1/3 bg-white" />
                  <div className="w-1/3 bg-[#FF883E]" />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================
          OUR APPROACHES
          ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold uppercase tracking-wider text-[#169B62]">
            How we help
          </span>

          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
            Our approaches
          </h2>

          <p className="mt-2 max-w-2xl text-muted-foreground text-pretty">
            Two ways we help every student — pick the focus that fits, or blend
            both.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {approaches.map((approach) => (
            <div
              key={approach.title}
              className="rounded-2xl border border-border/60 bg-card p-7 transition-all hover:-translate-y-1 hover:border-[#169B62]/50 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F5EF]">
                <approach.icon className="h-5 w-5 text-[#169B62]" />
              </span>

              <h3 className="mt-4 font-display text-lg font-bold text-balance">
                {approach.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                {approach.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================
          MEET OUR TUTORS
          ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-[#FF883E]">
              Meet Our Teachers
            </span>

            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">
              Friendly tutors who care
            </h2>

            <p className="mt-2 max-w-2xl text-muted-foreground">
              A friendly team helping every learner feel confident, curious and
              capable.
            </p>
          </div>

          <Button
            render={<Link href="/about" />}
            variant="ghost"
            className="hidden shrink-0 text-[#169B62] hover:bg-[#E8F5EF] sm:inline-flex"
          >
            View all
          </Button>
        </div>

        {/* Three equally aligned tutors */}
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.name} teacher={teacher} />
          ))}
        </div>
      </section>

      <Contact />

      {/* =====================================================
          CTA
          ===================================================== */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-[#169B62]/30 bg-white p-10 text-center shadow-sm sm:p-16">
          {/* Decorative Irish colours */}
          <div className="absolute left-0 right-0 top-0 flex h-1.5">
            <div className="w-1/3 bg-[#169B62]" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-[#FF883E]" />
          </div>

          <div className="relative">
            <span className="inline-block rounded-full bg-[#FFF1E8] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#E66F25]">
              Ready to get started?
            </span>

            <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              A happy learner is a{' '}
              <span className="text-[#169B62]">confident learner</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-pretty">
              Talk to us about your child&apos;s goals and we&apos;ll help you
              find the right subject, tutor and timetable.
            </p>

            <Button
              render={<Link href="/enroll" />}
              size="lg"
              className="mt-8 bg-[#169B62] text-white hover:bg-[#117C4E] glow-primary"
            >
              Register Interest
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
