import React, { useState } from 'react'
import LogoIcon from './images/logo.svg'
import { Nav } from './Nav'
import { Navitem } from './Navitem'
import { COMPANY, FEATURES } from './Constants'
import { Button } from './Button'
import Menu from './images/icon-menu.svg'
import Close from './images/close.svg'
import { MobileMenu } from './MobileMenu'

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className='flex items-center'>
      <img className='g' src={LogoIcon}></img>
      <nav className='hidden xl:flex space-x-6 ml-8 '>
        <Nav text={'Особенности'}>
          <Navitem items={FEATURES}/>
        </Nav>
        <Nav text={'Компания'}>
          <Navitem items={COMPANY}/>
        </Nav>
        <Nav text={'Карьера'}/>
        <Nav text={'О нас'}/>
      </nav>
      <div className='hidden ml-auto xl:flex space-x-5'>
        <Button isBorder='false' txt='Вход'/>
        <Button isBorder='true' txt='Регистрация'/>
      </div>
      <div className='flex xl:hidden ml-auto z-30'>
        <img onClick={() => openMenu == false ? setOpenMenu(true) : setOpenMenu(false)} className='flex xl:hidden ml-auto z-30' src={openMenu == false ? Menu : Close}></img>
      </div>
      <MobileMenu check={openMenu}/>
    </header>
  )
}


export default Header