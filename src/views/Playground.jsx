import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/Footer'
import './playground.css'

const Playground = () => {
  return (
    <>
    <Navbar/>
    <h3>Playground</h3>
    <p>This is the playground area for experimenting with animations and interactions.</p>
    <main className='w-full h-screen my-4'>

    </main>
    <Footer />
    </>
  )
}

export default Playground