import React from 'react'
import Arrow from './images/icon-arrow-down.svg'
import ArrowUp from './images/icon-arrow-up.svg'
import { useState } from 'react'

export const Nav = ({text, children}) => {

const [selected, setSelected] = useState('')


  return (
    <div className='relative'>
        <div className='flex space-x-2 cursor-pointer items-center'>
            <span className='text-medium-gray hover:text-almost-black'
            onClick={() => children && setSelected(text !== selected ? text : '')}
            >
                {text}
            </span>
            <div>
                <img src={children && selected !== text && Arrow}></img>
                <img src={children && selected === text && ArrowUp}></img>
            </div>
        </div>
        {selected && children}
    </div>
  )
}
