import React from 'react';
import "./IntroductionSection.css";
import SnowSecond from "../images/yukimuro7-2.jpg";
import SnowAnimation from './SnowAnimation';


const IntroductionSection = () => {
  return (
    <>
      <div className="intro" style={{ backgroundImage: `url(${SnowSecond})` }}>
        <SnowAnimation className="snow" />
        <div className='intro-container'>
          <div className='main-title'>
            <p>ゆきむろ</p> 
            <h1>雪室</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default IntroductionSection