import React from 'react'
import About from './../About/About'
import Home from './../Home/Home'
import Footer from './../Footer/Footer'
import Portfolio from './../Portfolio/Portfolio'
import Profilie from './../Profile/Profilie'
import SocialM from './../Social/Social'
import Work from './../Work/Work'
const Index = ()=>{
    return(
        <div>
            <Home/>
            <Work/>
            <Portfolio/>
            <Profilie/>
            <About/>
            <SocialM/>
            <Footer/>
        </div>
    )
}

export default Index