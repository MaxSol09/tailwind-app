import React from 'react'

export const NavMenu = ({text, icon}) => {
  return (
    <div className='flex space-x-4 py-1'>
        <img src={icon}></img>
        <span className='text-medium-gray hover:text-almost-black cursor-pointer'>{text}</span>
    </div>
  )
}
