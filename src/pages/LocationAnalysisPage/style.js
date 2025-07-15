import styled from "styled-components";

export const Styled = {
  Body: styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;

    .image-container {
      display: flex;
      flex-direction: column;
    }

    img {
      padding: 15px 0px;
      max-width: 1070px;
      width: 100vw;
      object-fit: cover;
    }
  `,
};
