import React from 'react'
import './works.css'
import Portofolio1 from '../../assets/g1.jpg'
import Portofolio2 from '../../assets/g2.jpg'
import Portofolio3 from '../../assets/g3.jpg'
import Portofolio4 from '../../assets/g4.jpg'
import Portofolio5 from '../../assets/g5.jpg'
import Portofolio6 from '../../assets/g6.jpg'

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDescription'>The following are some of the things I've done.</span>
        <div className='worksImgs'>
            <img src={Portofolio1} alt='Portfolio 1' className='worksImg'/>
            <img src={Portofolio2} alt='Portfolio 2' className='worksImg'/>
            <img src={Portofolio3} alt='Portfolio 3' className='worksImg'/>
            <img src={Portofolio4} alt='Portfolio 4' className='worksImg'/>
            <img src={Portofolio5} alt='Portfolio 5' className='worksImg'/>
            <img src={Portofolio6} alt='Portfolio 6' className='worksImg'/>
        </div>
        <a href="https://github.com/maulanaryoga" target="_blank" rel="noopener noreferrer">
          <button className="worksBtn">See More</button>
        </a>
    </section>
  )
}

export default Works
