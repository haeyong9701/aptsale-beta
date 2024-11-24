import styled from "styled-components";

export const Styled = {
  Body: styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;

    .image-container {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .main-logo-box {
      position: absolute;
      width: 400px;
      cursor: pointer;
      top: 150px;
      left: 50px;
    }

    .main-logo {
      width: 100%;
      object-fit: cover;
    }

    .x-box {
      position: absolute;
      top: 0;
      right: 0;
      width: 30px;
      height: 30px;
    }

    .main-image {
      padding: 15px 0px;
      max-width: 1070px;
      width: 100vw;
      object-fit: cover;
    }

    .main-description {
      position: absolute;
      left: 0;
      bottom: -35px;
      color: white;
      font-weight: 600;
      cursor: pointer;
      font-size: 1.8rem;
      background-color: #001241;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 400px;
      height: 50px;
      z-index: 1;
    }

    .main-description span {
      color: #fcf82c;
    }

    @media screen and (max-width: 700px) {
      .main-logo-box {
        top: 50px;
        left: 50px;
        width: 300px;
      }

      .main-description {
        width: 300px;
        height: 40px;
        bottom: -25px;
        font-size: 1.4rem;
      }

      .x-box {
        width: 24px;
        height: 24px;
      }

      @media screen and (max-width: 375px) {
        .main-logo-box {
          top: 30px;
          left: 10px;
        }
      }
    }
  `,
};
