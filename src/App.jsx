import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import HeaderImage from './assets/animateone.gif'
import './Control.css'
function App  () {
  return (
    < > 
      <Navbar/>   
      <header className='pt-16 justify-center'>
        <section className='text-center'>
          <div className='title'>
          <span className='text-3xl font-bold text-slate-100 mt-20'>Kreativ_Saharaa</span> 
          <span>We are an animations studio</span>
          </div>
        </section>
      </header>
      <h3>Some Animations</h3>
      <main className='bg-indigo-600 w-full'>
        <section>
          <img src={HeaderImage} alt="" />
          <h2>This is a page with animations</h2>
          <p>Some animations will be implemented here</p>
        </section>
        <section>
          <img src={HeaderImage} alt="" />
          <h2>This is a page with more animations</h2>
          <p>Even more animations will be implemented here</p>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default App