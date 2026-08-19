import type { Metadata } from 'next'
import {
  Clock3,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us · GREAT Galway Tuition',
  description:
    'Contact GREAT Galway Regional Education and Tutorial Centre for tuition enquiries.',
}

const contacts = [
  {
    name: 'Febi Varghese',
    phone: '+353 89 275 5350',
  },
  {
    name: 'Garima Gupta',
    phone: '+353 87 270 9930',
  },
  {
    name: 'Patrick',
    phone: '+353 87 287 3200',
  },
]

export default function ContactPage() {
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
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">

          <span className="inline-flex rounded-full bg-[#E1F3EA] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#169B62]">
            Get in touch
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-[#173B2B] sm:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Have questions about tuition, subjects or enrolment?
            We&apos;re here to help you find the right support for your child.
          </p>

        </div>
      </section>

      {/* =====================================================
          CONTACT CARDS
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-6 md:grid-cols-3">

          {/* PHONE */}

          <div className="rounded-2xl border border-[#D7E9DF] bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E1F3EA]">
              <Phone className="h-7 w-7 text-[#169B62]" />
            </div>

            <h2 className="mt-5 font-display text-xl font-bold text-[#173B2B]">
              Phone
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Speak directly with our tutors.
            </p>

            <div className="mt-6 space-y-3">

              {contacts.map((contact) => (
                <div
                  key={contact.name}
                  className="rounded-xl bg-[#F8FCFA] px-4 py-3"
                >
                  <p className="text-sm font-semibold text-[#173B2B]">
                    {contact.name}
                  </p>

                  <a
                    href={`tel:${contact.phone}`}
                    className="mt-1 block text-sm font-semibold text-[#169B62] hover:text-[#FF883E]"
                  >
                    {contact.phone}
                  </a>
                </div>
              ))}

            </div>
          </div>

          {/* EMAIL */}

          <div className="rounded-2xl border border-[#D7E9DF] bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#E1F3EA]">
              <Mail className="h-7 w-7 text-[#169B62]" />
            </div>

            <h2 className="mt-5 font-display text-xl font-bold text-[#173B2B]">
              Email
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Send us your questions anytime.
            </p>

            <a
              href="mailto:greattuitioncentre@gmail.com"
              className="mt-6 block break-all font-semibold text-[#169B62] hover:text-[#FF883E]"
            >
              hello@great-galway.ie
            </a>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Tell us your child&apos;s year, subjects and what support
              they need, and we&apos;ll get back to you.
            </p>

          </div>

          {/* OPENING HOURS */}

          <div className="rounded-2xl border border-[#D7E9DF] bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF1E8]">
              <Clock3 className="h-7 w-7 text-[#FF883E]" />
            </div>

            <h2 className="mt-5 font-display text-xl font-bold text-[#173B2B]">
              Opening Hours
            </h2>

            <div className="mt-6 space-y-5">

              <div>
                <p className="font-semibold text-[#173B2B]">
                  Tuesday
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  16:00 – 18:00
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#173B2B]">
                  Saturday
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  10:00 – 12:00
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          VISIT US
          ===================================================== */}

      <section className="bg-[#F8FCFA]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            {/* INFORMATION */}

            <div>

              <span className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF883E]">
                Visit us
              </span>

              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#173B2B] sm:text-4xl">
                Visit the GREAT Centre
              </h2>

              <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                We welcome parents and students who would like to learn
                more about our tuition programmes and how we can support
                their learning journey.
              </p>

              <div className="mt-7 flex items-start gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E1F3EA]">
                  <MapPin className="h-6 w-6 text-[#169B62]" />
                </div>

                <div>
                  <h3 className="font-display font-bold text-[#173B2B]">
                    GREAT Galway
                  </h3>

                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    12 Eyre Square
                    <br />
                    Galway City
                    <br />
                    H91 GR8T
                  </p>
                </div>

              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=12+Eyre+Square+Galway+Ireland"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center rounded-lg bg-[#169B62] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#117C4E]"
              >
                Get Directions
              </a>

            </div>

            {/* MAP PLACEHOLDER */}

            <div className="relative min-h-[340px] overflow-hidden rounded-2xl border border-[#D7E9DF] bg-[#E1F3EA] shadow-sm">

              {/* Decorative map lines */}

              <div className="absolute inset-0 opacity-40">
                <div className="absolute left-[5%] top-[25%] h-px w-[90%] rotate-12 bg-[#169B62]" />
                <div className="absolute left-[5%] top-[65%] h-px w-[90%] -rotate-6 bg-[#169B62]" />
                <div className="absolute left-[30%] top-[5%] h-[90%] w-px rotate-[20deg] bg-[#169B62]" />
                <div className="absolute left-[70%] top-[5%] h-[90%] w-px -rotate-[15deg] bg-[#169B62]" />
              </div>

              {/* Location */}

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="text-center">

                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#169B62] shadow-lg">

                    <MapPin className="h-10 w-10 text-white" />

                  </div>

                  <div className="mt-4 rounded-xl bg-white px-6 py-4 shadow-lg">

                    <p className="font-display font-bold text-[#173B2B]">
                      GREAT Galway
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      12 Eyre Square
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK RESPONSE
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl border border-[#BDE5D0] bg-[#E8F8F0] px-6 py-12 text-center sm:px-12">

          {/* Tricolour accent */}

          <div className="absolute left-0 right-0 top-0 flex h-1.5">
            <div className="w-1/3 bg-[#169B62]" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-[#FF883E]" />
          </div>

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#169B62]">
            <Mail className="h-6 w-6 text-white" />
          </div>

          <h2 className="mt-5 font-display text-2xl font-extrabold text-[#173B2B] sm:text-3xl">
            We&apos;d love to hear from you
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Whether you&apos;re looking for Maths, English, Science or Irish
            tuition, get in touch and let&apos;s talk about how GREAT can
            support your child.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">

            <a
              href="mailto:hello@great-galway.ie"
              className="inline-flex items-center rounded-lg bg-[#169B62] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#117C4E]"
            >
              Email Us
            </a>

            <a
              href="tel:+353000000000"
              className="inline-flex items-center rounded-lg border border-[#169B62]/30 bg-white px-6 py-3 text-sm font-semibold text-[#169B62] transition hover:bg-[#FFF1E8] hover:text-[#FF883E]"
            >
              Call Us
            </a>

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM TRICOLOUR
          ===================================================== */}

      <div className="flex h-1.5 w-full">
        <div className="w-1/3 bg-[#169B62]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#FF883E]" />
      </div>

    </main>
  )
}
