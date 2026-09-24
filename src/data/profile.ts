// Single source of truth for portfolio content.
// Update this file to change resume/skills/experience data — no component edits needed.

export interface Metric {
  value: string
  label: string
}

export interface ExperienceEntry {
  company: string
  role: string
  location?: string
  sector?: string
  start: string // ISO date, e.g. "2025-03-03"
  end: string | 'present'
  current: boolean
  stack: string[]
  highlights: string[]
  metrics?: Metric[]
  newSkillsLearned?: string[]
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface EducationEntry {
  institution: string
  location?: string
  credential: string
  field: string
  cgpa?: string
  start: string
  end: string
}

export interface ProfileLinks {
  github: string
  linkedin: string
  resume: string
}

export interface Profile {
  name: string
  role: string
  summary: string
  stats: Metric[]
  domains: string[]
  experience: ExperienceEntry[]
  skillGroups: SkillGroup[]
  education: EducationEntry[]
  internships: ExperienceEntry[]
  links: ProfileLinks
}

export const profile: Profile = {
  name: 'Prachi Vats',
  role: 'Software Development Engineer',
  summary:
    "I turn product requirements into fast, accessible interfaces — from a Saudi bank's finance app to a large-scale e-commerce platform — across React, React Native, and Next.js. Right now I'm pushing into new territory: shipping web apps as native desktop products with Tauri, and using AI-assisted workflows (like the one that built this site) to move faster without cutting corners.",

  stats: [
    { value: '4+', label: 'Years of experience' },
    { value: '4', label: 'Industries worked across' },
    { value: '85%', label: 'Test coverage delivered' },
    { value: '70+', label: 'Developers & students trained' },
  ],

  domains: ['Legal & Tax Tech', 'Banking & Fintech', 'E-commerce', 'EdTech'],

  experience: [
    {
      company: 'Taxmann Technologies',
      role: 'Software Engineer',
      sector: 'Legal & Tax Tech',
      start: '2025-03-03',
      end: 'present',
      current: true,
      stack: ['React', 'React Native', 'TypeScript', 'JavaScript'],
      highlights: [
        "Contributing to Taxmann's core product on React and React Native, with growing ownership of platform and delivery decisions beyond feature work.",
      ],
      newSkillsLearned: [
        'Content indexing for faster search and discovery',
        'Packaging the web app as a native desktop application with Tauri',
        'SSO (Single Sign-On) integration',
        'End-to-end delivery of a web app as a shippable desktop product',
      ],
    },
    {
      company: 'Newgen Software',
      role: 'Software Engineer',
      location: 'Noida',
      sector: 'Banking & Fintech',
      start: '2025-01-01',
      end: '2025-02-27',
      current: false,
      stack: ['React', 'React Native', 'Redux Thunk', 'Axios'],
      highlights: [
        'Shipped Cash Finance & Auto Finance experiences for a major Saudi Arabian bank, across Android, iOS, and Web.',
        'Built hook-driven search & filtering with dynamic theming and multi-language support, tuned for render performance.',
        'Led Android delivery end-to-end — build pipelines, security checks, performance — while onboarding new engineers.',
      ],
    },
    {
      company: 'CodeInvicta',
      role: 'Software Development Engineer',
      location: 'Remote',
      sector: 'E-commerce',
      start: '2022-07-01',
      end: '2024-10-01',
      current: false,
      stack: ['React.js', 'React Native', 'Next.js', 'React Query', 'Shadcn'],
      highlights: [
        'Rebuilt core UI flows for a large-scale e-commerce platform, cutting page load times and improving maintainability.',
        'Led a pixel-perfect Next.js + Shadcn rebuild matched to Adobe design specs.',
        'Shipped React Native features that measurably grew mobile engagement, backed by solid test coverage.',
      ],
      metrics: [
        { value: '15%', label: 'faster page loads' },
        { value: '20%', label: 'better data-fetch perf' },
        { value: '30%', label: 'more mobile engagement' },
        { value: '85%', label: 'test coverage' },
      ],
    },
    {
      company: 'UpGrad',
      role: 'Frontend Instructor',
      location: 'Punjab',
      sector: 'EdTech',
      start: '2022-08-01',
      end: '2022-12-01',
      current: false,
      stack: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
      highlights: [
        'Trained 70+ students in React and modern JavaScript through hands-on, project-based sessions.',
        'Built industry-aligned curriculum with UpGrad around component-based architecture and frontend best practices.',
      ],
      metrics: [{ value: '70+', label: 'students trained' }],
    },
  ],

  skillGroups: [
    {
      category: 'Frontend',
      items: [
        'React',
        'React Native',
        'React Hook Form',
        'JavaScript',
        'TypeScript',
        'HTML',
        'CSS',
        'Next.js',
        'Tailwind',
        'Material',
        'ARIA roles',
        'Semantic HTML',
      ],
    },
    {
      category: 'State Management',
      items: ['Redux', 'Redux-Thunk', 'Context API'],
    },
    {
      category: 'Testing',
      items: ['Axios', 'Unit Testing', 'Integration Testing', 'Jest'],
    },
    {
      category: 'Tools & Practices',
      items: [
        'GitHub',
        'Jira',
        'Trello',
        'Agile/Scrum',
        'Code Reviews',
        'Client & Stakeholder Management',
      ],
    },
  ],

  education: [
    {
      institution: 'Dr Akhilesh Das Gupta Institute of Technology & Management',
      location: 'Delhi',
      credential: 'Bachelor of Technology (BTech)',
      field: 'Electrical, Electronics and Communications Engineering',
      cgpa: '9.5',
      start: '2019',
      end: '2022',
    },
    {
      institution: 'Kasturba Institute of Technology',
      location: 'Delhi',
      credential: 'Diploma',
      field: 'Electronics and Communication',
      cgpa: '8.4',
      start: '2015',
      end: '2018',
    },
  ],

  internships: [
    {
      company: 'GirlScript Foundation (Tech In Slum Program)',
      role: 'Lead Mentor – Frontend',
      location: 'Delhi, India',
      start: '2021-10-01',
      end: '2022-03-01',
      current: false,
      stack: ['JavaScript', 'React'],
      highlights: [
        'Reviewed student code and provided structured feedback on JavaScript logic, React component structure, and state management, improving code quality and best-practice adoption.',
        'Assisted in setting up development workflows, including Git basics and debugging processes.',
      ],
    },
    {
      company: 'Bashank Infotech Pvt. Ltd.',
      role: 'Frontend Developer Intern',
      location: 'Delhi, India',
      start: '2021-05-01',
      end: '2021-10-01',
      current: false,
      stack: ['React.js', 'JavaScript'],
      highlights: [
        'Developed and enhanced UI components using React.js and JavaScript, improving usability and responsiveness.',
        'Fixed frontend bugs and collaborated with senior developers to implement features following clean coding practices.',
      ],
    },
  ],

  links: {
    github: 'https://github.com/prachi0513',
    linkedin: 'https://www.linkedin.com/in/prachi-vats-08981a194',
    resume: '/resume.pdf',
  },
}
