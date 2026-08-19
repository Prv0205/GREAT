import type { Metadata } from 'next'
import {
  Clock,
  Users,
  ShieldCheck,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Enroll · GREAT Galway Tuition',
  description:
    'Find the right support for Junior & Leaving Cert tuition at GREAT, Galway.',
}

const googleFormUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLScq-tigp08gDukwsti_cwtwEZemlaWbvGPQi-ZwOTfoCV_kGA/viewform'

const perks = [
  {
    icon: Sparkles,
    title: 'Free trial session',
    body: 'Sit in on a class before you commit.',
  },
  {
    icon: Users,
    title: 'Small capped groups',
    body: 'Real attention for every student.',
  },
  {
    icon: Clock,
    title: 'Flexible timetable',
    body: 'Evening and weekend slots available.',
  },
  {
    icon: ShieldCheck,
    title: 'Supportive learning',
    body: 'Focused support for school and State Exams.',
  },
]

export default function EnrollPage() {
  return (
    <main className="bg-white">

      {/* =====================================================
          IRISH TRICOLOUR
          ===================================================== */}

      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-[#169B62]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#FF883E]" />
      </div>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="bg-[#F2FAF6]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <span className="inline-flex rounded-full bg-[#E1F3EA] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#169B62]">
            Start learning
          </span>

          <h1 className="mt-5 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-[#173B2B] sm:text-5xl">
            Find the right support
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell us a little about your child and the subjects they would
            like help with. We&apos;ll help you find the right tutor and
            timetable.
          </p>

        </div>
      </section>

      {/* =====================================================
          ENROLMENT
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">

          {/* =================================================
              GOOGLE FORM CARD
              ================================================= */}

          <div className="rounded-2xl border border-[#D7E9DF] bg-white p-8 shadow-sm sm:p-10">

            <div className="max-w-2xl">

              <span className="text-sm font-bold uppercase tracking-wider text-[#FF883E]">
                Registration
              </span>

              <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-[#173B2B]">
                Register your interest
              </h2>

              <p className="mt-4 leading-relaxed text-muted-foreground">
                Complete our short registration form with your child&apos;s
                details, subjects and preferred availability.
              </p>

              {/* Form information */}

              <div className="mt-8 rounded-xl border border-[#BDE5D0] bg-[#F2FAF6] p-6">

                <h3 className="font-display font-bold text-[#173B2B]">
                  What happens next?
                </h3>

                <ol className="mt-4 space-y-4">

                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#169B62] text-sm font-bold text-white">
                      1
                    </span>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Complete the GREAT registration form.
                    </p>
                  </li>

                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#169B62] text-sm font-bold text-white">
                      2
                    </span>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      We review your child&apos;s requirements and preferred
                      timetable.
                    </p>
                  </li>

                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FF883E] text-sm font-bold text-white">
                      3
                    </span>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      We get in touch to discuss the best option for your
                      child.
                    </p>
                  </li>

                </ol>

              </div>

              {/* Google Form button */}

              <a
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#169B62] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#117C4E]"
              >
                Complete Registration Form
                <ExternalLink className="h-4 w-4" />
              </a>

              <p className="mt-3 text-xs text-muted-foreground">
                You&apos;ll be taken to our secure Google registration form.
              </p>

            </div>

          </div>

          {/* =================================================
              WHY GREAT
              ================================================= */}

          <aside className="space-y-4">

            <div className="rounded-2xl border border-[#D7E9DF] bg-white p-6 shadow-sm">

              <h2 className="font-display text-lg font-bold text-[#173B2B]">
                Why parents choose GREAT
              </h2>

              <ul className="mt-5 space-y-5">

                {perks.map((perk) => (
                  <li
                    key={perk.title}
                    className="flex gap-3.5"
                  >

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E8F5EF]">
                      <perk.icon className="h-5 w-5 text-[#169B62]" />
                    </span>

                    <div>
                      <div className="font-medium text-[#173B2B]">
                        {perk.title}
                      </div>

                      <div className="text-sm text-muted-foreground">
                        {perk.body}
                      </div>
                    </div>

                  </li>
                ))}

              </ul>

            </div>

            {/* Contact card */}

            <div className="rounded-2xl border border-[#BDE5D0] bg-[#E8F8F0] p-6">

              <h2 className="font-display text-lg font-bold text-[#173B2B]">
                Prefer to talk?
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Call one of our tutors directly and we&apos;ll be happy to
                answer your questions.
              </p>

              <div className="mt-5 space-y-3">

                <a
                  href="tel:+353892755350"
                  className="block text-sm font-semibold text-[#169B62] hover:text-[#FF883E]"
                >
                  Febi · +353 89 275 5350
                </a>

                <a
                  href="tel:+353872709930"
                  className="block text-sm font-semibold text-[#169B62] hover:text-[#FF883E]"
                >
                  Garima · +353 87 270 9930
                </a>

                <a
                  href="tel:+353872873200"
                  className="block text-sm font-semibold text-[#169B62] hover:text-[#FF883E]"
                >
                  Patrick · +353 87 287 3200
                </a>

              </div>

              <p className="mt-5 text-sm text-muted-foreground">
                Galway City
              </p>

            </div>

          </aside>

        </div>

      </section>

      {/* =====================================================
          BOTTOM CTA
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl border border-[#BDE5D0] bg-[#F2FAF6] p-10 text-center sm:p-14">

          <div className="absolute left-0 right-0 top-0 flex h-1.5">
            <div className="w-1/3 bg-[#169B62]" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-[#FF883E]" />
          </div>

          <h2 className="font-display text-2xl font-extrabold text-[#173B2B] sm:text-3xl">
            Ready to get started?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Complete the registration form and tell us how we can support
            your child.
          </p>

          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#FF883E] px-6 py-3 font-bold text-white shadow-md transition hover:bg-[#E87532]"
          >
            Register Interest
            <ExternalLink className="h-4 w-4" />
          </a>

        </div>

      </section>

    </main>
  )
}
