import React, { useContext } from "react";
import { ostomySpecialTitles, ostomySpecialRows } from "./OstomyTableList";
import { ThemeContext } from "../../../context";

// {/* <p className={`m-reset FontNL textF14`}>
//               회원가입
//             </p>
//             <p className={`m-reset FontNL textF14`}>
//               (개인)
//             </p> */}
const newLine = new RegExp("\n");
const processNewLine = (content) => {
  console.log(content.split(newLine))
  return content.split(newLine);
};
const OstomySpecialTable = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <table className="w-full" cellSpacing={0}>
      <thead>
        <tr>
          {ostomySpecialTitles?.map((title, idx) => (
            <th
              colSpan={idx === ostomySpecialTitles.length - 1 ? 2 : 1}
              key={idx}
              className={`${
                theme === "light"
                  ? "bg-tableheader-light tctheader"
                  : "bg-tableheader-dark tcw"
              }  p-12 FontNL textF14 border border-b-0 ${
                idx === ostomySpecialTitles.length - 1 ? "" : "border-r-0"
              }`}
              style={{ borderColor: "#e5e8eb" }}
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td
            rowSpan={5}
            className="p-12 FontNL textF14 border border-b-0 border-r-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            <p className={`m-reset  FontNL textF14`}>회원가입</p>
            <p className={`m-reset  FontNL textF14`}>(개인)</p>
          </td>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            <p className={`m-reset  FontNL textF14`}>이메일로 가입</p>
          </td>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            <p className={`m-reset  FontNL textF14`}>
              (필수)성명이름, 이메일, 비밀번호
            </p>
          </td>
          <td
            rowSpan={2}
            className="p-12 FontNL textF14 border border-b-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            회원 가입의사 확인, 식별∙인증, 회원자격 유지∙관리, 본인확인, 서비스
            부정이용 확인 및 방지, 각종 고지∙통지, 고충처리, 서비스 제공 및
            상담, 만 14세 이상 확인, 만족도 조사
          </td>
        </tr>
        <tr>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            <p className={`m-reset  FontNL textF14`}>카카오</p>
            <p className={`m-reset  FontNL textF14`}>계정으로 가입</p>
          </td>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            (필수)카카오 연동 ID, 페이스북 카카오 토큰, 성명, 프로필 사진
          </td>
        </tr>
        <tr>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            <p className={`m-reset  FontNL textF14`}>페이스북</p>
            <p className={`m-reset  FontNL textF14`}>계정으로 가입</p>
          </td>
          <td
            colSpan={2}
            className="p-12 FontNL textF14 border border-b-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            (필수)페이스북 연동ID, 페이스북 토큰, 성명, 프로필 사진
          </td>
        </tr>
        <tr>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            <p className={`m-reset  FontNL textF14`}>구글</p>
            <p className={`m-reset  FontNL textF14`}>계정으로 가입</p>
          </td>
          <td
            colSpan={2}
            className="p-12 FontNL textF14 border border-b-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            (필수)구글 연동ID, 구글 토큰
          </td>
        </tr>
        <tr>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            <p className={`m-reset  FontNL textF14`}>애플</p>
            <p className={`m-reset  FontNL textF14`}>계정으로 가입</p>
          </td>

          <td
            rowSpan={2}
            colSpan={2}
            className="p-12 FontNL textF14 border border-b-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            (필수) 성명, 이메일, 애플 연동ID
          </td>
        </tr>
        <tr>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            <p className={`m-reset  FontNL textF14`}>회원가입</p>
            <p className={`m-reset  FontNL textF14`}>(병원회원)</p>
          </td>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            성명, 휴대전화번호, 대표전화번호, 이메일, 비밀번호, 의료인
            정보(병원명, 병원 전화번호, 사업자등록번호, 요양기관번호, 주소,
            대표자명)성명, 휴대전화번호, 대표전화번호, 이메일, 비밀번호, 의료인
            정보(병원명, 병원 전화번호, 사업자등록번호, 요양기관번호, 주소,
            대표자명)
          </td>
        </tr>
        <tr>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0 "
            style={{ borderColor: "#e5e8eb" }}
          >
            비대면 진료 및 건강관리 서비스
          </td>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            성명이름, 주민등록번호, 휴대폰번호, 자녀이름, 자녀 주민등록번호,
            사전문진 정보, 증상사진 등 참고자료, 내외국인 여부,
            개인위치정보(경도, 위도), 처방전 등 진료 후 정보
          </td>
          <td
            rowSpan={2}
            colSpan={2}
            className="p-12 FontNL textF14 border border-b-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            비대면 진료, 건강상담, 건강관리 등 제반 서비스 이용 시 본인 인증 및
            의료인/의료기관에 정보 제공
          </td>
        </tr>
        <tr>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0 "
            style={{ borderColor: "#e5e8eb" }}
          >
            나의 건강정보
          </td>
          <td
            className="p-12 FontNL textF14 border border-b-0 border-r-0"
            style={{ borderColor: "#e5e8eb" }}
          >
            생년월일, 성별, 사전문진정보
          </td>
        </tr>
        {ostomySpecialRows.map((rows, ridx) => (
          <tr key={ridx}>
            {
              rows.map((row, idx) => (
                <td key={idx}
                colSpan={idx === rows.length -1 ? 2 : 1}
              className={`p-12 FontNL textF14 border ${
                ridx === ostomySpecialRows.length-1 ?
                "" : "border-b-0"
              } ${
                idx===rows.length-1 ?
                "" : "border-r-0"
              }`}
              style={{ borderColor: "#e5e8eb" }}
            >
              {processNewLine(row).map((line, id) => (           <p key={id} className={`m-reset  FontNL textF14`}>{line}</p>
              ))}
              
            </td>
              ))
            }
            
            
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OstomySpecialTable;
