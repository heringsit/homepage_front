import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Aboutus/slick.css";

import bannerImg1 from "../../assets/images/10newsir/news_banner_img1_boston.png";
import bannerImg2 from "../../assets/images/10newsir/bannerImg2.png";

function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true, // 슬라이드 이동	시 마우스 호버하면 슬라이더 멈추게 설정
  };

  return (
    <div className="">
      <Slider {...settings}>
        <div>
          <img
            src={bannerImg1}
            alt="Banner1"
            className="slick-img"
            onClick={() =>
              (window.location.href =
                "https://blog.naver.com/healiary/223373737665")
            }
          />
        </div>
        <div>
          <img
            src={bannerImg2}
            alt="Banner2"
            className="slick-img"
            onClick={() =>
              (window.location.href =
                "https://blog.naver.com/healiary/223354599499")
            }
          />
        </div>

        {/* 추가 배너 이미지 */}
      </Slider>
    </div>
  );
}

export default BannerSlider;
