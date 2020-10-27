import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeData04 } from './Data'

const Services = () => (
  <>
    <HeroSection {...homeData04} />
    <Pricing />
  </>
)

export default Services
