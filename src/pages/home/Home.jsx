import React from 'react'
import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'
import Job from '../../components/job/Job'
import Jobdetails from '../../components/jobdetails/Jobdetails'

export default function Home() {
  return (
    <div>
    
    <Header />
    <Hero />
    {/* Home, itong text na ito kay nasa Home na jsx 
    <h1> Dito ka ga tawag ng header, hero, footer etc</h1> */}
    
    <Job />
    <Header />
    <Jobdetails />
    </div>
  )
}
