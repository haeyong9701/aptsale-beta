import { Styled } from "./style";
import { NavLink } from "react-router-dom";

const getLinkStyle = ({ isActive }) => ({
  color: isActive ? "#FAE999" : "white",
  textDecoration: "none",
});

const Header = () => {
  return (
    <>
      <Styled.Background />
      <Styled.MenuBar>
        <div className="menu-container">
          <Styled.Link to="/">
            <div className="title">EFETE</div>
          </Styled.Link>
          <NavLink to="/property-guide" activeClassName="active" style={getLinkStyle}>
            <div className="menu">단지안내</div>
          </NavLink>
          <NavLink to="/location-analysis" activeClassName="active" style={getLinkStyle}>
            <div className="menu">입지분석</div>
          </NavLink>
          <NavLink to="/unit-type-guide" activeClassName="active" style={getLinkStyle}>
            <div className="menu">타입안내</div>
          </NavLink>
        </div>
      </Styled.MenuBar>
    </>
  );
};

export default Header;
