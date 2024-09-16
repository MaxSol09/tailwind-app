
import React from 'react'
import { Nav } from './Nav'
import { COMPANY, FEATURES } from './Constants'
import { NavMenu } from './NavMenu'

export const MobileMenu = ({check = false}) => {
  return (
    <>
    <div className={`absolute right-0 left-0 top-0 bg-almost-black z-10 min-h-[150vh] opacity-50 ${check ? 'flex' : 'hidden'}`}/>
    <div className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center h-[150vh] ${check ? 'flex' : 'hidden'}`}>
        <nav className='my-20 mx-5 w-full text-lg space-y-10'>
        <Nav text='Особенности'><div className='flex flex-col space-y-5 p-2'>
            {FEATURES.map(({text, icon}) => <NavMenu key={text} icon={icon} text={text}/>)}
            </div>
        </Nav>
        <Nav text='Компания'><div className='flex flex-col space-y-5 p-2'>
            {COMPANY.map(({text, icon}) => <NavMenu key={text} icon={icon} text={text}/>)}
            </div>
        </Nav>
        <Nav text={'Карьера'}/>
        <Nav text={'О нас'}/>
        </nav>
    </div>
    </>
  )
}
