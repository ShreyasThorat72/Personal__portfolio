import { Skill, SkillCategory } from '../types';
import { SKILLS_DATA } from '../data/skills';
import { fetchWithFallback, ApiResponse } from './api';

export async function getSkills(category?: SkillCategory): Promise<ApiResponse<Skill[]>> {
  const response = await fetchWithFallback<Skill[]>('/skills', SKILLS_DATA);
  if (!category) {
    return response;
  }
  return {
    ...response,
    data: response.data.filter((s) => s.category === category),
  };
}

export async function getFeaturedSkills(): Promise<ApiResponse<Skill[]>> {
  const response = await fetchWithFallback<Skill[]>('/skills/featured', SKILLS_DATA);
  return {
    ...response,
    data: response.data.filter((s) => s.featured),
  };
}
