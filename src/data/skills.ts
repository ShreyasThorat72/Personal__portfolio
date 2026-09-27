import { Skill } from '../types';

export const SKILLS_DATA: Skill[] = [
  // Programming Languages
  {
    id: 'python',
    name: 'Python',
    category: 'Programming',
    level: 'Core Skill',
    description: 'Extensive use in AI/ML algorithms, data processing, scripting, and backend development.',
    featured: true,
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'Programming',
    level: 'Core Skill',
    description: 'Object-oriented programming, data structures, and memory-efficient algorithmic implementations.',
    featured: true,
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Programming',
    level: 'Working Knowledge',
    description: 'Object-oriented design patterns, enterprise patterns, and algorithmic problem solving.',
    featured: false,
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'Programming',
    level: 'Core Skill',
    description: 'Asynchronous event-driven programming, modern DOM manipulation, and full-stack integration.',
    featured: true,
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Programming',
    level: 'Project Experience',
    description: 'Strict type safety, modern interface design, scalable architecture in React and Node.js.',
    featured: true,
  },

  // Frontend
  {
    id: 'react',
    name: 'React.js',
    category: 'Frontend',
    level: 'Core Skill',
    description: 'Modern SPA development, custom hooks, state management, component composition, and responsive layouts.',
    featured: true,
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 'Core Skill',
    description: 'Design systems, modern utility-first CSS styling, mobile-responsive grids, and micro-interactions.',
    featured: true,
  },
  {
    id: 'html5-css3',
    name: 'HTML5 / Semantic CSS3',
    category: 'Frontend',
    level: 'Core Skill',
    description: 'Accessible semantic markup, responsive flexbox/grid architectures, and modern browser APIs.',
    featured: false,
  },
  {
    id: 'motion',
    name: 'Motion / Animations',
    category: 'Frontend',
    level: 'Working Knowledge',
    description: 'Smooth choreographies, layout transitions, exit/enter animations, and reduced-motion compliance.',
    featured: false,
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    level: 'Project Experience',
    description: 'Event-driven server runtime, RESTful API design, server-side data manipulation, and middleware pipelines.',
    featured: true,
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'Backend',
    level: 'Project Experience',
    description: 'Lightweight web routing, authentication middleware, error handling, and API abstractions.',
    featured: true,
  },
  {
    id: 'rest-apis',
    name: 'RESTful API Architecture',
    category: 'Backend',
    level: 'Project Experience',
    description: 'Clean endpoint conventions, HTTP status handling, JSON payload serialization, and contract validation.',
    featured: false,
  },

  // Databases
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'Databases',
    level: 'Project Experience',
    description: 'Document schema design, aggregation pipelines, and integration with Node.js/Express stacks.',
    featured: true,
  },
  {
    id: 'postgresql-mysql',
    name: 'SQL (PostgreSQL / MySQL)',
    category: 'Databases',
    level: 'Working Knowledge',
    description: 'Relational data modeling, ACID transactions, complex joins, and query optimization.',
    featured: true,
  },

  // AI & Machine Learning
  {
    id: 'machine-learning',
    name: 'Machine Learning Foundations',
    category: 'AI / Machine Learning',
    level: 'Core Skill',
    description: 'Supervised and unsupervised learning, regression, classification, clustering, model evaluation metrics.',
    featured: true,
  },
  {
    id: 'scikit-learn',
    name: 'Scikit-Learn',
    category: 'AI / Machine Learning',
    level: 'Project Experience',
    description: 'Preprocessing pipelines, cross-validation, feature extraction, and traditional ML algorithms.',
    featured: true,
  },
  {
    id: 'pandas-numpy',
    name: 'NumPy & Pandas',
    category: 'AI / Machine Learning',
    level: 'Core Skill',
    description: 'Vectorized mathematical operations, tabular dataset cleaning, exploratory data analysis.',
    featured: true,
  },
  {
    id: 'deep-learning-basics',
    name: 'Neural Networks & Deep Learning',
    category: 'AI / Machine Learning',
    level: 'Learning',
    description: 'Perceptrons, multi-layer networks, backpropagation, CNN architectures, and loss functions.',
    featured: false,
  },
  {
    id: 'computer-vision-basics',
    name: 'Computer Vision (OpenCV)',
    category: 'AI / Machine Learning',
    level: 'Working Knowledge',
    description: 'Image preprocessing, object detection basics, and visual classification applied in project prototypes.',
    featured: false,
  },

  // Tools
  {
    id: 'git-github',
    name: 'Git & GitHub',
    category: 'Tools',
    level: 'Core Skill',
    description: 'Branching workflows, version control, pull requests, issue tracking, and collaborative development.',
    featured: true,
  },
  {
    id: 'vscode',
    name: 'VS Code & Dev Tools',
    category: 'Tools',
    level: 'Core Skill',
    description: 'Modern development environment, extensions, debugging tools, browser devtools inspection.',
    featured: false,
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'Tools',
    level: 'Working Knowledge',
    description: 'API endpoint testing, request inspection, mock payloads, and environment management.',
    featured: false,
  },
  {
    id: 'linux-bash',
    name: 'Linux / Bash',
    category: 'Tools',
    level: 'Working Knowledge',
    description: 'Command line operations, file system navigation, shell scripting, and environment configuration.',
    featured: false,
  },

  // Deployment
  {
    id: 'vercel-render',
    name: 'Vercel / Cloud Deployment',
    category: 'Deployment',
    level: 'Project Experience',
    description: 'Continuous deployment from GitHub repositories, environment variables, SPA routing configuration.',
    featured: false,
  },

  // IoT / Hardware
  {
    id: 'esp32-arduino',
    name: 'ESP32 & Arduino Microcontrollers',
    category: 'IoT / Hardware',
    level: 'Project Experience',
    description: 'C/C++ firmware flashing, Wi-Fi telemetry integration, GPIO pin control, and embedded event loops.',
    featured: true,
  },
  {
    id: 'sensors-relays',
    name: 'Sensors & Relay Actuation',
    category: 'IoT / Hardware',
    level: 'Project Experience',
    description: 'Ultrasonic liquid sensors, solenoid actuators, relays, ADC calibration, and fail-safe automation.',
    featured: true,
  },
];
