import React from 'react'
import Phonesell from '../components/Phonesell'
import Banner from '../components/Banner'
import Furniture from '../components/Furniture'
import Arrivals from '../components/Arrivals'
import NewArrival from '../components/NewArrival'
const Homepage = () => {
  return (
    <div>
        <Banner/>
        <Phonesell/>
        <Furniture/>
        <Arrivals/>
        <NewArrival/>
    </div>
  )
}

export default Homepage
