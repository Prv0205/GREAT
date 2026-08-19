import Image from 'next/image'
import Link from 'next/link'
import {
  Mail,
  MapPin,
  Phone,
  Clock3,
} from 'lucide-react'

import { navLinks, subjects } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D7E9DF] bg-[#F8FCFA]">

      {/* =====================================================
          IRISH TRICOLOUR
          ===================================================== */}

      <div
        className="absolute inset-x-0 top-0 flex h-1.5"
        aria-hidden="true"
      >
        <div className="w-1/3 bg-[#169B62]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#FF883E]" />
      </div>

      {/* =====================================================
          FOOTER CONTENT
          ===================================================== */}

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">

        {/* =================================================
            BRAND
            ================================================= */}

        <div className="md:col-span-1">

          <Link
            href="/"
            className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-sm ring-1 ring-[#D7E9DF]"
          >
            <Image
              src="/logo.png"
              alt="GREAT Galway Regional Education and Tutorial Center"
              width={150}
              height={90}
              className="h-[70px] w-auto object-contain"
            />
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Friendly tuition in Galway for Maths, English, Science and Irish —
            helping children build confidence and enjoy learning.
          </p>

          {/* Irish colour accent */}

          <div className="mt-5 flex h-1 w-24 overflow-hidden rounded-full">
            <div className="w-1/3 bg-[#169B62]" />
            <div className="w-1/3 bg-white" />
            <div className="w-1/3 bg-[#FF883E]" />
          </div>

        </div>

        {/* =================================================
            EXPLORE
            ================================================= */}

        <div>

          <h3 className="font-display text-sm font-bold text-[#173B2B]">
            Explore
          </h3>

          <ul className="mt-4 flex flex-col gap-2.5">

            {navLinks.map((link) => (
              <li key={link.href}>

                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-[#169B62]"
                >
                  {link.label}
                </Link>

              </li>
            ))}

          </ul>

        </div>

        {/* =================================================
            SUBJECTS
            ================================================= */}

        <div>

          <h3 className="font-display text-sm font-bold text-[#173B2B]">
            Subjects
          </h3>

          <ul className="mt-4 flex flex-col gap-2.5">

            {subjects.map((subject) => (
              <li key={subject.slug}>

                <Link
                  href={`/courses/${subject.slug}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-[#169B62]"
                >
                  {subject.title}
                </Link>

              </li>
            ))}

          </ul>

        </div>

        {/* =================================================
            CONTACT
            ================================================= */}

        <div>

          <h3 className="font-display text-sm font-bold text-[#173B2B]">
            Contact Us
          </h3>

          <ul className="mt-4 flex flex-col gap-4 text-sm text-muted-foreground">

            {/* Address */}

            <li className="flex items-start gap-3">

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E1F3EA]">
                <MapPin className="h-4 w-4 text-[#169B62]" />
              </span>

              <span className="pt-1">
                12 Eyre Square
                <br />
                Galway City
                <br />
                H91 GR8T
              </span>

            </li>

            {/* Email */}

            <li className="flex items-start gap-3">

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E1F3EA]">
                <Mail className="h-4 w-4 text-[#169B62]" />
              </span>

              <a
                href="mailto:hello@great-galway.ie"
                className="pt-1 transition-colors hover:text-[#FF883E]"
              >
                hello@great-galway.ie
              </a>

            </li>

            {/* Phone */}

            <li className="flex items-start gap-3">

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E1F3EA]">
                <Phone className="h-4 w-4 text-[#169B62]" />
              </span>

              <a
                href="/contact"
                className="pt-1 transition-colors hover:text-[#FF883E]"
              >
                Contact our tutors
              </a>

            </li>

            {/* Opening hours */}

            <li className="flex items-start gap-3">

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFF1E8]">
                <Clock3 className="h-4 w-4 text-[#FF883E]" />
              </span>

              <span className="pt-1">
                Tuesday: 16:00 – 18:00
                <br />
                Saturday: 10:00 – 12:00
              </span>

            </li>

          </ul>

          {/* Contact button */}

          <Link
            href="/contact"
            className="mt-5 inline-flex items-center rounded-lg bg-[#169B62] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#117C4E]"
          >
            Contact Us
          </Link>

        </div>

      </div>

      {/* =====================================================
          BOTTOM
          ===================================================== */}

      <div className="border-t border-[#D7E9DF] bg-white">

        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} GREAT — Galway Regional Education
            And Tutorial Centre. All rights reserved.
          </p>

          <p className="font-medium text-[#169B62]">
            Big learning. Bright futures. GREAT.
          </p>

        </div>

      </div>

    </footer>
  )
}
