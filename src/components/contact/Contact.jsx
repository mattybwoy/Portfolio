import { useState, useRef } from "react";
import "./contact.scss"
import emailjs from 'emailjs-com';

export default function Contact() {

  const [message, setMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!e.target.name.value || !e.target.email.value || !e.target.message.value) {
      setMessage(false)
      setErrorMessage(true)
    } else {
      emailjs.sendForm('service_2bw6f7j', 'template_ruettum', form.current, 'M9xCb82F0UrK3EDGl')
      setErrorMessage(false)
      setMessage(true)
    }
    e.target.reset()
  };
  
  return (
    <div className='contact' id='contact'>
      <div className='left'>
        <img src="./assets/wbb.png" alt=''/>
      </div>
      <div className ="right">
        <h2>Contact Me</h2>
        <form ref = {form} onSubmit={sendEmail}>
          <input type= "text" name = "name" placeholder="Name"/>
          <input type="text" name = "email" placeholder="Email"/>
          <textarea name = "message" placeholder = "Message"></textarea>
          <button type="submit">Send</button>
          {message && <span className="msg">Thanks, I'll reply soon</span>}
          {errorMessage && <span className="error">Please fill in all fields</span>}
        </form>
      </div>
    </div>
    
  )
}
