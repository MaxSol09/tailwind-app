import React from 'react'

export const Button = ({isBorder, txt}) => {

  const Border = 'border-2 border-black rounded'

  return (
    <button className={`py-2 px-5 ${isBorder == 'true' ? Border : ''} hover:text-sky-300`}>{txt}</button>
  )
}
