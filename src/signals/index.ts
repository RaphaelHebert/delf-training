import { signal, Signal } from '@preact/signals-react'
import { IUser } from '@/type/user'
import { Scores } from '@/type/dice'

// login modal open
export const loginOpen: Signal<boolean> = signal(false)

// profile modal open
export const profileOpen: Signal<boolean> = signal(false)

export const diceScores: Signal<Scores> = signal([])

export const authToken: Signal<string | null> = signal(null)

export const isLoggedIn: Signal<boolean> = signal(false)

export const user: Signal<IUser> = signal({ username: '', email: '', uid: '' })

export const createAppState = () => ({
  loginOpen,
  profileOpen,
  diceScores,
  authToken,
  isLoggedIn,
  user,
})
