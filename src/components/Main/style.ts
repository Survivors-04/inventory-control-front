import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 0 auto;
  margin-top: 50px;
  width: 90%;

  section {
    margin: 0;
    display: flex;
    gap: 10px;
    max-width: 50%;
    align-items: center;
    margin: 0 auto;
    max-width: 690px;
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
  max-width: 690px;

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

    input {
      width: 50%;
      border-radius: 10px;
      padding: 10px;
      height: 25px;
      border: none;
      font-size: 13px;
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
