const ADMIN_CREDENTIALS = {
  email: "davisbryan595@gmail.com",
  password: "1234566",
}

const ADMIN_SESSION_KEY = "admin_session"

export function validateAdminLogin(email: string, password: string): boolean {
  return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password
}

export function setAdminSession(): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify({ authenticated: true, timestamp: Date.now() }))
  }
}

export function getAdminSession(): boolean {
  if (typeof window === "undefined") return false
  const session = localStorage.getItem(ADMIN_SESSION_KEY)
  return session ? JSON.parse(session).authenticated : false
}

export function clearAdminSession(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem(ADMIN_SESSION_KEY)
  }
}
