import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  )
}

export default App