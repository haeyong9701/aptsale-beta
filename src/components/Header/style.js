import styled from "styled-components";
import { Link } from "react-router-dom";

export const Styled = {
  Background: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: url("images/main00.png") no-repeat center center;
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

    .menu {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: white;
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

    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
    }
  `,

  Description: styled.div`
    .description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 30px;
      height: 90vh;

      .title {
        font-size: 2.3rem;
        font-weight: 800;
        color: white;

        @media screen and (max-width: 800px) {
          font-size: 1.7rem;
        }
      }
      .call-title {
        font-size: 1.4rem;
        font-weight: 700;
        color: #faec78;

        @media screen and (max-width: 800px) {
          font-size: 1.2rem;
        }
      }
      .call-button {
        display: flex;
        gap: 5px;
        font-size: 1.2rem;
        font-weight: 600;
        color: white;
        background-color: #16dd16;
        padding: 15px 30px;
        border-radius: 5px;
        text-decoration: none;
        cursor: pointer;

        @media screen and (max-width: 800px) {
          font-size: 1rem;
          padding: 12px 25px;
        }
      }
    }
  `,
};
