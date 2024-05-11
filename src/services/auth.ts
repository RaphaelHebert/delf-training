import { jwtDecode } from 'jwt-decode'

import { authToken, loginOpen, isLoggedIn } from '@/signals'

interface JwtPayload {
  exp: number
}

export const isTokenExpired = (token: string): boolean => {
  try {
    const decodedToken = jwtDecode<JwtPayload>(token)
    const currentTime = Date.now() / 1000 // Convert milliseconds to seconds
    return decodedToken.exp < currentTime
  } catch (error) {
    // If there's an error decoding the token, consider it expired
    return true
  }
}

export const handleLoginSuccess = (token: string): void => {
  authToken.value = token

  window.localStorage.setItem('token', token)
  isLoggedIn.value = true
  loginOpen.value = false
  return
}

export const isUserLoggedIn = (): void => {
  const token = window.localStorage.getItem('token')
  isLoggedIn.value = !!token && !isTokenExpired
  return
}

export const logout = (): void => {
  window.localStorage.removeItem('token')
  isLoggedIn.value = false
  authToken.value = null
}
