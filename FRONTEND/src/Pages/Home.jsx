import React from 'react'
import HeroSection from '../components/HeroSection'
import About from "../components/About";
import Menu from "../Pages/Menu";
import Qualities from './Qualities'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'
const Home = () => {
    return (
        <>
         <HeroSection/>
         <About/>
         <Qualities/>
         <Menu/>
         <WhoAreWe/>
         <Team/>
         <Reservation/>
         <Footer/>
          
        </>
    )
}

export default Home