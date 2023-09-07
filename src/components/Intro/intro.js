import React from 'react';
import { Link } from 'react-scroll';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm <span className='introName'>Yoga</span> <br />Website Developer</span>
            <p className='introPara'>I am a developer and more interested in a web front-end with experience in creating visually appealing and user-friendly websites.</p>
        </div>
        <img src={bg} alt='Profile' className='bg'/>   
    </section>
  )
}

export default Intro