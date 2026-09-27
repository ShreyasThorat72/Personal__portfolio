import { Project, ProjectCategory } from '../types';
import { PROJECTS_DATA } from '../data/projects';
import { fetchWithFallback, ApiResponse } from './api';

export async function getProjects(category?: ProjectCategory): Promise<ApiResponse<Project[]>> {
  const response = await fetchWithFallback<Project[]>('/projects', PROJECTS_DATA);
  if (!category || category === 'All') {
    return response;
  }
  return {
    ...response,
    data: response.data.filter((p) => p.category === category),
  };
}

export async function getFeaturedProjects(): Promise<ApiResponse<Project[]>> {
  const response = await fetchWithFallback<Project[]>('/projects/featured', PROJECTS_DATA);
  return {
    ...response,
    data: response.data.filter((p) => p.featured),
  };
}

export async function getProjectBySlug(slug: string): Promise<ApiResponse<Project | undefined>> {
  const response = await fetchWithFallback<Project[]>('/projects', PROJECTS_DATA);
  const found = response.data.find((p) => p.slug === slug || p.id === slug);
  return {
    data: found,
    status: found ? 200 : 404,
    source: response.source,
  };
}
