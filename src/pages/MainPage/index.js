import { Styled } from "./style";
import { Header, Footer, Sidebar } from "../../components";
import { Icon } from "react-icons-kit";
import { ic_call } from "react-icons-kit/md/ic_call";
import { APT_NAME } from "../../constants";
import { RESERVATION_LINK } from "../../constants";

const Mainpage = () => {
  return (
    <>
      <Header />
      <Styled.Description>
        <div className="description">
          <div className="title">{APT_NAME}</div>
          <div className="call-title">(클릭 시 상담원 연결)</div>
          <a href="tel:1688-6331" className="call-button">
            <Icon size={"20"} icon={ic_call} />
            <div>1688-6331</div>
          </a>
          <div className="reservation-container">
            <a href={RESERVATION_LINK} className="reservation-link">
              <div>사전 방문 예약</div>
            </a>
          </div>
        </div>
      </Styled.Description>
      <Styled.Body>
        <div className="image-container">
          <img className="main-image" src="images/단지배치도.png" alt="단지배치도" />
          <img className="main-image" src="images/타입59A.png" alt="타입59A" />
          <img className="main-image" src="images/타입75A.png" alt="타입75A" />
          <img className="main-image" src="images/타입75B.png" alt="타입75B" />
          <img className="main-image" src="images/타입84A.png" alt="타입84A" />
          <img className="main-image" src="images/타입84B.png" alt="타입84B" />
          <img className="main-image" src="images/타입84C.png" alt="타입84C" />
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

export default Mainpage;
