import React from 'react'

const Wraper = ({children}) => {
  return (
    <div className='container mx-auto py-4 px-2 min-h-screen'>{children}</div>
  )
}


export default Wraper