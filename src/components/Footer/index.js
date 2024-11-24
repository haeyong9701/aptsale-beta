import React from "react";
import { Styled } from "./style";

const Footer = () => {
  return (
    <>
      <Styled.Footer>
        <div className="info">
          <div>사업명: 쌍용 더 플래티넘 삼계</div>
          <div>사업지 주소: 경상남도 김해시 삼계동 1027-12번지 일원</div>
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
