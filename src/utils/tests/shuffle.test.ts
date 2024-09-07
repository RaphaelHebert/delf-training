import { describe, it, expect } from 'vitest'
import shuffle from '../shuffle-array' // Update with the actual path to your shuffle function

describe('shuffle', () => {
  it('should shuffle the array but keep all elements', () => {
    const originalArray = [1, 2, 3, 4, 5]
    const arrayCopy = [...originalArray]

    // Shuffle the array
    shuffle(arrayCopy)

    // Check that the shuffled array still contains the same elements as the original array
    expect(arrayCopy).toHaveLength(originalArray.length)
    expect(arrayCopy.sort()).toEqual(originalArray.sort())
  })
})
