import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeData01, homeData02, homeData03, homeData04 } from './Data'

const Home = () => (
  <>
    <HeroSection {...homeData01} />
    <HeroSection {...homeData03} />
    <HeroSection {...homeData02} />
    <Pricing />
    <HeroSection {...homeData04} />
  </>
)

export default Home
