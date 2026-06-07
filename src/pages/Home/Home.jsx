import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Services from '../../Components/Services/Services'
import Title from '../../Components/Title/Title'
import About from '../../Components/About/About'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'


const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title  subtitle="our services" title= "Services we offer"/>
      <Services/>
      <About/>
      <Title  subtitle="Testimonial" title= "What our clients say"/>
      <Testimonial/>
      <Title  subtitle="Contact us" title= "get in touch"/>
      <Contact/>
      <Footer/>
    </div>
    </>
  )
}

export default Home
