

import React from 'react'
import Data from './images/data.svg'
import Hero from './images/hero-d.png'
import Hero2 from './images/hero.png'
import Audio from './images/audio.svg'
import Maker from './images/maker.svg'
import Meet from './images/meet.svg'


export const MainSection = () => {
  return (
    <section className="w-full flex-col xl:flex-row flex mt-6 justify-between">
      <div className='flex xl:hidden w-full justify-center mt-10'>
        <img src={Hero2}></img>
      </div>
      <div className='realtive text-center xl:text-left mt-10 xl:mt-60'>
        <h1 className='text-3xl xl:text-8xl font-black '>Make<br></br> remote work</h1>
        <p className='mt-12 text-medium-gray'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br></br> Velit maiores, labore, necessitatibus eos ad voluptates tempora<br></br> enim consequuntur incidunt aut reiciendis facere maxime amet iste architecto animi<br></br> perspiciatis esse! Magnam!</p>
        <button className='bg-black text-white p-7 py-2 text-2xl rounded mt-7'>Читать</button>
        <div className='flex flex-wrap gap-10 justify-center my-10 mt-15'>
          <img src={Data}></img>
          <img src={Audio}></img>
          <img src={Maker}></img>
          <img src={Meet}></img>
        </div>
      </div>
      <div className='hidden xl:flex w-2/4 mt-10'>
        <img src={Hero}></img>
      </div>
    </section>
  )
}
