import { ProfileData } from '../types';
import { SOCIAL_LINKS } from './socials';

export const PROFILE_DATA: ProfileData = {
  name: 'Shreyas Thorat',
  title: 'Computer Science & AI/ML Engineer',
  status: '5th Semester Student',
  institute: 'Rajarambapu Institute of Technology (RIT), Maharashtra',
  specialization: 'Artificial Intelligence and Machine Learning',
  currentSemester: '5th Semester',
  bio: 'Computer Science and AI/ML undergraduate passionate about engineering real-world software solutions. From architecting civic engagement platforms to building IoT automated hardware controllers and smart recycling systems, I love transforming complex ideas into clean, functional, and performant code.',
  roles: [
    'Software Developer',
    'Full Stack Developer',
    'AI/ML Developer',
    'Problem Solver',
  ],
  careerGoal: 'Software Developer / Full Stack Developer / AI-ML Developer',
  targetRole: 'Entry-level Software Engineering Opportunities',
  socials: SOCIAL_LINKS,
  metrics: [
    {
      label: 'Academic Standing',
      value: '5th Sem',
      sublabel: 'B.Tech CSE (AI & ML) at RIT',
    },
    {
      label: 'Featured Projects',
      value: '03+',
      sublabel: 'Full-stack & IoT platforms',
    },
    {
      label: 'Core Focus',
      value: 'AI & Web',
      sublabel: 'Applied intelligence & scalable UI',
    },
    {
      label: 'Availability',
      value: 'Open',
      sublabel: 'Software engineering roles',
    },
  ],
};
