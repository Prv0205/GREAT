import type { Metadata } from 'next'
import { Contact } from '@/components/contact'

export const metadata: Metadata = {
  title: 'Contact Us · GREAT Galway Tuition',
  description:
    'Contact GREAT Galway Regional Education and Tutorial Centre for tuition enquiries.',
}

export default function ContactPage() {
  return <Contact />
}
