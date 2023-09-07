import React from 'react'
import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do ?</span>
        <span className='skillDesc'>I am a skilled and passionate web desginer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient int HTML, CSS, and JavaScript.</span>
        <div className='skillBars'>
          <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>UI/UX Design</h2>
              <p>I have a little experience designing UI/UX for several web and mobile applications that I make.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Web Developer</h2>
              <p>I have made several web applications intended to fulfill lecture assignments.</p>
            </div>
          </div>
          <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
            <div className='skillBarText'>
              <h2>Mobile App Developer</h2>
              <p>I have made several mobile applications intended to fulfill assignment scores during my lectures..</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills
