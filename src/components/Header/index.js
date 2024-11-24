import React from "react";
import { Styled } from "./style";
import { Icon } from "react-icons-kit";
import { ic_call } from "react-icons-kit/md/ic_call";

const Header = () => {
  return (
    <>
      <Styled.Background />
      <Styled.MenuBar>
        <div className="menu-container">
          <Styled.Link to="/">
            <div className="title">
              <img src="images/logo1.png" alt="더샵신문그리니티" />
            </div>
          </Styled.Link>
          <Styled.Link to="/sub2">
            <div className="menu">단지안내</div>
          </Styled.Link>
          <Styled.Link to="/sub3">
            <div className="menu">입지분석</div>
          </Styled.Link>
          <Styled.Link to="/sub5">
            <div className="menu">타입안내</div>
          </Styled.Link>
        </div>
      </Styled.MenuBar>
      <Styled.Description>
        <div className="description">
          <div className="title">더샵 신문 그리니티</div>
          <div className="call-title">(클릭 시 상담원 연결)</div>
          <a href="tel:1688-6331" className="call-button">
            <Icon size={"20"} icon={ic_call} />
            <div>1688-6331</div>
          </a>
        </div>
      </Styled.Description>
    </>
  );
};

export default Header;
