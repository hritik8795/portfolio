import "./footerStyle.css";
import {FaHome, FaPhone, FaMailBulk,FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from "react-icons/fa"

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style ={{color:'#fff',marginRight:"2rem"}} />
                <div>
                    <p>Domaria ganj city.</p>
                    <p>Siddhartha Nagar Up.</p>
                </div>
                </div>

                <div className="phone">
                <h4><FaPhone size={20} style ={{color:'#fff',marginRight:"2rem"}}/> +91 8795788447 </h4>
                </div>


                <div className="email">
                <h4><FaMailBulk size={20} style ={{color:'#fff',marginRight:"2rem"}}/>hritik shukla44@gmail.com</h4>
              


                </div>

                

            </div>



            <div className="right">
            <h4>About the Company</h4>
            <p>this is Hritik Shukla.ceo and founder of solemn groups i enjoy the discussing about the new technology </p>
        <div className="social">
            <FaFacebook size ={30} style ={{color:'#fff',marginRight:"1rem"}}/>
            <FaTwitter size ={30} style ={{color:'#fff',marginRight:"1rem"}}/>
            <FaInstagram size ={30} style ={{color:'#fff',marginRight:"1rem"}}/>
            <FaLinkedin size ={30} style ={{color:'#fff',marginRight:"1rem"}}/>
        </div>
        </div>
        </div> 
    </div>
  )
}

export default Footer