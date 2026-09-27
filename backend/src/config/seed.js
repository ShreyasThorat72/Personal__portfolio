const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const Project = require('../models/Project');
const Skill = require('../models/Skill');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const LOCAL_PROJECTS = [
  {
    id: 'civicconnect',
    slug: 'civicconnect',
    title: 'CivicConnect',
    tagline: 'Empowering Citizens and Municipalities with AI-Driven Issue Triage',
    shortDescription: 'A modern civic engagement platform allowing residents to report municipal infrastructure defects with geolocation, automated classification, and transparent resolution tracking.',
    problem: 'Traditional municipal grievance mechanisms suffer from slow response cycles, lost documentation, lack of automated issue categorization, and zero transparency for citizens waiting on critical road, water, or sanitation repairs.',
    solution: 'CivicConnect bridges citizens and civic administrators through an intuitive web application where users lodge photo-backed reports with GPS metadata. The system parses tickets, categorizes severity, and routes them directly to departmental dispatchers with real-time status updates.',
    architecture: {
      overview: 'Modular full-stack architecture decoupling the responsive client-side interface from backend API endpoints and data persistence layers, with scheduled state synchronizations.',
      flow: [
        { name: 'Client Interface', role: 'Citizen & Admin Dashboard', tech: 'React, Tailwind CSS, Leaflet/Maps' },
        { name: 'API Gateway & Services', role: 'Authentication, Issue Parsing, Geo-triage', tech: 'Node.js, Express REST API' },
        { name: 'Database Engine', role: 'Persistent Grievance Storage & Audit Logs', tech: 'MongoDB / PostgreSQL' },
        { name: 'Notification Pipeline', role: 'Status Broadcast & Resolution Alerts', tech: 'Webhooks / Email Dispatch' },
      ],
    },
    technologies: ['React', 'JavaScript / TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'Leaflet Maps'],
    features: [
      'Interactive municipal issue reporting with location pinning',
      'Categorized department routing (Sanitation, Roads, Electrical, Water)',
      'Real-time resolution status tracker with audit timestamps',
      'Citizen verification and role-based administrator controls',
      'Mobile-first responsive interface optimized for field use',
    ],
    challenges: [
      'Architecting a clean, intuitive UX for non-technical citizens while providing comprehensive filters for civic administrators.',
      'Handling asynchronous geolocation queries reliably across diverse mobile device browsers.',
      'Ensuring strict data sanitization and state persistence during multi-step report submissions.',
    ],
    outcome: 'Delivered a functional civic reporting prototype demonstrating end-to-end ticket lifecycle management, reducing communication friction between residents and municipal authorities.',
    category: 'Full Stack',
    githubUrl: 'https://github.com/ShreyasThorat72',
    liveUrl: 'https://github.com/ShreyasThorat72',
    featured: true,
    accentColor: '#3B82F6',
    iconName: 'Building2',
    status: 'In Active Development',
  },
  {
    id: 'smart-water-tank',
    slug: 'smart-water-tank',
    title: 'Smart Water Tank Automation',
    tagline: 'IoT-Powered Reservoir Monitoring & Closed-Loop Pump Actuation',
    shortDescription: 'An intelligent hardware and software automation system that continuously tracks water levels using ultrasonic sensors and automates pump relay activation to prevent dry runs and water overflow.',
    problem: 'Urban and campus water reservoirs routinely suffer from human error resulting in severe water wastage due to overflow, motor burnouts caused by unattended dry-running, and inaccurate manual inspections.',
    solution: 'Designed an automated telemetry and actuation system using microcontroller hardware interfaced with ultrasonic depth sensors. The firmware calculates reservoir volume percentage, triggers relay switches under strict safety thresholds, and broadcasts telemetry to a monitoring dashboard.',
    architecture: {
      overview: 'Hybrid embedded-to-cloud telemetry flow: microcontroller firmware reads sensor ADC signals, executes local safety logic, and relays telemetry to a web dashboard interface.',
      flow: [
        { name: 'Sensor Array', role: 'Ultrasonic Distance & Fluid Level Detection', tech: 'HC-SR04 / JSN-SR04T Sensor' },
        { name: 'Embedded Controller', role: 'Firmware Logic & Relay Switching', tech: 'ESP32 / Arduino C++' },
        { name: 'Actuator Unit', role: 'High-Voltage Pump Motor Isolation', tech: 'Optocoupler Relay Module' },
        { name: 'Telemetry Dashboard', role: 'Live Level Visualization & Manual Override', tech: 'Web UI / WebSocket Telemetry' },
      ],
    },
    technologies: ['C / C++', 'ESP32 / Arduino', 'IoT Telemetry', 'Ultrasonic Sensors', 'Relay Modules', 'React UI', 'REST APIs'],
    features: [
      'Automated high/low threshold pump triggering with safety deadbands',
      'Dry-run protection algorithm to prevent motor damage',
      'Real-time liquid level percentage calculation and volume estimation',
      'Manual software override controls for maintenance operators',
      'Fail-safe hardware state fallback during power or network disruptions',
    ],
    challenges: [
      'Eliminating false positive distance readings caused by acoustic reflections and water surface ripple oscillations.',
      'Safely isolating high-current AC motor transients from sensitive low-voltage microcontroller logic lines.',
      'Implementing debounce timers and hysteresis thresholds to prevent rapid on/off relay cycling.',
    ],
    outcome: 'Successfully automated water management cycles with zero manual intervention required, eliminating overflow wastage and preventing motor dry-run hazards.',
    category: 'IoT & Embedded',
    githubUrl: 'https://github.com/ShreyasThorat72',
    liveUrl: 'https://github.com/ShreyasThorat72',
    featured: true,
    accentColor: '#06B6D4',
    iconName: 'Droplets',
    status: 'Completed',
  },
  {
    id: 'bottlepoints',
    slug: 'bottlepoints',
    title: 'BottlePoints / Smart Bottle Recycler',
    tagline: 'Incentivizing Circular Economy with Computer Vision & Reverse Vending',
    shortDescription: 'A smart reverse vending concept that automates plastic bottle identification, calculates recyclability material metrics, and allocates digital reward credits to encourage community recycling habits.',
    problem: 'Single-use plastic bottles contribute massively to urban waste streams because conventional recycling bins offer zero immediate incentive, resulting in high contamination rates and low consumer participation.',
    solution: 'Engineered an intelligent recycling concept combining optical/sensor verification with a digital rewards ledger. Users insert recyclable bottles, the system validates the object, and credits reward points to their account redeemable for campus or community perks.',
    architecture: {
      overview: 'Edge object verification pipeline coupled with an authenticated user ledger and analytics service tracking environmental impact statistics.',
      flow: [
        { name: 'Intake Chamber', role: 'Item Acceptance & Optical Verification', tech: 'Camera / Optical Proximity Sensors' },
        { name: 'Classification Engine', role: 'Material & Object Validation', tech: 'Python / OpenCV / ML Classifier' },
        { name: 'Transaction Ledger', role: 'User Balance & Eco Points Allocation', tech: 'Node.js Backend & Database' },
        { name: 'Client Touchscreen UI', role: 'User Authentication & Redemption Portal', tech: 'React & Tailwind CSS' },
      ],
    },
    technologies: ['Python', 'OpenCV / AI', 'React', 'TypeScript', 'Node.js', 'Hardware Sensors', 'Tailwind CSS'],
    features: [
      'Automated recyclable bottle detection and rejection of non-conforming items',
      'Instant points ledger updates upon verified bottle deposit',
      'Environmental footprint calculation (estimated carbon & plastic offset)',
      'Digital voucher redemption interface for rewards',
      'Administrative statistics dashboard for waste management insights',
    ],
    challenges: [
      'Accurately identifying crushed, deformed, or label-stripped plastic bottles from common trash.',
      'Designing a frictionless user flow from physical deposit to immediate point credit confirmation.',
      'Balancing embedded processing latency with instant visual feedback on the user display.',
    ],
    outcome: 'Created a prototype that demonstrates measurable recycling incentives, bridging hardware automation with engaging full-stack software and sustainability metrics.',
    category: 'AI / ML',
    githubUrl: 'https://github.com/ShreyasThorat72',
    liveUrl: 'https://github.com/ShreyasThorat72',
    featured: true,
    accentColor: '#10B981',
    iconName: 'Recycle',
    status: 'Completed',
  },
];

const LOCAL_SKILLS = [
  { id: 'python', name: 'Python', category: 'Programming', level: 'Core Skill', description: 'Extensive use in AI/ML algorithms, data processing, scripting, and backend development.', featured: true, order: 1 },
  { id: 'cpp', name: 'C++', category: 'Programming', level: 'Core Skill', description: 'Object-oriented programming, data structures, and memory-efficient algorithmic implementations.', featured: true, order: 2 },
  { id: 'java', name: 'Java', category: 'Programming', level: 'Working Knowledge', description: 'Object-oriented design patterns, enterprise patterns, and algorithmic problem solving.', featured: false, order: 3 },
  { id: 'javascript', name: 'JavaScript (ES6+)', category: 'Programming', level: 'Core Skill', description: 'Asynchronous event-driven programming, modern DOM manipulation, and full-stack integration.', featured: true, order: 4 },
  { id: 'typescript', name: 'TypeScript', category: 'Programming', level: 'Project Experience', description: 'Strict type safety, modern interface design, scalable architecture in React and Node.js.', featured: true, order: 5 },
  { id: 'react', name: 'React.js', category: 'Frontend', level: 'Core Skill', description: 'Modern SPA development, custom hooks, state management, component composition, and responsive layouts.', featured: true, order: 6 },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'Frontend', level: 'Core Skill', description: 'Design systems, modern utility-first CSS styling, mobile-responsive grids, and micro-interactions.', featured: true, order: 7 },
  { id: 'nodejs', name: 'Node.js', category: 'Backend', level: 'Project Experience', description: 'Event-driven server runtime, RESTful API design, server-side data manipulation, and middleware pipelines.', featured: true, order: 8 },
  { id: 'express', name: 'Express.js', category: 'Backend', level: 'Project Experience', description: 'Lightweight web routing, authentication middleware, error handling, and API abstractions.', featured: true, order: 9 },
  { id: 'mongodb', name: 'MongoDB', category: 'Databases', level: 'Project Experience', description: 'Document schema design, aggregation pipelines, and integration with Node.js/Express stacks.', featured: true, order: 10 },
  { id: 'postgresql-mysql', name: 'SQL (PostgreSQL / MySQL)', category: 'Databases', level: 'Working Knowledge', description: 'Relational data modeling, ACID transactions, complex joins, and query optimization.', featured: true, order: 11 },
  { id: 'machine-learning', name: 'Machine Learning Foundations', category: 'AI / Machine Learning', level: 'Core Skill', description: 'Supervised and unsupervised learning, regression, classification, clustering, model evaluation metrics.', featured: true, order: 12 },
  { id: 'git-github', name: 'Git & GitHub', category: 'Tools', level: 'Core Skill', description: 'Branching workflows, version control, pull requests, issue tracking, and collaborative development.', featured: true, order: 13 },
  { id: 'esp32-arduino', name: 'ESP32 & Arduino Microcontrollers', category: 'IoT / Hardware', level: 'Project Experience', description: 'C/C++ firmware flashing, Wi-Fi telemetry integration, GPIO pin control, and embedded event loops.', featured: true, order: 14 },
];

const seedDatabase = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      console.error('❌ MONGODB_URI missing in .env file. Unable to seed database.');
      process.exit(1);
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB Atlas for Seeding...');

    await Project.deleteMany({});
    await Skill.deleteMany({});

    await Project.insertMany(LOCAL_PROJECTS);
    console.log(`✨ Seeded ${LOCAL_PROJECTS.length} Projects into MongoDB`);

    await Skill.insertMany(LOCAL_SKILLS);
    console.log(`✨ Seeded ${LOCAL_SKILLS.length} Skills into MongoDB`);

    console.log('🚀 Database Seeding Completed Successfully!');
    process.exit(0);
  } catch (error) {
    console.error(`❌ Seeding Failed: ${error.message}`);
    process.exit(1);
  }
};

seedDatabase();
