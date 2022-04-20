import { useState, useRef } from "react";
import "./contact.scss"
import emailjs from 'emailjs-com';

export default function Contact() {

  const [message, setMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2bw6f7j', 'template_ruettum', form.current, 'M9xCb82F0UrK3EDGl')
    setMessage(true)
    e.target.reset()
  };
  
  return (
    <div className='contact' id='contact'>
      <div className='left'>

      </div>
      <div className ="right">
        <h2>Contact</h2>
        <form ref = {form} onSubmit={sendEmail}>
          <input type= "text" name = "name" placeholder="Name"/>
          <input type="text" name = "email" placeholder="Email"/>
          <textarea name = "message" placeholder = "Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply soon</span>}
        </form>
      </div>
    </div>
  )
}
