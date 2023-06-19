import React from 'react';
import "./HeroSection.css";
import SnowImage from "../images/yukimuro7-1.jpg";
import Potato from "../images/potato7-1.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="hero">
        <div className='hero-container'>
          <div className='leftSide'>
            <img className="yukimuro" src={SnowImage} />
          </div>
          <div className="rightSide">
            <div className="yukimuro-inner">
              <div className="yukimuro-description">
                <p>ゆきむろの効果は？</p>
                <h3>じゃがいもの甘さがアップ！？</h3>
                <p>じゃがいもが低温に長期間さらされると、甘味が増加します。<br/></p>
                <p>植物自身は凍るのを防ごうとして、でんぷんを糖に変えるという仕組みが備わっているのです。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection