import styled from "styled-components";

export const Styled = {
  Container: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 600px;
    height: 500px;
    border-radius: 40px;
    background-color: #171614;
    z-index: 1;
    transform: translate(-50%, -50%);

    @media screen and (max-width: 800px) {
      width: 340px;
      height: 300px;
    }

    .button-container {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 90px;
      background-color: #eeeeee;
      display: flex;
      justify-content: right;
      align-items: center;
      border-bottom-left-radius: 40px;
      border-bottom-right-radius: 40px;

      @media screen and (max-width: 800px) {
        height: 70px;
      }

      .close-button {
        width: 100px;
        height: 40px;
        border: none;
        background: none;
        cursor: pointer;
        margin-right: 25px;
        font-size: 1.2rem;
        font-weight: 600;

        @media screen and (max-width: 800px) {
          width: 60px;
          height: 60px;
          margin-right: 30px;
          font-size: 1rem;
        }
      }
    }

    .text-container {
      position: absolute;
      top: 15%;
      left: 10%;
      display: flex;
      gap: 30px;
      flex-direction: column;
      z-index: 2;

      @media screen and (max-width: 800px) {
        gap: 15px;
      }

      .title {
        color: #faca79;
        font-weight: 600;
        font-size: 1.5rem;

        @media screen and (max-width: 800px) {
          font-size: 1rem;
        }
      }

      .content {
        color: #eeeeee;
        font-size: 1.8rem;
        font-weight: 600;
        line-height: 1.5;

        @media screen and (max-width: 800px) {
          font-size: 1.2rem;
        }
      }

      .content-accent {
        margin-bottom: 10px;
      }
    }

    .image-container {
      position: absolute;
      bottom: 20%;
      right: 2%;

      @media screen and (max-width: 800px) {
        right: 6%;
        img {
          max-width: 100px;
          height: auto;
        }
      }
    }
  `,
};
