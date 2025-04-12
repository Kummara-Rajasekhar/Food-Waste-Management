import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-0 lg:px-20'>
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
        <p className='text-3xl md:text-4xl lg:text-5xl text-green-800 font-semibold  md:leading-tight lg:leading-tight'>
          Save Food
          <br />
          AI Powered Geo-Intelligent Food 
Donation & Rescue System
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-green-800 text-sm font-light'>
          
        </div>
        <Link to={'/donating'} className='flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300' href="#speciality">Donate Food<img className='w-3' src={assets.arrow_icon} alt="" /></Link>
      </div>
      <div className='md:w-1/2 relative'>
          <img className='py-10' height="10px" src={assets.headerimage} alt="" />
        
      </div>
    </div>

  )
}

export default Header
