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
          <img className="main-image" src="images/01.png" alt="메인페이지설명" />
          <img className="main-image" src="images/02.png" alt="메인페이지설명" />
          <img className="main-image" src="images/03.png" alt="메인페이지설명" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Mainpage;
