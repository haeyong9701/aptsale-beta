import React from "react";
import { Styled } from "./style";

const Footer = () => {
  return (
    <>
      <Styled.Footer>
        <div className="info">
          <div>사업명: 더샵 신문 그리니티</div>
          <div>사업지 주소: 경상남도 김해시 신문1지구 A7-1블록</div>
          {/* <div>사이트 관리자: 조훈례</div> */}
          <div>이메일: chr196667@naver.com</div>
          {/* <div>전화번호 : 010-9316-8671</div> */}
          <div></div>
        </div>
        <div className="sub-title">
          대표번호 <span className="phone-number">1688 - 6331</span>
        </div>
      </Styled.Footer>
    </>
  );
};

export default Footer;
