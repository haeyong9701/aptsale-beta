import styled from "styled-components";

export const Styled = {
  BottomBar: styled.div`
    display: none;
    @media screen and (max-width: 800px) {
      position: fixed;
      z-index: 1;
      bottom: 0%;
      width: 100%;
      height: 65px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-size: 1rem;
      color: white;
      font-weight: 400;
      background-color: #f7f8fb;
    }

    .call-container,
    .reservation-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 170px;
      height: 55px;
      border-radius: 4px;
    }

    .call-container {
      background-color: #022c57;
    }

    .reservation-container {
      background-color: green;
    }

    .call-link,
    .reservation-link {
      display: flex;
      text-decoration: none;
      color: white;
      align-items: center;
      justify-content: center;
    }

    .call-link-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 3px;
    }

    .call-link {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    .reservation-link {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon {
      display: flex;
      align-items: center;
    }

    .call-icon-number {
      display: flex;
      align-items: center;
      gap: 2px;
    }
  `,
};
