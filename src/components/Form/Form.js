import "./form.css";

import React ,{useRef} from 'react'
import emailjs from "@emailjs/browser";

const Form = () => {
  // naya feature yahi se start kia hai 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a15474a', 'template_cfe172b', form.current, 'qI5vH_7piskERcvVN')
      .then((result) => {
          console.log(result.text);
          alert("message sent");

      }, (error) => {
          console.log(error.text);
          alert("message not sent");
      });
  };
  // yahan tak-----------------------
  return (
    <div className="form">
    <form ref={form} onSubmit ={sendEmail}>
       <label>Your  full Name</label>
       <input type ="text"name="user_name" ></input>
       <label>Your Email</label>
       <input type ="email" name="user_email" ></input>
       <label>Subject</label>
       <input type ="text"></input>
       <label>Message</label>
       <textarea rows ="6" placeholder="type your message here "name="message" ></textarea>

       <button className="btn">Submit</button>
    </form>
     </div>
  )
}

export default Form