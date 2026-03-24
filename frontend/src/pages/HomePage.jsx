import { Show, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/react'
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Features from '../components/Feratures/Features'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return (
    <div>
  <Navbar/>
  <Hero/>
  <Features/>
<div
  style={{
    minHeight: "30vh",
    display: "flex",
    flexDirection: "column",
  }}
>
  <div style={{ flex: 1 }}>
  </div>

  <Footer />
</div>
    </div>
  )
}

export default HomePage
