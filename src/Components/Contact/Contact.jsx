import React, { useRef } from 'react';
import './Contact.css';

import emailjs from '@emailjs/browser';

import { useState } from 'react';

const Contact = () => {

    const [done, setDone] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qvuy3n9', 'template_73muv9d', form.current, '42NYeOWWqbn0SCJSk')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className="contact" id='Contact'>
            <div className="contact_left">

                <span>Get in touch </span>
                <span>Contact me</span>
                <div className="blur contact_blur1" style={{ background: "#ABF1FF94" }}>
                </div>

            </div>
            <div className="contact_right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <input type="email" name='user_email' className='user' placeholder='Email' />
                    <textarea name='message' className='user' placeholder='Message' />
                    <input type="submit" value="Send" className='button' />
                    <span>{done && "Thanks for contacting us!"}</span>

                    <div className="blur contact_blur2" style={{ background: "var(--purple)" }}></div>
                </form>

            </div>
        </div>
    )
}

export default Contact;