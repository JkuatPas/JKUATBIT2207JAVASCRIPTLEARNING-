import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import HeaderImage from './assets/animateone.gif'



function App  () {
  return (
    < > 
      <Navbar/>   
      <main className='bg-indigo-600 w-full h-screen'>
        <img src={HeaderImage} alt=""/>
        <h2 >This is an animations Website</h2>
        <p className=''>My profile about animating and my interests in animation will enter here</p>
      </main>
      <Footer/>
    </>
  )
}

export default App