import store from 'store2'

export default store

export function clearAuth(): void {
  store.remove('access_token')
}

export function getAuth(): string | null {
  const access = store.get('access_token')

  return access
}

export function isAuthenticated(): boolean {
  const access = getAuth()

  if (typeof access == 'string') {
    return true
  }

  return false
}

export function setAuth(access: string, refresh: string): void {
  store.set('access_token', access)
}
