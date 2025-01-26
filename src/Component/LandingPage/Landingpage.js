import React from 'react'
import './Landingpage.css'
import HeaderBar from '../HeaderBar/HeaderBar'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import TrustedBy from '../TrustedBy/TrustedBy'
import ServicesComponent from '../ServicesComponent/ServicesComponent'
import AboutSection from '../AboutSection/AboutSection'
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs'
import VideoIntro from '../VideoIntro/VideoIntro'
import HappyClients from '../HappyClients/HappyClients'
import CardComponent from '../CardComponent/CardComponent'
import MobilePhone from '../MobilePhone/MobilePhone'
import FAQSection from '../FAQSection/FAQSection'
import Testimonials from '../Testimonials/Testimonials'
import Statistics from '../Statistics/Statistics'
import HeroSection from '../HeroSection/HeroSection'
import Trusted from '../Trusted/Trusted'
import Footer from '../Footer/Footer'
export default function Landingpage() {
  return (
    <div>
    <HeaderBar/>
      <Navbar/>
      <Banner/>
      <TrustedBy/>
      <ServicesComponent/>
      <AboutSection/>
      <WhyChooseUs/>
      <VideoIntro/>
      <HappyClients/>
      <CardComponent/>
      <Testimonials/>
      <FAQSection/>
      <MobilePhone/>
      <Statistics/>
      <HeroSection/>
      <Trusted/>
      <Footer/>
    </div>
  )
}
