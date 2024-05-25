import React from 'react'
// https://www.flaticon.com/free-icons/dice
import { One, Two, Three, Four, Five, Six } from '@/assets'

import { IProps, IDiceFaces } from './types'
import './dice.css'

const diceFaces: IDiceFaces = {
  1: One,
  2: Two,
  3: Three,
  4: Four,
  5: Five,
  6: Six,
}

const Dice: React.FC<IProps> = ({ face = 1, easeIn = false }) => {
  return (
    <div className={easeIn ? 'easeIn' : 'easeOut'}>
      <img
        src={diceFaces[face]}
        className='img-fluid'
        alt={'face'}
        width={'100px'}
      />
    </div>
  )
}

export default Dice
