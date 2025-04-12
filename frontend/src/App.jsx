import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Doctors from './pages/Doctors.jsx'
import Login from './pages/Login'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments.jsx'
import Appointment from './pages/Appointment.jsx'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Donating from './pages/Donating.jsx'
import Tracking from './pages/Tracking.jsx'
import Receiver from './pages/Receiver.jsx'
import Donations from './components/Donations.jsx'
import LocationofFood from './components/LocationofFood.jsx'
const App = () => {
  return (
    <div className='mx-1 sm:mx-[10%]'>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/doctors' element={<Doctors />}></Route>
        <Route path='/doctors/:speciality' element={<Doctors />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/my-profile' element={<MyProfile />}></Route>
        <Route path='/my-appointment' element={<MyAppointments />}></Route>
        <Route path='/appointment/:docId' element={<Appointment />}></Route>
        <Route path='/donating' element={<Donating />}></Route>
        <Route path='/tracking' element={<Tracking />}></Route>
        <Route path='/receiver' element={<Receiver />}></Route>
        <Route path='/donations' element={<Donations />}></Route>
        <Route path='/locationofFood' element={<LocationofFood />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
