const Skill = require('../models/Skill');
const mongoose = require('mongoose');

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

// @desc    Get skills with optional category filter
// @route   GET /api/skills
// @access  Public
const getSkills = async (req, res, next) => {
  try {
    const { category } = req.query;
    let skills = [];

    if (mongoose.connection.readyState === 1) {
      const filter = category ? { category } : {};
      skills = await Skill.find(filter).sort({ order: 1, createdAt: 1 });
    }

    if (!skills || skills.length === 0) {
      skills = LOCAL_SKILLS;
      if (category) {
        skills = skills.filter((s) => s.category.toLowerCase() === category.toLowerCase());
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Skills retrieved successfully',
      data: skills,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSkills,
};
