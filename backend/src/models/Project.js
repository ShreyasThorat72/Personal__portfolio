const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      unique: true,
      sparse: true,
    },
    slug: {
      type: String,
      unique: true,
      sparse: true,
    },
    title: {
      type: String,
      required: [true, 'Project title is required'],
      trim: true,
    },
    tagline: {
      type: String,
      trim: true,
    },
    shortDescription: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    problem: {
      type: String,
      trim: true,
    },
    solution: {
      type: String,
      trim: true,
    },
    architecture: {
      overview: { type: String },
      flow: [
        {
          name: { type: String },
          role: { type: String },
          tech: { type: String },
        },
      ],
    },
    technologies: [
      {
        type: String,
        trim: true,
      },
    ],
    features: [
      {
        type: String,
      },
    ],
    challenges: [
      {
        type: String,
      },
    ],
    outcome: {
      type: String,
    },
    githubUrl: {
      type: String,
      trim: true,
    },
    liveUrl: {
      type: String,
      trim: true,
    },
    imageUrl: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      enum: ['All', 'AI / ML', 'Full Stack', 'IoT & Embedded', 'Systems'],
      default: 'Full Stack',
    },
    featured: {
      type: Boolean,
      default: false,
    },
    accentColor: {
      type: String,
      default: '#3B82F6',
    },
    iconName: {
      type: String,
      default: 'Code',
    },
    status: {
      type: String,
      default: 'Completed',
    },
    isPlaceholder: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Project', projectSchema);
