import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDoctors from '../components/TopDoctors'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Part from './part'

const Home = () => {
  return (
    <div>
      <Header />
      
      <TopDoctors />
      <Part/>
      <Banner />
    </div>
  )
}

export default Home
