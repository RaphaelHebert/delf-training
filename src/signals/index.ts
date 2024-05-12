import { signal, Signal } from '@preact/signals-react'
import { IUser } from '@/type/user'

export type DiceRoll = number[]

// login modal open
export const loginOpen: Signal<boolean> = signal(false)

// profile modal open
export const profileOpen: Signal<boolean> = signal(false)

export const diceScores: Signal<{ [key: number]: DiceRoll }> = signal({})

export const authToken: Signal<string | null> = signal(null)

export const isLoggedIn: Signal<boolean> = signal(false)

export const user: Signal<IUser | null> = signal(null)
