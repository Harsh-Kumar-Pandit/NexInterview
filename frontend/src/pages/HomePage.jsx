import { Show, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/react'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Features from '../components/Feratures/Features'

const HomePage = () => {
  return (
    <div>
  <Navbar/>
  <Hero/>
  <Features/>
    </div>
  )
}

export default HomePage
