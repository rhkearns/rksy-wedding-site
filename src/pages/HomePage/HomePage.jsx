import React from 'react'
import './HomePage.scss'
import vaMountain from '../../images/va-mountain.jpg';

const HomePage = () => {
  return (
    <div className='home'>
      <h1 id='names'>Samantha Yudin <br /><span id="and">and <br /></span> Ryan Kearns</h1>
      <h2>April 26, 2025</h2>
      <h2>Peekskill, NY</h2>
      <img src={vaMountain} alt='Us in Virginia' className='cover-img'/>
    </div>
  )
}

export default HomePage