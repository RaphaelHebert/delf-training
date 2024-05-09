import { signal, Signal } from '@preact/signals-react'

type DiceRoll = number[]

export const loginOpen: Signal<boolean> = signal(false)

export const diceScores: Signal<{ [key: number]: DiceRoll }> = signal({})
