import styled from "styled-components";
import { Link } from "react-router-dom";

export const Styled = {
  Background: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("images/main.png") no-repeat center center;
    background-size: cover;
    z-index: -1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.4); /* 반투명한 검정색 오버레이 */
      pointer-events: none; /* 오버레이가 클릭 이벤트를 차단하지 않도록 함 */
    }
  `,

  MenuBar: styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    height: 80px;
    border-bottom: 1px solid white;
    z-index: 1;

    .menu-container {
      width: 1070px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .title {
      font-size: 3rem;
      font-weight: 700;
      color: white;
      display: flex;
      align-items: center;

      @media screen and (max-width: 800px) {
        font-size: 1.5rem;
      }
    }

    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-weight: 600;
      font-size: 1.5rem;
      max-width: 250px;

      @media screen and (max-width: 800px) {
        font-size: 0.8rem;
      }
    }
  `,
  Link: styled(Link)`
    text-decoration: none;
  `,
};
