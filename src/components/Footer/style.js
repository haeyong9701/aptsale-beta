import styled from "styled-components";

export const Styled = {
  Footer: styled.div`
    height: 320px;
    background-color: #35363a;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #dadce0;
    font-size: 1.5rem;
    @media screen and (max-width: 800px) {
      font-size: 3vw;
    }

    .info {
      font-size: 0.9rem;
      opacity: 0.8;
      margin: 2px;
    }

    .info div {
      margin: 4px;
    }

    .sub-title {
      margin: 20px 0px;
      font-size: 2rem;
      @media screen and (max-width: 800px) {
        font-size: 3.5vw;
      }
    }

    .phone-number {
      color: #dadce0;
      font-weight: bold;
    }
  `,
};
