import React from 'react'
import About from '../components/About'
import Booking from '../components/Booking'
import ContactUs from '../components/ContactUs'
import Header from '../components/Header'
import HealthPlans from '../components/HealthPlans'
import Modal from '../components/Modal'


const HomePage = () => {
  return (
    <div>
      <Header />
      <div id='about-section'>
      <About />
      </div>
      <HealthPlans />
      <Modal />
    </div>
  )
}

export default HomePage