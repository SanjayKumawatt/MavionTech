import React from 'react'
import HeroSection from '../Components/HeroSection'
import FeaturesSection from '../Components/FeaturesSection'
import AboutSection from '../Components/AboutSection'
import ServicesGrid from '../Components/ServicesGrid'
import WhyChooseUs from '../Components/WhyChooseUs'
import ContactSection from '../Components/ContactSection'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <FeaturesSection/>
        <AboutSection/>
        <ServicesGrid/>
        <WhyChooseUs/>
        <ContactSection/>
    </div>
  )
}

export default Home