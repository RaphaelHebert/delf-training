import { signal, Signal } from '@preact/signals-react'

export type DiceRoll = number[]

export const loginOpen: Signal<boolean> = signal(false)

export const diceScores: Signal<{ [key: number]: DiceRoll }> = signal({})

export const authToken: Signal<string | null> = signal(null)

export const isLoggedIn: Signal<boolean> = signal(false)
