import React from  "react";
import Footer from "../components/footer/Footer";
import Heroimg from "../components/HeroImg/Heroimg";
import Navbar from "../components/Navbar";
import Work from "../components/work/Work"


const Home =() =>{
    return (
        <div>

            <Navbar/>

            <Heroimg/>

           <Work/>

            <Footer/>
        </div>
    )
}
export default Home;