import styled from "styled-components";

export const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 345px;
    height: 570px;
    background: url("images/popup.png") no-repeat;
    background-size: cover;
    transform: translate(-50%, -50%);
    z-index: 2;

    .text-container {
      position: absolute;
      top: 5%;
      display: flex;
      align-items: center;
      flex-direction: column;

      .title {
        color: #faca79;
        font-weight: 500;
        font-size: 1.1rem;
        letter-spacing: -1.5px;
      }

      .sub-title {
        font-family: "MaplestoryLight";
        font-weight: 600;
        font-size: 2.5rem;
        line-height: 1.3;
        text-align: center;
        color: #eeeeee;
      }

      .sub-title .sub-title-accent {
        color: #fffd99;
      }

      .logo-image {
        margin: 8px 0;
        width: 205px;
        height: auto;
      }

      .goods-content {
        text-align: center;
        color: #eeeeee;
        font-size: 1.1rem;
        font-weight: 600;
        line-height: 1.5;
        margin-top: 10px;

        .goods {
          font-family: "MaplestoryLight";
          background-color: #8e2a6d;
          padding: 5px 12px;
          border-radius: 50px;
        }

        .goods-sub-content {
          margin-top: 10px;
          font-size: 1rem;
          font-weight: 400;
        }
      }
    }

    .image-container {
      display: flex;
      position: absolute;
      bottom: 18%;
      gap: 4px;
      img {
        width: 110px;
        height: 110px;
      }
    }

    .button-container {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 70px;
      background-color: #eeeeee;
      display: flex;
      justify-content: right;
      align-items: center;

      .close-button {
        width: 100px;
        height: 50px;
        border: none;
        background: none;
        cursor: pointer;
        margin-right: 10px;
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  `,
};
