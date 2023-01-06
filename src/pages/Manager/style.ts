import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 0 auto;
  margin-top: 50px;
  width: 90%;

  section {
    display: flex;
    gap: 10px;
    align-items: center;

    img {
      width: 50px;
    }

    p {
      color: #f1cf32;
      font-weight: bold;
      font-size: 20px;
    }
  }
`;

export const StyledUl = styled.ul`
  margin: 0 auto;
  background-color: #15222c;
  padding: 15px;
  margin-top: 16px;
  border-radius: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: #f1cf32;
      font-weight: bold;
      font-size: 17px;
    }

    button {
      background-color: #f1cf32;
      width: 40px;
      height: 40px;
      border-radius: 8px;
      border: none;
    }
  }

  li {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
    border-radius: 8px;
    background-color: #e9e9f7;

    span {
      font-size: 13px;
      font-weight: bold;
    }
  }
`;
