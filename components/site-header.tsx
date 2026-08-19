'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { cn } from '@/lib/utils'
import { navLinks } from '@/lib/site-data'
import { Button } from '@/components/ui/button'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#123B2B] shadow-md backdrop-blur-xl">

      {/* =====================================================
          IRISH TRICOLOUR
          GREEN → WHITE → ORANGE
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
          HEADER CONTENT
          ===================================================== */}

      <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* ===================================================
            LOGO
            =================================================== */}

        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="GREAT Galway Tuition home"
        >
          <div className="rounded-xl bg-white px-2 py-1 shadow-sm">
            <Image
              src="/logo.png"
              alt="GREAT Galway Regional Education and Tutorial Center"
              width={170}
              height={105}
              priority
              className="h-[76px] w-auto object-contain sm:h-[82px]"
            />
          </div>
        </Link>

        {/* ===================================================
            DESKTOP NAVIGATION
            =================================================== */}

        <nav className="hidden items-center gap-1 md:flex">

          {navLinks.map((link) => {

            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-200',

                  active
                    ? 'bg-white/10 text-[#FF883E]'
                    : 'text-white/90 hover:bg-white/10 hover:text-white',
                )}
              >
                {link.label}

                {/* Orange active indicator */}

                {active && (
                  <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-[#FF883E]" />
                )}

              </Link>
            )
          })}

        </nav>

        {/* ===================================================
            REGISTER INTEREST
            =================================================== */}

        <div className="hidden md:block">

          <Button
            render={<Link href="/enroll" />}
            className="bg-[#FF883E] font-semibold text-white shadow-md transition-all hover:bg-[#E87532] hover:shadow-lg"
          >
            Register Interest
          </Button>

        </div>

        {/* ===================================================
            MOBILE MENU BUTTON
            =================================================== */}

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

      </div>

      {/* =====================================================
          MOBILE NAVIGATION
          ===================================================== */}

      {open && (
        <nav className="border-t border-white/10 bg-[#123B2B] px-4 py-4 shadow-lg md:hidden">

          <div className="flex flex-col gap-1">

            {navLinks.map((link) => {

              const active =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-lg px-4 py-3 text-sm font-semibold transition-colors',

                    active
                      ? 'bg-white/10 text-[#FF883E]'
                      : 'text-white/85 hover:bg-white/10 hover:text-white',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}

            {/* Mobile CTA */}

            <Button
              render={
                <Link
                  href="/enroll"
                  onClick={() => setOpen(false)}
                />
              }
              className="mt-3 w-full bg-[#FF883E] font-semibold text-white hover:bg-[#E87532]"
            >
              Register Interest
            </Button>

          </div>

        </nav>
      )}

    </header>
  )
}
