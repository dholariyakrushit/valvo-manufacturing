import React from 'react'
import AboutUsSection from './aboutus-section/AboutUsSection'
import HeroSection from './hero-section/HeroSection'
import NavbarSection from './navbar-section/NavbarSection'
import ProductInfo from './product-info/ProductInfo'

function Home() {
  return (
    <div>
        <NavbarSection/>
        <HeroSection/>
        <AboutUsSection/>
        <ProductInfo/>
    </div>
  )
}

export default Home