import React, { useState } from "react";
import { Styled } from "./style";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <Styled.Container>
        <div className="text-container">
          <div className="title">더샵 신문그리니티</div>
          <img className="logo-image" src="images/popupLogo.png" alt="더샵 신문그리니티" />
          <div className="sub-title">
            <p>
              <span className="sub-title-accent">선착순 계약자</span>
              <br />
              사은품 안내
            </p>
          </div>
          <div className="goods-content">
            <p className="goods">황금열쇠 4돈 / 로보락 청소기 / 음식물 처리기</p>
            <p className="goods-sub-content">- 사은품 소진 시 종료됩니다 -</p>
          </div>
        </div>
        <div className="image-container">
          <img src="images/황금열쇠.png" alt="황금열쇠" />
          <img src="images/로보락청소기.png" alt="로보락 청소기" />
          <img src="images/음식물처리기.png" alt="음식물 처리기" />
        </div>
        <div className="button-container">
          <button className="close-button" onClick={handleClose}>
            닫기
          </button>
        </div>
      </Styled.Container>
    )
  );
};

export default Popup;
