import React from "react";
import { Header, Footer, Sidebar } from "../../components";
import { Styled } from "./style";

const Subpage4 = () => {
  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">{/* <img src="images/date01.png" alt="청약일정" /> */}</div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default Subpage4;
