import { ContactFormData, ContactResponse } from '../types';

export async function submitContactForm(data: ContactFormData): Promise<ContactResponse> {
  const USE_REMOTE_BACKEND = import.meta.env.VITE_USE_REMOTE_API === 'true';
  const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

  // Basic validation check
  if (!data.name || !data.email || !data.message) {
    throw new Error('Please fill in all required fields.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    throw new Error('Please provide a valid email address.');
  }

  if (USE_REMOTE_BACKEND) {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.message || 'Failed to transmit message.');
      }

      const resData = await response.json();
      return {
        success: true,
        message: resData.message || 'Thank you! Your message has been received.',
        timestamp: new Date().toISOString(),
        id: resData.id || `msg_${Date.now()}`,
      };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Connection failed';
      throw new Error(`Remote API Error: ${message}. (Ensure backend endpoint is running).`);
    }
  }

  // Simulated professional mock latency & response for preview
  await new Promise((resolve) => setTimeout(resolve, 900));

  return {
    success: true,
    message: `Thank you, ${data.name}! Your message was successfully queued. I will review it and reply to ${data.email} promptly.`,
    timestamp: new Date().toISOString(),
    id: `msg_local_${Date.now()}`,
  };
}
