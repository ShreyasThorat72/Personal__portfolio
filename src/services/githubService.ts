import { GitHubRepo, GitHubStats } from '../types';

export const LOCAL_GITHUB_REPOS: GitHubRepo[] = [
  {
    id: 1,
    name: 'CivicConnect',
    description: 'Civic engagement and municipal grievance reporting platform with AI issue triage, geolocation mapping, and resolution tracking.',
    language: 'TypeScript',
    stars: 8,
    forks: 2,
    url: 'https://github.com/ShreyasThorat72',
    isPinned: true,
    updatedAt: '2025-02-15T10:00:00Z',
    topics: ['react', 'typescript', 'mongodb', 'civic-tech', 'nodejs'],
  },
  {
    id: 2,
    name: 'smart-water-tank-automation',
    description: 'IoT telemetry system monitoring water reservoir volumes with ultrasonic depth sensors and automated relay pump shutoff.',
    language: 'C++',
    stars: 5,
    forks: 1,
    url: 'https://github.com/ShreyasThorat72',
    isPinned: true,
    updatedAt: '2025-01-20T14:30:00Z',
    topics: ['iot', 'esp32', 'arduino', 'automation', 'cpp', 'sensors'],
  },
  {
    id: 3,
    name: 'bottlepoints-recycler',
    description: 'Smart reverse vending and bottle recycling application rewarding users with eco-points verified via vision/sensors.',
    language: 'Python',
    stars: 6,
    forks: 2,
    url: 'https://github.com/ShreyasThorat72',
    isPinned: true,
    updatedAt: '2024-12-10T09:15:00Z',
    topics: ['python', 'opencv', 'sustainability', 'react', 'machine-learning'],
  },
  {
    id: 4,
    name: 'dsa-cpp-solutions',
    description: 'Curated implementations of core data structures, algorithms, graph traversals, and dynamic programming challenges.',
    language: 'C++',
    stars: 3,
    forks: 0,
    url: 'https://github.com/ShreyasThorat72',
    isPinned: false,
    updatedAt: '2025-02-01T18:00:00Z',
    topics: ['algorithms', 'data-structures', 'cpp', 'problem-solving'],
  },
  {
    id: 5,
    name: 'machine-learning-explorations',
    description: 'Notebooks and pipelines exploring supervised algorithms, regression models, feature selection, and classification metrics.',
    language: 'Jupyter Notebook',
    stars: 4,
    forks: 1,
    url: 'https://github.com/ShreyasThorat72',
    isPinned: false,
    updatedAt: '2025-01-05T12:00:00Z',
    topics: ['scikit-learn', 'pandas', 'numpy', 'machine-learning'],
  },
  {
    id: 6,
    name: 'portfolio-website',
    description: 'Advanced personal developer portfolio built with React, Vite, TypeScript, Motion, and Tailwind CSS.',
    language: 'TypeScript',
    stars: 12,
    forks: 3,
    url: 'https://github.com/ShreyasThorat72',
    isPinned: true,
    updatedAt: '2025-03-01T08:00:00Z',
    topics: ['portfolio', 'react', 'typescript', 'tailwind-css', 'motion'],
  },
];

export const LOCAL_GITHUB_STATS: GitHubStats = {
  publicRepos: 14,
  followers: 24,
  following: 38,
  totalContributions: 380,
  languages: [
    { name: 'TypeScript', percentage: 38, color: '#3178C6' },
    { name: 'Python', percentage: 28, color: '#3572A5' },
    { name: 'C++', percentage: 18, color: '#F34B7D' },
    { name: 'JavaScript', percentage: 11, color: '#F7DF1E' },
    { name: 'Other', percentage: 5, color: '#8B5CF6' },
  ],
};

export async function fetchGitHubProfile(): Promise<GitHubStats> {
  const GITHUB_USERNAME = 'ShreyasThorat72';
  const USE_LIVE_GITHUB = import.meta.env.VITE_USE_LIVE_GITHUB === 'true';

  if (USE_LIVE_GITHUB) {
    try {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
      if (res.ok) {
        const user = await res.json();
        return {
          ...LOCAL_GITHUB_STATS,
          publicRepos: user.public_repos || LOCAL_GITHUB_STATS.publicRepos,
          followers: user.followers || LOCAL_GITHUB_STATS.followers,
          following: user.following || LOCAL_GITHUB_STATS.following,
        };
      }
    } catch {
      // Fallback silently
    }
  }

  return LOCAL_GITHUB_STATS;
}

export async function fetchGitHubRepositories(): Promise<GitHubRepo[]> {
  const GITHUB_USERNAME = 'ShreyasThorat72';
  const USE_LIVE_GITHUB = import.meta.env.VITE_USE_LIVE_GITHUB === 'true';

  if (USE_LIVE_GITHUB) {
    try {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);
      if (res.ok) {
        const repos = await res.json();
        if (Array.isArray(repos) && repos.length > 0) {
          return repos.map((r: any) => ({
            id: r.id,
            name: r.name,
            description: r.description || 'Public repository by Shreyas Thorat.',
            language: r.language || 'Code',
            stars: r.stargazers_count,
            forks: r.forks_count,
            url: r.html_url,
            isPinned: r.stargazers_count > 2,
            updatedAt: r.updated_at,
            topics: r.topics || [],
          }));
        }
      }
    } catch {
      // Fallback silently
    }
  }

  return LOCAL_GITHUB_REPOS;
}
