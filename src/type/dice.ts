export type DiceRoll = number[]

export interface Score {
  score: DiceRoll
  uid: string // UID of the score, to be replaced by date
}

export type Scores = Score[]
