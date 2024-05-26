import { signal, Signal } from '@preact/signals-react'

import { Scores } from '@/type'

export const diceScores: Signal<Scores> = signal([])

export const isScoreFetched: Signal<boolean> = signal(false)
