import "./heroimgStyle.css";
import React from 'react'
import IntroImg from "../../assets/2.jpg";
import { Link} from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className ="into-img" src ={IntroImg} alt ="intro img"/>
    </div>
    <div className="content">
        <p>Hello, I,M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn-light">Contact</Link>

        </div>
    </div>
    </div>
  )
}

export default Heroimg