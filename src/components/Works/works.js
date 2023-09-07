import React from 'react'
import './works.css'
import Portofolio1 from '../../assets/portfolio-1.png'
import Portofolio2 from '../../assets/portfolio-2.png'
import Portofolio3 from '../../assets/portfolio-3.png'
import Portofolio4 from '../../assets/portfolio-4.png'
import Portofolio5 from '../../assets/portfolio-5.png'
import Portofolio6 from '../../assets/portfolio-6.png'

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
