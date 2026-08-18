'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PosterCard } from '@/components/poster-card'
import type { Subject } from '@/lib/site-data'

export function ContentRow({
  title,
  subjects,
}: {
  title: string
  subjects: Subject[]
}) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollBy = (dir: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -480 : 480, behavior: 'smooth' })
  }

  return (
    <section className="group/row py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{title}</h2>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollBy('left')}
            aria-label="Scroll left"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy('right')}
            aria-label="Scroll right"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-card text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="no-scrollbar mt-4 flex gap-4 overflow-x-auto scroll-smooth px-4 sm:px-6 lg:px-8"
      >
        {subjects.map((subject) => (
          <PosterCard key={subject.slug} subject={subject} />
        ))}
      </div>
    </section>
  )
}
