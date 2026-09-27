import { AchievementItem, AchievementCategory } from '../types';
import { ACHIEVEMENTS_DATA } from '../data/achievements';
import { fetchWithFallback, ApiResponse } from './api';

export async function getAchievements(category?: AchievementCategory): Promise<ApiResponse<AchievementItem[]>> {
  const response = await fetchWithFallback<AchievementItem[]>('/achievements', ACHIEVEMENTS_DATA);
  if (!category) {
    return response;
  }
  return {
    ...response,
    data: response.data.filter((a) => a.category === category),
  };
}
