import React from 'react'
import Navbar from '../components/Navbar'
import VideoContainer from '../components/VideoContainer'
import Counter from '../components/Counter'
import Welcome from '../components/Welcome'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import ScrollToTop from '../utils/ScrollToTop'
import SocialMediaLinks from '../utils/SideLinks'
import AboutUs from '../components/AboutUs'
import Mission from '../components/Mission'
import Gallery from '../components/Gallery'
import ContactUs from '../components/Contactus'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <ScrollToTop/>
      <SocialMediaLinks/>
        <Navbar/>
        <VideoContainer/>
        <Counter/>
        <MaxWidthWrapper>
        <Welcome/>
        </MaxWidthWrapper>
        <MaxWidthWrapper>
        <AboutUs/>
        <Gallery/>
        <ContactUs/>
        </MaxWidthWrapper>
        <Footer/>
    </div>
  )
}

export default Home