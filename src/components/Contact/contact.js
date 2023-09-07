import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import WhatsappIcon from '../../assets/whatsapp-icon.png'
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_bllqbg4', 'template_funojo3', form.current, 'Hyy-D18CLMtJWuYij')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          This is a demo text fot my clients description.
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="Client" className="clientImg" />
          <img src={Microsoft} alt="Client" className="clientImg" />
          <img src={Adobe} alt="Client" className="clientImg" />
          <img src={Facebook} alt="Client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name='your_name' />
          <input type="email" className="email" placeholder="Your Email" name='your_email' />
          <textarea
            rows="5"
            className="msg"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
             <a href="https://wa.me/6281539328432" target="_blank" rel="noopener noreferrer">
                <img src={WhatsappIcon} alt="WhatsApp" className="link" />
            </a>
            <a href="https://www.facebook.com/maulana.arya.35/" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook" className="link" />
            </a>
            <a href="https://twitter.com/maulanaryj" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Twitter" className="link" />
            </a>
            <a href="https://www.youtube.com/channel/UCR0BGiMRjtgxCwCHBCs92ag" target="_blank" rel="noopener noreferrer">
                <img src={YouTubeIcon} alt="YouTube" className="link" />
            </a>
            <a href="https://www.instagram.com/maulanaryj/" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" className="link" />
            </a>
        </div>

        </form>
      </div>
    </section>
  );
};

export default Contact;
