import { CertificationItem, CertificationCategory } from '../types';
import { CERTIFICATIONS_DATA } from '../data/certifications';
import { fetchWithFallback, ApiResponse } from './api';

export async function getCertifications(category?: CertificationCategory): Promise<ApiResponse<CertificationItem[]>> {
  const response = await fetchWithFallback<CertificationItem[]>('/certifications', CERTIFICATIONS_DATA);
  if (!category) {
    return response;
  }
  return {
    ...response,
    data: response.data.filter((c) => c.category === category),
  };
}
