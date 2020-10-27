import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing'
import { homeData02, homeData04 } from './Data'

const SignUp = () => (
  <>
    <HeroSection {...homeData04} />
    <HeroSection {...homeData02} />
    <Pricing />
  </>
)

export default SignUp
