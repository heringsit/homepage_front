import React, { useState } from "react";
import PrivacyCard from "./PrivacyCard";
import "./PrivacyPolicy.css";

export default function HealiaryPrivacy() {
  const [button, setButton] = useState(0);
  function goPrivacy(num, e) {
    setButton(num);
  }
  const healiaryPolicyText = [
    "제1조 총칙",
    "1. 개인정보란 생존하는 개인에 관한 정보로서 성명, 주민등록번호 등에 의하여 당해 개인을 알아볼 수 있는 부호, 문자, 음성, 음향, 영상 및 생체 특성 등에 관한 정보(당해 정보만으로는 특정 개인을 알아볼 수 없는 경우에도 다른 정보와 용이하게 결합하여 알아볼 수 있는 것을 포함)를 말합니다.",
    '2. 주식회사 헤링스(이하 "회사"라 한다)는 회원의 개인정보를 중요시하며, 개인정보 보호 관련 각종 법규를 준수하고 있습니다.',
    "3. 회사는 개인정보처리방침을 통하여 회원의 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.",
    "4. 회사의 개인정보처리방침은 관련 법령 및 내부 운영 방침의 변경에 따라 개정될 수 있습니다. 개인정보처리방침이 개정되는 경우에는 시행일자 등을 부여하여 개정된 내용을 홈페이지(http://heringsglobal.com) 공지사항 등에 지체 없이 공지합니다.",
    "5. 영업의 전부 또는 일부를 양도하거나 합병 등으로 개인정보를 이전하는 경우 서면 전자우편 등을 통하여 회원께 개별적으로 통지하고, 회사의 과실 없이 회원의 연락처를 알 수 없는 경우에 해당하여 서면, 전자우편 등으로 통지할 수 없는 경우에는 홈페이지(http://heringsglobal.com) 공지사항 등에서 식별할 수 있도록 표기하여 30일 이상 그 사실을 공지합니다. 단, 천재지변 등 정당한 사유로 홈페이지 게시가 곤란한 경우에는 2곳 이상의 중앙일간지(회원의 대부분이 특정 지역에 거주하는 경우에는 그 지역을 보급구역으로 하는 일간지로 할 수 있습니다.)에 1회 이상 공고하는 것으로 갈음합니다.",
    "제2조 개인정보의 수집항목 및 수집/이용 목적",
    '1. 회사는 회원가입, 상담, "힐리어리" 서비스(이하 "서비스"라 한다.) 제공 등을 위하여 필요한 범위에서 최소한의 개인정보만을 수집합니다.',
    "2. 사상, 신념, 가족 및 친인척관계, 학력(學歷)·병력(病歷), 기타 사회활동 경력 등 회원의 권리·이익이나 사생활을 뚜렷하게 침해할 우려가 있는 개인정보는 수집하지 않습니다. 다만, 회원이 수집에 동의하시거나 다른 법률에 따라 특별히 수집 대상 개인정보로 허용된 경우에는 필요한 범위에서 최소한으로 위 개인정보를 수집할 수 있습니다.",
    "3. 회사는 최초 회원 가입 또는 서비스 이용 시 회원으로부터 아래와 같은 개인정보를 수집하며, 수집한 개인정보를 다음의 목적을 위해 활용합니다.",
    "개인정보처리방침과 서비스 내 개인정보 수집ㆍ이용 동의와 상충되는 부분이 있다면 서비스 내 개인정보 수집ㆍ이용 동의서의 내용이 우선합니다.",
  ];
  return (
    <>
      <div className="w-full h-full policyWrap">
        <div className="buttons">
          <div
            onClick={(e) => goPrivacy(0, e)}
            className={`${
              button === 0 ? "selectedPolicyButton" : "policyButton"
            } FontR textF14`}
          >
            개인 정보 처리 방침  {`>`}
          </div>
          <div
            onClick={(e) => goPrivacy(1, e)}
            className={`${
              button === 1 ? "selectedPolicyButton" : "policyButton"
            } FontR textF14`}
          >
            이용 약관  {`>`}
          </div>
        </div>
        <div className="policycontent">
          {button === 0 ? (
            <PrivacyCard
              title="힐리어리 개인 정보 처리 방침"
              policies={healiaryPolicyText}
            />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {/* title */}
      {/* content */}
    </>
  );
}
