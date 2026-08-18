import Link from 'next/link'
import Image from 'next/image'
import { Star, Play } from 'lucide-react'
import type { Subject } from '@/lib/site-data'

export function PosterCard({ subject }: { subject: Subject }) {
  return (
    <Link
      href="/courses"
      className="group relative block w-[200px] shrink-0 overflow-hidden rounded-lg border border-border/60 bg-card transition-all duration-300 hover:scale-[1.04] hover:border-primary/60 hover:glow-primary sm:w-[220px]"
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden">
        <Image
          src={subject.poster || '/placeholder.svg'}
          alt={`${subject.title} course poster`}
          fill
          sizes="220px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-background/70 px-2 py-1 text-[11px] font-medium backdrop-blur-sm">
          <Star className="h-3 w-3 fill-accent text-accent" />
          {subject.rating}
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-display text-lg font-bold leading-tight">{subject.title}</h3>
          <p className="mt-0.5 text-xs text-muted-foreground">{subject.tagline}</p>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 glow-primary">
            <Play className="h-5 w-5 fill-primary-foreground text-primary-foreground" />
          </span>
        </div>
      </div>
    </Link>
  )
}
