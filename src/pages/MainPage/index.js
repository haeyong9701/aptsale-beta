import React from "react";
import { Styled } from "./style";
import { Header, Footer, Sidebar } from "../../components";
import { useState } from "react";

const Mainpage = () => {
  const [on, setOn] = useState(true);

  const handleImageClick = () => {
    setOn(false);
  };

  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">
          <img className="main-image" src="images/info04.png" alt="메인페이지설명" />
          <img className="main-image" src="images/03.jpeg" alt="메인페이지설명" />
          <img className="main-image" src="images/04.jpeg" alt="메인페이지설명" />
          <img className="main-image" src="images/10.jpeg" alt="메인페이지설명" />
          <img className="main-image" src="images/06.jpeg" alt="메인페이지설명" />
          <img className="main-image" src="images/07.jpeg" alt="메인페이지설명" />
          <img className="main-image" src="images/08.jpeg" alt="메인페이지설명" />
          <img className="main-image" src="images/09.jpeg" alt="메인페이지설명" />
          <img className="main-image" src="images/05.jpeg" alt="메인페이지설명" />
          <img className="main-image" src="images/info02.png" alt="메인페이지설명" />
          <img className="main-image" src="images/info03.png" alt="메인페이지설명" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Mainpage;
