import React from "react";
import { Styled } from "./style";
import { NavLink } from "react-router-dom";

const getLinkStyle = ({ isActive }) => ({
  color: isActive ? "white" : "#001242",
  textDecoration: "none",
});

const Header = () => {
  return (
    <>
      <Styled.Background />
      <Styled.MenuBar>
        <div className="menu-container">
          <Styled.Link to="/">
            <div className="title">
              <img src="images/logo.png" alt="더샵신문그리니티" />
            </div>
          </Styled.Link>
          <NavLink to="/sub2" activeClassName="active" style={getLinkStyle}>
            <div className="menu">단지안내</div>
          </NavLink>
          <NavLink to="/sub3" activeClassName="active" style={getLinkStyle}>
            <div className="menu">입지분석</div>
          </NavLink>
          <NavLink to="/sub5" activeClassName="active" style={getLinkStyle}>
            <div className="menu">타입안내</div>
          </NavLink>
        </div>
      </Styled.MenuBar>
    </>
  );
};

export default Header;
