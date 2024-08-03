import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <Navbar/>
      <main className='bg-indigo-600 w-full h-screen my-4'>
        <h1>About</h1>
      </main>
      <Footer/>
    </div>

  )
}

export default About