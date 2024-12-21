import React from "react";
import { Styled } from "./style";
import { Header, Footer, Sidebar, Popup } from "../../components";
import { Icon } from "react-icons-kit";
import { ic_call } from "react-icons-kit/md/ic_call";

const Mainpage = () => {
  return (
    <>
      <Popup />
      <Header />
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
      <Styled.Body>
        <div className="image-container">
          <img className="main-image" src="images/01.png" alt="메인페이지설명" />
          <img className="main-image" src="images/02.png" alt="메인페이지설명" />
          <img className="main-image" src="images/03.png" alt="메인페이지설명" />
          <img className="main-image" src="images/04.png" alt="메인페이지설명" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Mainpage;
