import React from 'react'
import './dice.css'
import One from '../../assets/svg/dices/one.png'
import Two from '../../assets/svg/dices/two.png'
import Three from '../../assets/svg/dices/three.png'
import Four from '../../assets/svg/dices/four.png'
import Five from '../../assets/svg/dices/five.png'
import Six from '../../assets/svg/dices/six.png'

interface IProps {
  face: number
  easeIn: boolean
}
interface DiceFaces {
  [key: number]: string
}

const diceFaces: DiceFaces = {
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
