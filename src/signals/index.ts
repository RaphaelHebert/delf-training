import { signal, Signal } from '@preact/signals-react'

interface DiceRoll {
  roll1: number
  roll2: number
  roll3: number
}

export const loginOpen: Signal<boolean> = signal(false)

export const diceScores: Signal<{ [key: number]: DiceRoll }> = signal({})
