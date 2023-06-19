import React from 'react'
import profileImage from "../images/profile.jpg";
import reactImage from "../images/react.png";
import jsImage from "../images/js.png";
import htmlImage from "../images/html.png";
import "./ProfileSection.css";

const ProfileSection = () => {
  return (
    <>
      <div className="container text-center">
        <h1>原田 悠杜</h1>

        <img src={profileImage} className="profileImage" />

        <p>
          東京農業大学農学部農学科ポストハーベスト学研究室所属4年生の原田悠杜です。<br />
          独学でプログラミングを始めて、Webサイトを作っています。
        </p>

        <section class="page-section" id="services">
          <div className="service">
            <div class="text-center">
              <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
              <h3 class="section-subheading text-muted mb-5">
                私が作ったことのある作品一覧です
              </h3>
            </div>
            <div class="row text-center">
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">ECサイト</h4>
                
              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">レスポンシブサイト</h4>
              </div>
              <div class="col-md-4">
                <span class="fa-stack fa-4x">
                  <i class="fas fa-circle fa-stack-2x text-primary"></i>
                  <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="my-3">コーポレートサイト</h4>
              </div>
            </div>
          </div>
        </section>

        <section id="skill">
          <div class="text-center">
            <h1 class="title">スキル</h1>
            <div class="row text-center">
              <div class="col-md-4 services">
                <img src={reactImage} />
                <h4>React</h4>
                <p>Reactが使えます。その他フレームワークも使います。</p>
              </div>
              <div class="col-md-4 services">
                <img src={jsImage} />
                <h4>JS</h4>
                <p>JavaScriptが使えます</p>
              </div>
              <div class="col-md-4 services">
                <img src={htmlImage} />
                <h4>HTML/CSS</h4>
                <p>HTML/CSSがつかえます</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default ProfileSection