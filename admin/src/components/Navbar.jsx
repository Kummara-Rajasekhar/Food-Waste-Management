import React, { useCallback, useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom';
import { DoctorContext } from '../context/DoctorContext';
import './Navbar.css'; 


const Navbar = () => {

  const { aToken, setAToken } = useContext(AdminContext);
  const { dtoken, setdtoken } = useContext(DoctorContext)
  const navigate = useNavigate();

  const logout = () => {
    navigate('/')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
    dtoken && setdtoken('')
    dtoken && localStorage.removeItem('dtoken')
  }
  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
      <h1 className='h1'>Zero Waste</h1>
        
      </div>
      <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
