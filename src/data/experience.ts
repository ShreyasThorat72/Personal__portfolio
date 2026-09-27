import { ExperienceItem } from '../types';

export const EXPERIENCES_DATA: ExperienceItem[] = [
  // Technical Activities & Campus Engineering
  {
    id: 'rit-student-developer',
    role: 'Student Developer & AI/ML Project Lead',
    organization: 'Rajarambapu Institute of Technology (RIT)',
    location: 'Maharashtra, India',
    type: 'Technical Activities',
    period: '2023 - Present',
    responsibilities: [
      'Architecting and developing full-stack web and embedded IoT projects as part of departmental academic coursework and innovation initiatives.',
      'Designed and engineered CivicConnect, a citizen municipal issue reporting platform using modern React and Node.js frameworks.',
      'Developed Smart Water Tank Automation and BottlePoints smart reverse vending prototypes integrating sensors and microcontrollers with cloud UI.',
      'Participated in coding sprints, technical symposiums, and peer knowledge-sharing sessions on machine learning and web development.'
    ],
    technologies: ['React', 'JavaScript', 'TypeScript', 'Python', 'Node.js', 'C++', 'ESP32', 'Git'],
    achievements: [
      'Successfully deployed functional prototypes demonstrated in college engineering reviews',
      'Authored clean project architecture and documentation across multiple repositories'
    ]
  },
  {
    id: 'rit-tech-club-lead',
    role: 'Technical Team Member / Student Coordinator',
    organization: 'Departmental Student Association / Tech Committee (RIT)',
    location: 'Maharashtra, India',
    type: 'Leadership',
    period: '2024 - Present',
    responsibilities: [
      'Assisting in coordinating departmental coding workshops, technical competitions, and student developer meetups.',
      'Mentoring junior peers on version control workflows with Git & GitHub and introductory programming paradigms.',
      'Collaborating with faculty advisors to organize technical project exhibitions and demonstrations.'
    ],
    technologies: ['Git', 'GitHub', 'Python', 'Public Speaking', 'Team Coordination'],
    achievements: [
      'Coordinated technical events engaging students across engineering semesters'
    ]
  },

  // Realistic, clearly marked placeholders for user to fill their actual internships/simulations:
  {
    id: 'internship-placeholder',
    role: '[ADD YOUR DATA: Software Engineering / AI-ML Intern]',
    organization: '[ADD YOUR DATA: Company Name / Organization]',
    location: '[ADD YOUR DATA: City / Remote]',
    type: 'Internships',
    period: '[ADD YOUR DATA: e.g. June 2025 - August 2025]',
    responsibilities: [
      '[ADD YOUR DATA: Describe your primary responsibilities, e.g. Built frontend components using React and TypeScript]',
      '[ADD YOUR DATA: Implemented RESTful APIs and connected relational/NoSQL databases]',
      '[ADD YOUR DATA: Participated in agile standups, code reviews, and testing]'
    ],
    technologies: ['[ADD YOUR TECH 1]', '[ADD YOUR TECH 2]', '[ADD YOUR TECH 3]'],
    achievements: [
      '[ADD YOUR DATA: Mention key achievements, metrics or certificates earned]'
    ],
    isPlaceholder: true,
  },
  {
    id: 'job-simulation-placeholder',
    role: '[ADD YOUR DATA: Software Engineering Virtual Experience / Simulation]',
    organization: '[ADD YOUR DATA: e.g. Forage Virtual Experience Program]',
    location: 'Virtual / Online',
    type: 'Job Simulations',
    period: '[ADD YOUR DATA: e.g. Month Year]',
    responsibilities: [
      '[ADD YOUR DATA: Completed simulated tasks such as debugging backend architecture and refactoring services]',
      '[ADD YOUR DATA: Designed interface mockups and validated client requirements]',
      '[ADD YOUR DATA: Analyzed system performance and drafted technical recommendations]'
    ],
    technologies: ['[ADD YOUR TECH 1]', '[ADD YOUR TECH 2]'],
    achievements: [
      '[ADD YOUR DATA: Completed all simulation modules and received certificate of completion]'
    ],
    isPlaceholder: true,
  }
];
