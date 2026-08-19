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
    <header className="sticky top-0 z-50 border-b border-[#D7E9DF] bg-[#F2FAF6]/95 shadow-sm backdrop-blur-xl">

      {/* Irish tricolour */}
      <div
        className="absolute inset-x-0 top-0 flex h-1"
        aria-hidden="true"
      >
        <div className="w-1/3 bg-[#169B62]" />
        <div className="w-1/3 bg-white" />
        <div className="w-1/3 bg-[#FF883E]" />
      </div>

      <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">

        {/* =====================================================
            LOGO
            ===================================================== */}

        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
          aria-label="GREAT Galway Tuition home"
        >
          <Image
            src="/GREAT/logo.jpg"
            alt="GREAT Galway Regional Education and Tutorial Center"
            width={170}
            height={105}
            priority
            className="h-[78px] w-auto object-contain sm:h-[84px]"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}

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
                  'relative rounded-md px-4 py-2 text-sm font-semibold transition-colors',
                  active
                    ? 'text-[#169B62]'
                    : 'text-muted-foreground hover:text-[#169B62]',
                )}
              >
                {link.label}

                {/* Active indicator */}
                {active && (
                  <span className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-[#FF883E]" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* =====================================================
            REGISTER BUTTON
            ===================================================== */}

        <div className="hidden md:block">
          <Button
            render={<Link href="/enroll" />}
            className="bg-[#169B62] text-white shadow-md transition-colors hover:bg-[#117C4E]"
          >
            Register Interest
          </Button>
        </div>

        {/* =====================================================
            MOBILE MENU BUTTON
            ===================================================== */}

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground transition-colors hover:bg-secondary md:hidden"
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
        <nav className="border-t border-border/60 bg-background/98 px-4 py-4 shadow-lg md:hidden">
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
                      ? 'bg-[#E8F5EF] text-[#169B62]'
                      : 'text-muted-foreground hover:bg-secondary hover:text-[#169B62]',
                  )}
                >
                  {link.label}
                </Link>
              )
            })}

            <Button
              render={
                <Link
                  href="/enroll"
                  onClick={() => setOpen(false)}
                />
              }
              className="mt-3 w-full bg-[#169B62] text-white hover:bg-[#117C4E]"
            >
              Register Interest
            </Button>

          </div>
        </nav>
      )}
    </header>
  )
}
