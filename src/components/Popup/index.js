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
          <div className="title">12월 한정 이벤트</div>
          <div className="content">
            <p>
              황금 열쇠 4돈 <br />
              로보락 청소기 <br />
              음식물 처리기 <br />
              <div className="content-accent">방문 예약자에게 3가지 모두 증정</div>
            </p>
          </div>
        </div>
        <div className="image-container">
          <img src="images/christmas-tree.gif" alt="크리스마스트리" />
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
