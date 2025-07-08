import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Achievements from './Components/Achievements/Achievements';
import Myprojects from './Components/MyProjects/Myprojects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';



const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Achievements/>
      <Myprojects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
