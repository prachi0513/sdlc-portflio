// Single source of truth for portfolio content.
// Update this file to change resume/skills/experience data — no component edits needed.

export interface ExperienceEntry {
  company: string
  role: string
  location?: string
  start: string // ISO date, e.g. "2025-03-03"
  end: string | 'present'
  current: boolean
  stack: string[]
  highlights: string[]
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
  title: string
  summary: string
  experience: ExperienceEntry[]
  skillGroups: SkillGroup[]
  education: EducationEntry[]
  internships: ExperienceEntry[]
  links: ProfileLinks
}

export const profile: Profile = {
  name: 'Prachi Vats',
  title: 'Software Development Engineer (Frontend) | React | React Native',
  summary:
    'Frontend Software Engineer with 4+ years of experience building scalable web and mobile applications using React, React Native, JavaScript, TypeScript, and Next.js. Experienced in performance optimization, state management, and API integration, with current focus on taking web apps to shippable desktop products with Tauri, SSO integration, and AI-assisted development practices.',

  experience: [
    {
      company: 'Taxmann Technologies',
      role: 'Software Engineer',
      start: '2025-03-03',
      end: 'present',
      current: true,
      stack: ['React', 'React Native', 'TypeScript', 'JavaScript'],
      highlights: [
        'Working on the core React / React Native stack, extending prior experience into new platform and delivery concerns.',
      ],
      newSkillsLearned: [
        'Indexing',
        'Building web applications with Tauri (web app to native/desktop-style app)',
        'SSO (Single Sign-On) integration',
        'Taking an app from a web app to a shippable "website" product',
      ],
    },
    {
      company: 'Newgen Software',
      role: 'Software Engineer',
      location: 'Noida',
      start: '2025-01-01',
      end: '2025-02-27',
      current: false,
      stack: ['React', 'React Native', 'Redux Thunk', 'Axios'],
      highlights: [
        'Built a large-scale digital finance platform for a leading Saudi Arabian bank, delivering Cash Finance and Auto Finance solutions across Android, iOS, and Web platforms.',
        'Developed responsive, cross-platform interfaces using React, React Native, Redux Thunk, and Axios, ensuring consistent performance and user experience.',
        'Built advanced search and filtering features leveraging React Hooks (useMemo, useCallback, useEffect) to minimize unnecessary re-renders, improve rendering performance, and support dynamic theming and multi-language accessibility.',
        'Led Android application development, managing build pipelines, integrating security checks, and optimizing performance through debouncing and lazy loading techniques.',
        'Collaborated with product managers and cross-functional teams, and mentored new engineers, accelerating onboarding and improving delivery timelines.',
      ],
    },
    {
      company: 'CodeInvicta',
      role: 'Software Development Engineer',
      location: 'Remote',
      start: '2022-07-01',
      end: '2024-10-01',
      current: false,
      stack: ['React.js', 'React Native', 'Next.js', 'React Query', 'Shadcn'],
      highlights: [
        'Developed and optimized responsive, scalable UIs for a large-scale e-commerce platform using React.js, reducing page load times by 15% and improving maintainability.',
        'Integrated RESTful APIs and optimized data fetching using React Query, improving application performance by 20%.',
        'Built cross-platform mobile applications using React Native, increasing mobile user engagement by 30%.',
        'Led frontend development for a major project using Next.js and Shadcn, delivering pixel-perfect UIs aligned with Adobe design specifications.',
        'Ensured application quality through unit and integration testing (85% coverage) and collaborated closely with backend teams to deliver stable, production-ready features.',
      ],
    },
    {
      company: 'UpGrad',
      role: 'Frontend Instructor',
      location: 'Punjab',
      start: '2022-08-01',
      end: '2022-12-01',
      current: false,
      stack: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3'],
      highlights: [
        'Delivered structured training on React, JavaScript (ES6+), HTML5, and CSS3 to 70+ students, focusing on component-based architecture and frontend best practices.',
        'Designed and developed industry-aligned course content in collaboration with UpGrad, strengthening students’ practical frontend development skills.',
        'Facilitated hands-on coding sessions and mentored students on JavaScript fundamentals, debugging, and problem-solving to build a strong frontend foundation.',
      ],
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
