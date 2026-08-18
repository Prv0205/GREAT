import Image from 'next/image'
import type { Teacher } from '@/lib/site-data'

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function TeacherCard({ teacher }: { teacher: Teacher }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-colors hover:border-primary/50">
      <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-primary/25 via-card to-card">
        {teacher.image ? (
          <Image
            src={teacher.image || '/placeholder.svg'}
            alt={`Portrait of ${teacher.name}`}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/40 bg-primary/15 font-display text-2xl font-extrabold text-accent"
          >
            {initials(teacher.name)}
          </span>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-primary/90 px-2.5 py-1 text-[11px] font-semibold text-primary-foreground">
          {teacher.subject}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display font-bold leading-tight">{teacher.name}</h3>
          <span className="shrink-0 text-xs text-muted-foreground">{teacher.years}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{teacher.bio}</p>
      </div>
    </div>
  )
}
