export type Subject = {
  slug: string
  title: string
  poster: string
  tagline: string
  level: string
  rating: string
  duration: string
  topics: string[]
  description: string
}

export const subjects: Subject[] = [
  {
    slug: 'maths',
    title: 'Maths',
    poster: '/GREAT/posters/maths.webp',
    tagline: 'Build confidence with numbers',
    level: 'Junior & Leaving Cert',
    rating: 'H1–H3 support',
    duration: '2 hrs / week',
    topics: [
      'Number & Algebra',
      'Geometry',
      'Trigonometry',
      'Statistics',
      'Problem Solving',
    ],
    description:
      'Friendly, step-by-step Maths support that helps students understand the method, practise with confidence and feel ready for school tests and State Exams.',
  },
  {
    slug: 'english',
    title: 'English',
    poster: '/GREAT/posters/english.webp',
    tagline: 'Read, write & express ideas',
    level: 'Junior & Leaving Cert',
    rating: 'H1–H3 support',
    duration: '2 hrs / week',
    topics: [
      'Comprehension',
      'Creative Writing',
      'Poetry',
      'Comparative Study',
      'Exam Technique',
    ],
    description:
      'Make English feel clearer and more enjoyable with guided reading, writing practice and practical techniques for building strong exam answers.',
  },
  {
    slug: 'science',
    title: 'Science',
    poster: '/GREAT/posters/science.webp',
    tagline: 'Discover how the world works',
    level: 'Junior & Leaving Cert',
    rating: 'H1–H3 support',
    duration: '3 hrs / week',
    topics: [
      'Physics',
      'Chemistry',
      'Biology',
      'Experiments',
      'Exam Technique',
    ],
    description:
      'Curiosity-led Science tuition that turns tricky ideas into memorable concepts, with experiments, diagrams and plenty of exam-style practice.',
  },
  {
    slug: 'irish',
    title: 'Irish',
    poster: '/GREAT/posters/irish.webp',
    tagline: 'Gaeilge with confidence',
    level: 'Junior & Leaving Cert',
    rating: 'H1–H3 support',
    duration: '2 hrs / week',
    topics: [
      'An Bhéaltriail',
      'Cluastuiscint',
      'Prós & Filíocht',
      'Aiste',
      'Comhrá',
    ],
    description:
      'Build confidence in spoken and written Irish through conversation, listening, vocabulary and practical preparation for school and State Exams.',
  },
]

export type Teacher = {
  name: string
  subject: string
  image: string
  bio: string
  years: string
}

export const teachers: Teacher[] = [
  {
    name: 'Febi Varghese',
    subject: 'Maths & Science',
    image: '/GREAT/teachers/teacher-1.webp',
    bio: 'A warm, encouraging tutor who breaks Maths into clear steps and helps students enjoy the satisfaction of getting it right.',
    years: 'Tutor',
  },
  {
    name: 'Garima Gupta',
    subject: 'English & Science',
    image: '/GREAT/teachers/teacher-2.webp',
    bio: 'A supportive tutor who brings energy to lessons and helps students turn questions into confident answers.',
    years: 'Tutor',
  },
  {
    name: 'Patrick',
    subject: 'English & Irish',
    image: '/GREAT/teachers/teacher-3.webp',
    bio: 'A friendly tutor focused on building confidence, conversation skills and a positive attitude to learning Irish.',
    years: 'Tutor',
  },
]

export const navLinks = [
  { href: '/GREAT/', label: 'Home' },
  { href: '/GREAT/courses', label: 'Subjects' },
  { href: '/GREAT/about', label: 'Tutors' },
  { href: '/GREAT/enroll', label: 'Enroll' },
]
