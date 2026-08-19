import Image from 'next/image'
import Link from 'next/link'
import {
  Clock3,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

import { navLinks, subjects } from '@/lib/site-data'

const classLocations = [
  {
    day: 'Tuesday Classes',
    location: 'GAA Sports Club',
    address: 'Salthill, Galway',
    eircode: 'H91 T0F6',
    mapsUrl:
      'https://www.google.com/maps?q=GAA+Sports+Club+Salthill+Galway+H91+T0F6',
  },
  {
    day: 'Saturday Classes',
    location: 'Ballinfoyle Community Centre',
    address: 'Headford Road, Galway',
    eircode: 'H91 PN50',
    mapsUrl:
      'https://www.google.com/maps?q=Ballinfoyle+Community+Centre+Headford+Road+Galway+H91+PN50',
  },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#123B2B] text-white">

      {/* =====================================================
          IRISH TRICOLOUR
          Correct Irish order: GREEN → WHITE → ORANGE
          ===================================================== */}

      <div
        className="flex h-2 w-full"
        aria-hidden="true"
      >
        <div className="w-1/3 bg-[#169B62]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#FF883E]" />
      </div>

      {/* =====================================================
          MAIN FOOTER
          ===================================================== */}

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-12 md:grid-cols-3">

          {/* =================================================
              BRAND
              ================================================= */}

          <div>

            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-white px-3 py-2"
            >
              <Image
                src="GREAT/logo.png"
                alt="GREAT Galway Regional Education and Tutorial Center"
                width={150}
                height={90}
                className="h-[68px] w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Friendly tuition in Galway for Maths, English, Science and
              Irish — helping children build strong foundations, confidence
              and a positive attitude to learning.
            </p>

            {/* Contact information */}

            <div className="mt-6 space-y-3">

              <a
                href="mailto:hello@great-galway.ie"
                className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-[#FF883E]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#169B62]">
                  <Mail className="h-4 w-4 text-white" />
                </span>

                hello@great-galway.ie
              </a>

              <a
                href="/contact/"
                className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-[#FF883E]"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#169B62]">
                  <Phone className="h-4 w-4 text-white" />
                </span>

                Contact our tutors
              </a>

            </div>

          </div>

          {/* =================================================
              QUICK LINKS
              ================================================= */}

          <div>

            <h3 className="font-display text-base font-bold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 flex flex-col gap-3">

              {navLinks.map((link) => (
                <li key={link.href}>

                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-[#FF883E]"
                  >
                    {link.label}
                  </Link>

                </li>
              ))}

            </ul>

          </div>

          {/* =================================================
              PROGRAMS
              ================================================= */}

          <div>

            <h3 className="font-display text-base font-bold text-white">
              Programs
            </h3>

            <ul className="mt-5 flex flex-col gap-3">

              {subjects.map((subject) => (
                <li key={subject.slug}>

                  <Link
                    href={`/courses/${subject.slug}/`}
                    className="text-sm text-white/65 transition-colors hover:text-[#FF883E]"
                  >
                    {subject.title} Classes
                  </Link>

                </li>
              ))}

              <li>
                <Link
                  href="/courses/"
                  className="text-sm text-white/65 transition-colors hover:text-[#FF883E]"
                >
                  Exam Preparation
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* =====================================================
            DIVIDER
            ===================================================== */}

        <div className="my-12 h-px bg-white/10" />

        {/* =====================================================
            CLASS LOCATIONS
            ===================================================== */}

        <section>

          <div className="text-center">

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF883E]">
              Find us
            </span>

            <h2 className="mt-2 font-display text-2xl font-extrabold text-white">
              Class Locations
            </h2>

            <p className="mx-auto mt-2 max-w-xl text-sm text-white/60">
              Join GREAT tuition sessions at our Galway class locations.
            </p>

          </div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-6 md:grid-cols-2">

            {classLocations.map((location) => (
              <div
                key={location.day}
                className="rounded-2xl border border-white/10 bg-[#1B4A38] p-6 shadow-lg"
              >

                {/* Class title */}

                <div className="flex items-center gap-3">

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#169B62]">
                    <Clock3 className="h-5 w-5 text-white" />
                  </span>

                  <h3 className="font-display text-lg font-bold text-[#FF883E]">
                    {location.day}
                  </h3>

                </div>

                {/* Location */}

                <div className="mt-6 flex items-start gap-3">

                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#169B62]" />

                  <div>

                    <p className="font-semibold text-white">
                      {location.location}
                    </p>

                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                      {location.address}
                      <br />
                      {location.eircode}
                    </p>

                  </div>

                </div>

                {/* Maps */}

                <div className="mt-6 border-t border-white/10 pt-4">

                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#169B62] transition-colors hover:text-[#FF883E]"
                  >
                    <MapPin className="h-4 w-4" />
                    View on Google Maps
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>

                </div>

              </div>
            ))}

          </div>

        </section>

        {/* =====================================================
            CONTACT CTA
            ===================================================== */}

        <div className="mt-12 rounded-2xl border border-[#169B62]/30 bg-[#0E3024] p-7 text-center">

          <h3 className="font-display text-xl font-bold text-white">
            Have a question about tuition?
          </h3>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-white/60">
            Get in touch with our team and we&apos;ll help you find the
            right subject, tutor and timetable for your child.
          </p>

          <Link
            href="/contact/"
            className="mt-5 inline-flex items-center rounded-lg bg-[#169B62] px-6 py-3 text-sm font-bold text-white shadow-md transition-colors hover:bg-[#117C4E]"
          >
            Contact Us
          </Link>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BAR
          ===================================================== */}

      <div className="border-t border-white/10 bg-[#0E3024]">

        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs text-white/50 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} GREAT — Galway Regional Education
            And Tutorial Centre. All rights reserved.
          </p>

      

        </div>

      </div>

    </footer>
  )
}
