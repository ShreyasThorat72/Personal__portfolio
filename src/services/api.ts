/**
 * Base API abstraction layer.
 * Facilitates seamless transition from local centralized data to backend REST APIs
 * without modifying UI components.
 */

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
  source: 'local' | 'remote';
}

const USE_REMOTE_BACKEND = import.meta.env.VITE_USE_REMOTE_API === 'true';
const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export async function fetchWithFallback<T>(
  endpoint: string,
  localFallback: T,
  delayMs = 40
): Promise<ApiResponse<T>> {
  if (USE_REMOTE_BACKEND) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`);
      if (response.ok) {
        const json = await response.json();
        const payload = json.data !== undefined ? json.data : json;
        return {
          data: payload,
          status: response.status,
          source: 'remote',
        };
      }
    } catch {
      // Fallback seamlessly to local repository data if backend is offline
    }
  }

  // Simulate minimal asynchronous micro-task delay for realistic UI states
  if (delayMs > 0) {
    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }

  return {
    data: localFallback,
    status: 200,
    source: 'local',
  };
}
