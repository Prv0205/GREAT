'use client'

import {
  Clock3,
  Mail,
  Phone,
} from 'lucide-react'

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

export function Contact() {
  return (
    <section className="bg-white">

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

          <h2 className="mt-5 font-display text-4xl font-extrabold tracking-tight text-[#173B2B] sm:text-5xl">
            Contact Us
          </h2>

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

            <h3 className="mt-5 font-display text-xl font-bold text-[#173B2B]">
              Phone
            </h3>

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

            <h3 className="mt-5 font-display text-xl font-bold text-[#173B2B]">
              Email
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Send us your questions anytime.
            </p>

            <a
              href="mailto:greattuitioncentre@gmail.com"
              className="mt-6 block break-all font-semibold text-[#169B62] hover:text-[#FF883E]"
            >
              greattuitioncentre@gmail.com
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

            <h3 className="mt-5 font-display text-xl font-bold text-[#173B2B]">
              Opening Hours
            </h3>

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
          QUICK RESPONSE
          ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-3xl border border-[#BDE5D0] bg-[#E8F8F0] px-6 py-12 text-center sm:px-12">

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
              href="mailto:greattuitioncentre@gmail.com"
              className="inline-flex items-center rounded-lg bg-[#169B62] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#117C4E]"
            >
              Email Us
            </a>

            <a
              href="tel:+353892755350"
              className="inline-flex items-center rounded-lg border border-[#169B62]/30 bg-white px-6 py-3 text-sm font-semibold text-[#169B62] transition hover:bg-[#FFF1E8] hover:text-[#FF883E]"
            >
              Call Us
            </a>

          </div>

        </div>

      </section>

    </section>
  )
}
