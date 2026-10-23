// Single source of truth for portfolio content.
// Update this file to change resume/skills/experience data — no component edits needed.

export interface Metric {
  value: string;
  label: string;
}

export interface ExperienceEntry {
  company: string;
  url?: string;
  role: string;
  location?: string;
  sector?: string;
  start: string; // ISO date, e.g. "2025-03-03"
  end: string | "present";
  current: boolean;
  stack: string[];
  highlights: string[];
  metrics?: Metric[];
  newSkillsLearned?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationEntry {
  institution: string;
  location?: string;
  credential: string;
  field: string;
  cgpa?: string;
  start: string;
  end: string;
}

export interface ProfileLinks {
  github: string;
  linkedin: string;
  resume: string;
  email: string;
}

export interface Profile {
  name: string;
  role: string;
  summary: string;
  stats: Metric[];
  domains: string[];
  experience: ExperienceEntry[];
  skillGroups: SkillGroup[];
  education: EducationEntry[];
  internships: ExperienceEntry[];
  links: ProfileLinks;
}

export const profile: Profile = {
  name: "Prachi Vats",
  role: "Software Development Engineer",
  summary:
    "I enjoy turning ideas into meaningful digital experiences and solving problems through thoughtful, practical solutions. Over the past 4+ years, I've worked on building products that balance functionality, performance, and user experience. I'm naturally curious, love exploring new technologies, and enjoy figuring out better ways to bring ideas to life. For me, development is more than just writing code; it's about creating things that people genuinely find useful.",
  stats: [
    { value: "4+", label: "Years of experience" },
    { value: "4", label: "Industries worked across" },
    { value: "85%", label: "Test coverage delivered" },
    { value: "70+", label: "Developers & students trained" },
  ],

  domains: ["Legal & Tax Tech", "Banking & Fintech", "E-commerce", "EdTech"],

  experience: [
    {
      company: "Taxmann Technologies",
      url: "https://www.taxmanntechnologies.com/",
      role: "Software Engineer",
      location: "Delhi",
      sector: "Legal & Tax Tech",
      start: "2025-03-03",
      end: "present",
      current: true,
      stack: ["React", "React Native", "TypeScript", "JavaScript", "Tauri"],
      highlights: [
        "Contributing to Taxmann's core products using React and React Native, implementing Tantivy-based content indexing to improve search performance and taking ownership of technical decisions and feature delivery",
        "Developing an offline case-law research application for GST, Excise, and other legal domains, revamping the existing platform using Tauri, Rust, React, and Node.js for a seamless cross-platform experience",
        "Built a secure desktop reading platform using Tauri, React, and Rust, implementing encrypted book decryption, screenshot and screen-recording restrictions, and SSO with Taxmann's main platform using OS-level secure credential storage",
        "Strengthened application security with access controls and successful penetration testing, while building Windows and macOS release pipelines and developing responsive, reusable UI components using React and TypeScript",
      ],
    },
    {
      company: "Newgen Software",
      url: "https://newgensoft.com/",
      role: "Software Engineer",
      location: "Noida",
      sector: "Banking & Fintech",
      start: "2025-01-01",
      end: "2025-02-27",
      current: false,
      stack: ["React", "React Native", "Redux Thunk", "Axios"],
      highlights: [
        " Built a digital banking platform for a leading Saudi Arabian bank, delivering Cash Finance and Auto Finance solutions across Android, iOS, and Web.",
        "Developed responsive, cross-platform applications using React, React Native, Redux Thunk, and Axios implementing advanced search, filtering, dynamic theming, and multilingual support.",
        "Led Android application development managing build pipelines, integrating security checks, and improving performance through React Hooks, memoization, debouncing, and lazy loading.",
        "Collaborated with product managers and cross-functional teams to deliver features, resolve technical challenges, and mentor new engineers streamlining onboarding and development workflows.",
      ],
    },
    {
      company: "CodeInvicta",
      url: "https://www.codeinvicta.com/",
      role: "Software Development Engineer",
      location: "Remote",
      sector: "E-commerce",
      start: "2022-07-01",
      end: "2024-10-01",
      current: false,
      stack: ["React.js", "React Native", "Next.js", "React Query", "Shadcn"],
      highlights: [
        "Rebuilt core UI flows for a large-scale e-commerce platform, cutting page load times and improving maintainability.",
        "Led a pixel-perfect Next.js + Shadcn rebuild matched to Adobe design specs.",
        "Shipped React Native features that measurably grew mobile engagement, backed by solid test coverage.",
      ],
      metrics: [
        // { value: "15%", label: "faster page loads" },
        // { value: "20%", label: "better data-fetch perf" },
        // { value: "30%", label: "more mobile engagement" },
        // { value: "85%", label: "test coverage" },
      ],
    },
    {
      company: "UpGrad",
      url: "https://www.upgrad.com/",
      role: "Frontend Instructor",
      location: "Punjab",
      sector: "EdTech",
      start: "2022-08-01",
      end: "2022-12-01",
      current: false,
      stack: ["React", "JavaScript (ES6+)", "HTML5", "CSS3"],
      highlights: [
        "Trained 70+ students in React and modern JavaScript through hands-on, project-based sessions.",
        "Built industry-aligned curriculum with UpGrad around component-based architecture and frontend best practices.",
      ],
      metrics: [{ value: "70+", label: "students trained" }],
    },
  ],

  skillGroups: [
    {
      category: "Frontend",
      items: [
        "React",
        "React Native",
        "React Hook Form",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Next.js",
        "Tailwind",
        "Material",
        "ARIA roles",
        "Semantic HTML",
      ],
    },
    {
      category: "State Management",
      items: ["Redux", "Redux-Thunk", "Context API"],
    },
    {
      category: "Testing",
      items: ["Axios", "Unit Testing", "Integration Testing", "Jest"],
    },
    {
      category: "Tools & Practices",
      items: [
        "GitHub",
        "Jira",
        "Trello",
        "Agile/Scrum",
        "Code Reviews",
        "Client & Stakeholder Management",
      ],
    },
    {
      category: "AI & Automation",
      items: [
        "Claude Code",
        "AI-assisted development",
        "Prompt engineering",
        "AI-native SDLC",
      ],
    },
  ],

  education: [
    {
      institution: "Dr Akhilesh Das Gupta Institute of Technology & Management",
      location: "Delhi",
      credential: "Bachelor of Technology (BTech)",
      field: "Electrical, Electronics and Communications Engineering",
      cgpa: "9.5",
      start: "2019",
      end: "2022",
    },
    {
      institution: "Kasturba Institute of Technology",
      location: "Delhi",
      credential: "Diploma",
      field: "Electronics and Communication",
      cgpa: "8.4",
      start: "2015",
      end: "2018",
    },
  ],

  internships: [
    {
      company: "GirlScript Foundation (Tech In Slum Program)",
      role: "Lead Mentor – Frontend",
      location: "Delhi, India",
      start: "2021-10-01",
      end: "2022-03-01",
      current: false,
      stack: ["JavaScript", "React"],
      highlights: [
        "Reviewed student code and provided structured feedback on JavaScript logic, React component structure, and state management, improving code quality and best-practice adoption.",
        "Assisted in setting up development workflows, including Git basics and debugging processes.",
      ],
    },
    {
      company: "Bashank Infotech Pvt. Ltd.",
      role: "Frontend Developer Intern",
      location: "Delhi, India",
      start: "2021-05-01",
      end: "2021-10-01",
      current: false,
      stack: ["React.js", "JavaScript"],
      highlights: [
        "Developed and enhanced UI components using React.js and JavaScript, improving usability and responsiveness.",
        "Fixed frontend bugs and collaborated with senior developers to implement features following clean coding practices.",
      ],
    },
  ],

  links: {
    github: "https://github.com/prachi0513",
    linkedin: "https://www.linkedin.com/in/prachi-vats-08981a194",
    resume: "/resume.pdf",
    email: "vatsprachi10@gmail.com",
  },
};
