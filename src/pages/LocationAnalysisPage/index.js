import { Header, Footer, Sidebar } from "../../components";
import { Styled } from "./style";

// 입지분석 페이지
const LocationAnalysisPage = () => {
  return (
    <>
      <Header />
      <Styled.Body>
        <div className="image-container">
          <img className="main-image" src="images/입지분석01.png" alt="입지분석01" />
          <img className="main-image" src="images/입지분석02.png" alt="입지분석02" />
          <img className="main-image" src="images/입지분석03.png" alt="입지분석03" />
        </div>
      </Styled.Body>
      <Sidebar />
      <Footer />
    </>
  );
};

export default LocationAnalysisPage;
