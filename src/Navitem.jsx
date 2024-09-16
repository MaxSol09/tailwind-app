import React from 'react'
import { NavMenu } from './NavMenu'

export const Navitem = ({items = []}) => {
  return (
    <div className='flex flex-col px-4 py-4 bg-almost-white drop-shadow rounded-lg absolute top-10 right-0 w-36 space-y-2 x-30'>{items.map(({text, icon}) => <NavMenu key={text} text={text} icon={icon}/>)}</div>
  )
}
