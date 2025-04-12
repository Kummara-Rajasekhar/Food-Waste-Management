import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import RecHome from '../components/RecHome'
import LocationofFood from '../components/LocationofFood'
import Filter from '../components/Filter'
import HomeDonations from '../components/HomeDonations'

const Receiver = () => {
  return (
    <div>
     
      <RecHome/>
      <HomeDonations/>
      <Filter/>
      <LocationofFood/>

    </div>
  )
}

export default Receiver
