import React from "react";
import { Styled } from "./style";
import { Icon } from "react-icons-kit";
import { ic_call } from "react-icons-kit/md/ic_call";

const Sidebar = () => {
  return (
    <>
      <Styled.BottomBar>
        <div className="call-container">
          <a href="tel:16886331" className="call-link">
            <div className="call-link-box">
              <div>클릭시 상담사 연결</div>
              <div className="call-icon-number">
                <div className="icon">
                  <Icon size={"20"} icon={ic_call} />
                </div>
                <div>1688-6331</div>
              </div>
            </div>
          </a>
        </div>
        <div className="reservation-container">
          <a href="https://naver.me/513XTPEj" className="reservation-link">
            <div>사전방문예약</div>
          </a>
        </div>
      </Styled.BottomBar>
    </>
  );
};

export default Sidebar;
