'use client'

import { useState } from 'react'
import { Check, PartyPopper } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { subjects } from '@/lib/site-data'

const levels = ['Junior Cert', 'Leaving Cert', 'Not sure yet']

const inputClasses =
  'w-full rounded-md border border-input bg-secondary/50 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30'

const labelClasses = 'mb-1.5 block text-sm font-medium'

export function EnrollForm() {
  const [selected, setSelected] = useState<string[]>([])
  const [level, setLevel] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const toggleSubject = (title: string) => {
    setSelected((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/40 bg-card p-10 text-center glow-primary">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
          <PartyPopper className="h-7 w-7 text-accent" />
        </span>
        <h2 className="mt-5 font-display text-2xl font-bold">You&apos;re on the list</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground text-pretty">
          Thanks for registering your interest with GREAT. Our team will be in touch within one
          working day to arrange your timetable and trial session.
        </p>
        <Button className="mt-7" variant="secondary" onClick={() => setSubmitted(false)}>
          Register another student
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="parent" className={labelClasses}>
            Parent / Guardian name
          </label>
          <input id="parent" name="parent" required className={inputClasses} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="student" className={labelClasses}>
            Student name
          </label>
          <input
            id="student"
            name="student"
            required
            className={inputClasses}
            placeholder="Student's name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClasses}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClasses}
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={inputClasses}
            placeholder="(0__) ___ ____"
          />
        </div>
      </div>

      <fieldset className="mt-6">
        <legend className={labelClasses}>Exam level</legend>
        <div className="flex flex-wrap gap-2">
          {levels.map((l) => (
            <button
              type="button"
              key={l}
              onClick={() => setLevel(l)}
              className={cn(
                'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                level === l
                  ? 'border-primary bg-primary/15 text-foreground'
                  : 'border-border/60 bg-secondary/40 text-muted-foreground hover:text-foreground',
              )}
            >
              {l}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className={labelClasses}>Subjects of interest</legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {subjects.map((s) => {
            const active = selected.includes(s.title)
            return (
              <button
                type="button"
                key={s.slug}
                onClick={() => toggleSubject(s.title)}
                className={cn(
                  'flex items-center justify-between rounded-md border px-4 py-3 text-sm font-medium transition-colors',
                  active
                    ? 'border-primary bg-primary/15 text-foreground'
                    : 'border-border/60 bg-secondary/40 text-muted-foreground hover:text-foreground',
                )}
              >
                {s.title}
                <span
                  className={cn(
                    'flex h-5 w-5 items-center justify-center rounded-full border',
                    active ? 'border-primary bg-primary' : 'border-border',
                  )}
                >
                  {active && <Check className="h-3 w-3 text-primary-foreground" />}
                </span>
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="mt-6">
        <label htmlFor="message" className={labelClasses}>
          Anything else? <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={cn(inputClasses, 'resize-none')}
          placeholder="Target grades, preferred days, questions..."
        />
      </div>

      <Button type="submit" size="lg" className="mt-7 w-full glow-primary">
        Register Interest
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        We&apos;ll never share your details. One working day response.
      </p>
    </form>
  )
}
