import React from 'react'
import Footer from '../components/footer/Footer'
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2/HeroImg2';
import Form from '../components/Form/Form';


const Contact = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading="CONTACT." text ="Lets have a chat."/>
    <Form/>
    <Footer/>
    </div>
  )
}

export default Contact