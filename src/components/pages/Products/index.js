import React from 'react'
import HeroSection from '../../HeroSection'
import { homeData03, homeData02 } from './Data'

const Products = () => (
  <>
    <HeroSection {...homeData03} />
    <HeroSection {...homeData02} />
  </>
)

export default Products
