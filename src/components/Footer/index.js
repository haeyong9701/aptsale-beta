import { Styled } from "./style";
import { APT_NAME, LOCATION } from "../../constants";

const Footer = () => {
  return (
    <>
      <Styled.Footer>
        <div className="info">
          <div>사업명: {APT_NAME}</div>
          <div>사업지 주소: {LOCATION}</div>
          <div>사이트 관리자: 조훈례</div>
          <div>이메일: chr196667@naver.com</div>
          <div>전화번호 : 010-9316-8671</div>
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
