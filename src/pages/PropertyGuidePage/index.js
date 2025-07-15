import { Header, Footer, Sidebar } from "../../components";
import { Styled } from "./style";

// 단지안내 페이지
const PropertyGuidePage = () => {
  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">
          <img className="main-image" src="images/단지배치도.png" alt="단지배치도" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default PropertyGuidePage;
