import React from 'react';
import "./SecondSection.css";

const SecondSection = () => {
  return (
    <>
      <div className='second'>
        <div className="second-container">
          <div className="second-text">
            <p className="what">ゆきむろってなに？</p>
            <i class="fa-sharp fa-solid fa-house" />
            <h3>雪国に伝わる<span>「天然の冷蔵庫」</span></h3>
            <p className="what-description">家庭用冷蔵庫は設定温度に対して±2～3℃で上下繰り返します。</p>
            <p className="what-description">仮に設定温度を0℃とした場合、庫内の温度はマイナス2～3℃まで下がってしまい、中に入れた食品や農作物は凍ってしまうこともあります。</p>
            <p className="what-description">一方で、雪室は温度0℃付近、湿度90%以上を安定して維持できるので、<br/><span>高い保存性を維持</span>するとともに<span>食品にストレスを与えない</span>というメリットがあります。</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondSection