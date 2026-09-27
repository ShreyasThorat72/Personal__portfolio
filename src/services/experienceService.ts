import { ExperienceItem, ExperienceCategory } from '../types';
import { EXPERIENCES_DATA } from '../data/experience';
import { fetchWithFallback, ApiResponse } from './api';

export async function getExperiences(category?: ExperienceCategory): Promise<ApiResponse<ExperienceItem[]>> {
  const response = await fetchWithFallback<ExperienceItem[]>('/experience', EXPERIENCES_DATA);
  if (!category) {
    return response;
  }
  return {
    ...response,
    data: response.data.filter((e) => e.type === category),
  };
}
