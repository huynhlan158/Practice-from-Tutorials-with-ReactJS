import React, {useRef} from "react"
import './contact.css'

import emailjs from 'emailjs-com'

import { HiOutlineMail } from 'react-icons/hi'
import { FaFacebookMessenger } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'

function Contact () {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
  
        emailjs.sendForm('service_lrut54i', 'template_setgug6', form.current, 'wm2hjSSxjp7D_86Z0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <section id="contact">
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__options-detail">
                        <span><HiOutlineMail /></span>
                        <h4>Email</h4>
                        <h5>support@email.com</h5>
                        <a target="_blank" href="mailto:support@email.com">Send a message</a>
                    </article>
                    <article className="contact__options-detail">
                        <span><FaFacebookMessenger /></span>
                        <h4>Messenger</h4>
                        <h5>messenger</h5>
                        <a target="_blank" href="#">Send a message</a>
                    </article>
                    <article className="contact__options-detail">
                        <span><BsWhatsapp /></span>
                        <h4>WhatsApp</h4>
                        <h5>123-4567-890</h5>
                        <a target="_blank" href="https://api.whatsapp.com/send?phone=+1234567890">Send a message</a>
                    </article>
                </div>
                
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="fullname" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea rows="7" name="message" placeholder="Your Message" required />
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact