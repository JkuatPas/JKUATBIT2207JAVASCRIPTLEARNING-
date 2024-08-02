import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import './App.css'

function App  () {
  return (
    <> 
      <Navbar/>   
      <main>
        <h2>This is an animations Website</h2>
        <p>My profile about animating and my interests in animation will enter here</p>
      </main>
      <Footer/>
    </>
  )
}

export default App