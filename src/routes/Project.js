import React from 'react';
import Footer from '../components/footer/Footer';
import Navbar from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2/HeroImg2';
import PricingCard from '../components/pricingCard/PricingCard';
import Work from '../components/work/Work';

const Project = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading ="PROJECTS." text ="some of my most recent worksss"/>
    <Work/>
    <PricingCard/>
    <Footer/>
     </div>
  )
}

export default Project