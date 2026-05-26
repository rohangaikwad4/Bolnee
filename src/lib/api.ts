const API_BASE = '/api'

async function request<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const token = localStorage.getItem('bolnee_token')
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options?.headers as Record<string, string>),
  }
  if (token) headers['Authorization'] = `Bearer ${token}`

  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers })

  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: 'Request failed' }))
    throw new Error(body.error || `HTTP ${res.status}`)
  }

  return res.json()
}

export function setToken(token: string) {
  localStorage.setItem('bolnee_token', token)
}

export function getToken(): string | null {
  return localStorage.getItem('bolnee_token')
}

export function clearToken() {
  localStorage.removeItem('bolnee_token')
}

export function isAuthenticated(): boolean {
  return !!getToken()
}

export const api = {
  auth: {
    register: (data: { name: string; email: string; password: string }) =>
      request<{ token: string; user: { id: string; name: string; email: string; plan: string } }>('/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    login: (data: { email: string; password: string }) =>
      request<{ token: string; user: { id: string; name: string; email: string; plan: string } }>('/auth/login', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    me: () => request<{ user: { id: string; name: string; email: string; plan: string } }>('/auth/me'),
  },
}
