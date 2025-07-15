import { Header, Footer, Sidebar } from "../../components";
import { Styled } from "./style";

// 타입안내 페이지
const UnitTypeGuidePage = () => {
  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">
          <img className="main-image" src="images/타입59A.png" alt="타입59A" />
          <img className="main-image" src="images/타입75A.png" alt="타입75A" />
          <img className="main-image" src="images/타입75B.png" alt="타입75B" />
          <img className="main-image" src="images/타입84A.png" alt="타입84A" />
          <img className="main-image" src="images/타입84B.png" alt="타입84B" />
          <img className="main-image" src="images/타입84C.png" alt="타입84C" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default UnitTypeGuidePage;
