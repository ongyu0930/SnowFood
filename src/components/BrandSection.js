import React from 'react'
import "./BrandSection.css";
import SoupImage from "../images/soup.jpg";
import Pudding from "../images/sweetpotato7-1.jpg";
import Muffin from "../images/carrot7-1.jpg";

const BrandSection = () => {
  return (
    <>
      <div className='brand'>
        <div className='brand-container'>
          <div className="brand-title">
            <h1>雪室ブランド商品</h1>
          </div>
          <div className="brand-products">
            <img className="soup" src={SoupImage} />
            <div className="brand-subtitle">
              <h2>01</h2>
              <div className="two-line">
                <h3>甘さ際立つ！</h3>
                <h3>北海道の雪室じゃがいも冷製スープ</h3>
              </div>
            </div>
          </div>
          <div className="brand-products">
            <img className="soup" src={Pudding} />
            <div className="brand-subtitle">
              <h2>02</h2>
              <div className="two-line">
                <h3>濃厚な味わい</h3>
                <h3>北海道の雪室サツマイモプリン</h3>
              </div>
            </div>
          </div>
          <div className="brand-products">
            <img className="soup" src={Muffin} />
            <div className="brand-subtitle">
              <h2>03</h2>
              <div className="two-line">
                <h3>機能性ばつぐん</h3>
                <h3>新潟の雪下にんじん</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="pumpkin">
          <p>ジャガイモやサツマイモ、ニンジンについて研究は行われているが、<br />
          <span>カボチャ</span>についての研究は行われていない。<br />
          そこで、「雪室貯蔵したカボチャを加工向けに品質向上させる」を卒業論文研究にしてみました。
          </p>
        </div>
      </div>
    </>
  )
}

export default BrandSection