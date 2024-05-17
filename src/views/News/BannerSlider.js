import React from "react";
import Slider from "react-slick";

import "../Aboutus/slick.css";

import bannerImg1 from "../../assets/images/10newsir/news_banner_img1_boston.png";
import bannerImg2 from "../../assets/images/10newsir/bannerImg2.png";
import { Link } from "react-router-dom";

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
    arrows: false, // 좌우 화살표 사용 여부 (false로 설정하여 비활성화)
  };

  // HeringsPost 로컬환경에서 modalObj, modalImg 값 확인

  // const modalObj = {
  //   content:
  //   img:
  //   no: ,
  //   reg_datetime:
  //   title:
  // }

  // const modalImg =
  //   "https://back.heringsglobal.com/upimg/1715823074620_healiary.png";
  return (
    <div className="">
      <Slider {...settings}>
        <Link
          to={{
            // 보스턴 대학
            pathname: `/news/6`,
            state: {
              open: true,
              modalObj: {
                content:
                  '<p>세션 진행을 위해 만난 헤링스 남병호 대표(좌)</p><p>보스턴 대학의 보건대학원 학장 산드로 갈레아(우)</p><p><br></p><p>첨단 기술과 의료 전문가의 지식을 결합하여 원격 환자 모니터링(RPM) 서비스를 핵심 비즈니스로 제공하는 디지털 헬스케어 선두기업인 헤링스(Herings)는 2024년 3월 4일 보스턴 대학과 함께 혁신적인 디지털 헬스케어 세션을 진행하였다.</p><p>이 세션에서는 최신 디지털 헬스케어 기술과 그 영향력에 대한 심도 있는 논의가 이루어졌으며, 공중보건과 해당 정책 개발 전문가로서 보스턴 대학 보건대학원(School of Public Health)의 학장인 산드로 갈레아(Sandro Galea) 교수가 참석하였다.</p><p><br></p><p><br></p><p><strong class="ql-size-large">산드로 갈레아(Sandro Galea) 교수 소개</strong></p><p>보스턴 대학의 보건대학원(School of Public Health) 학장이자 교수로 재직 중인 산드로 갈레아(Sandro Galea)는 의사, 역학자, 저자로 활동하고 있으며, 2015년에 보스턴 대학 보건대학원 학장으로 취임하였다.</p><p>사회과학 분야에서 가장 널리 인용되는 학자 중 한 명으로서, 1,000편 이상의 과학 저널 기사와 논문 출판하였다. 그의 연구는 공중보건의 사회적 결정요인, 정신 건강, 그리고 인구 건강에 중점을 두고 있으며, 그의 학문적 기여는 공중보건 분야의 이해와 정책 개발에 중요한 영향을 미치고 있다.</p><p><br></p><p><br></p><p><strong class="ql-size-large">세션 방향성은?</strong></p><p>이 세션에서는 헤링스에서 진행중인 힐리어리, 아띠, 오스토 케어 등 원격 환자 모니터링 관련 사업 소개와 함께, 헬스케어 산업에서 디지털 혁신의 중요성과 이를 통해 개선될 수 있는 환자 치료 방법 및 의료 서비스의 질에 대해 집중적으로 다루었다.</p><p>산드로 갈레아 교수는 특히 헤링스의 힐리어리, 오스토 케어 등에 큰 관심을 보였으며, 또한 헤링스의 알고리즘과 임상시험, 비즈니스 모델에 대한 심도 있는 질문을 하였다.</p><p>헤링스의 남병호 대표이사와 보스턴 대학의 산드로 갈레아 교수는 이번 세션을 통해 디지털 헬스케어가 의료 서비스의 접근성을 어떻게 개선할 수 있는지, 그리고 미래 의료 산업의 방향성을 함께 모색하는 기회로써 원격 환자 모니터링(RPM) 서비스에 대한 이해를 높이는 뜻깊은 자리였다고 평가하였다.</p>',
                no: 6,
                reg_datetime: "2024-05-03 06:51:26",
                title:
                  '“헤링스, 보스턴 대학과 원격 환자 모니터링(RPM)서비스 관련 디지털 헬스케어 세션 진행"',
              },
              modalImg:
                "https://back.heringsglobal.com/upimg/1714719086587_%E1%84%89%E1%85%A6%E1%84%89%E1%85%A7%E1%86%AB_%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpg", // 또는 필요한 이미지 경로
            },
          }}
        >
          <div>
            <img
              src={bannerImg1}
              alt="Banner1"
              className="slick-img"
              // onClick={() =>
              //   (window.location.href =
              //     "https://blog.naver.com/healiary/223373737665")
              // }
            />
          </div>
        </Link>

        <Link
          // 힐리어리 리뉴얼
          to={{
            pathname: `/news/7`,
            state: {
              open: true,
              modalObj: {
                content:
                  '<p><strong class="ql-size-large">헤링스, 원격 환자 모니터링(RPM) 주요 사업으로 \'힐리어리\' 앱 리뉴얼 완료하다!</strong></p><p><strong style="background-color: inherit;">원격 환자 모니터링(RPM) 업계에서 선구적인 역할을 하고 있는 헤링스가 </strong><strong style="background-color: inherit; color: rgb(0, 120, 203);">최근 자사의 암 환자들을 위한 종합적인 건강 관리 플랫폼 \'힐리어리를 전면적으로 리뉴얼</strong><strong style="background-color: inherit;">하며, 이 분야에서의 리더십을 더욱 공 고이 했다.</strong></p><p><br></p><p><strong style="background-color: inherit;">\'힐리어리\'</strong>에서는 기존 식단 분석, 추천 식단 등 암 환자를 위한 개인 맞춤형 식단 관리 서비스를 포함하여 <span style="background-color: rgb(255, 248, 178);">증상관리, 체중관리, 복약 알림, 진료 예약 알림 등의 새로운 서비스를 제공</span>한다. 새로운 기능들은 암 환자의 식단 관리뿐만 아니라 <span style="background-color: rgb(255, 248, 178);">전반적인 통합 건강관리를 효과적으로 관리할 수 있도록 지원</span>한다.</p><p><br></p><p>이번 리뉴얼을 통해 \'힐리어리\'는 사용자 인터페이스(UI)와 사용자 경험(UX)을 대폭 개선하여, 보다 직관적이고 편리한 사용자 환경을 제공한다. 또한, 최신 AI 기술을 활용하여 환자의 건강 데이터를 분석하고, 개인별 맞춤 건강 조언을 제공함으로써, <span style="background-color: rgb(255, 248, 178);">개인의 건강 관리를 한 단계 더 발전시키는 데 기여</span>하여, <span style="background-color: rgb(255, 248, 178);">RPM 기술의 새로운 지평을 열었다는 평가</span>를 받고 있다.</p><p><br></p><p><strong class="ql-size-large">원격 환자 모니터링(RPM)사업을 선도하는 헤링스의 사업 방향성</strong></p><p><span style="color: rgb(0, 0, 0);">헤링스의 CEO 남병호는</span></p><p><strong style="color: rgb(0, 0, 0); background-color: inherit;"><em>원격 환자 모니터링은 현재와 미래의 의료 건강관리 서비스 제공 방식에 있어 중요한 역할을 할 것이라며, "이번 \'힐리어리\' 앱의 리뉴얼을 통해 우리는 </em></strong><strong style="color: rgb(255, 0, 16); background-color: inherit;"><em>환자 중심의 서비스를 제공하고, 의료 접근성을 향상시키는 데 기여</em></strong><strong style="color: rgb(0, 0, 0); background-color: inherit;"><em>하고자 한다"</em></strong><span style="color: rgb(0, 0, 0);">라고 전했다.</span></p><p><br></p><p>디지털 헬스케어 분야의 전문가들은 힐리어리의 리뉴얼이 RPM 분야의 기술 발전뿐만 아니라, <span style="background-color: rgb(255, 248, 178);">환자 중심의 의료 건강관리 서비스 제공 모델로의 전환에 중요한 이정표</span>가 될 것으로 평가하고 있다. 헤링스의 이번 혁신적인 시도는 향후 디지털 헬스케어 산업 및 원격 환자 모니터링(RPM)의 발전 방향을 제시하는 중요한 사례로 기록될 것으로 전망된다.</p><p><br></p><p><strong style="color: rgb(85, 122, 116); background-color: inherit;">여러분의 믿음직한 동반자, </strong><strong style="color: rgb(0, 120, 203); background-color: inherit;">힐리어리</strong></p>',
                no: 7,
                reg_datetime: "2024-05-03 07:16:17",
                title:
                  "헤링스, 원격 환자 모니터링(RPM) 주요 사업으로 '힐리어리' 앱 리뉴얼 완료",
              },
              modalImg:
                "https://back.heringsglobal.com/upimg/1715823074620_healiary.png",
            },
          }}
        >
          <div>
            <img
              src={bannerImg2}
              alt="Banner2"
              className="slick-img"
              // onClick={() =>
              //   (window.location.href =
              //     "https://blog.naver.com/healiary/223354599499")
              // }
            />
          </div>
        </Link>

        {/* 추가 배너 이미지 */}
      </Slider>
    </div>
  );
}

export default BannerSlider;
