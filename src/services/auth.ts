import { jwtDecode } from 'jwt-decode'

import { IUser } from '@/type/user'
import { authToken, loginOpen, isLoggedIn, user } from '@/signals'

interface JwtPayload {
  exp: number
  email: string
  username: string
  uid: string
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

  window.localStorage.removeItem('token')
  window.localStorage.setItem('token', token)

  const userData = jwtDecode<IUser>(token)

  user.value = userData
  isLoggedIn.value = true
  loginOpen.value = false

  return
}

export const isUserLoggedIn = (): void => {
  const token = window.localStorage.getItem('token')
  if (token) {
    const decoded = jwtDecode<JwtPayload>(token)
    if (!!token && !isTokenExpired(token)) {
      isLoggedIn.value = true
      user.value.username = decoded.username
      user.value.email = decoded.email
      user.value.uid = decoded.uid
    }
  }
  return
}

export const logout = (): void => {
  window.localStorage.removeItem('token')
  isLoggedIn.value = false
  authToken.value = null
}
