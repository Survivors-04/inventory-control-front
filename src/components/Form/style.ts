import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #15222c;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  border-radius: 5px;
  width: 95%;
  max-width: 350px;
  padding: 35px;
  margin-top: 100px;
  height: 420px;

  p,
  span {
    text-align: center;
    padding: 10px;
    color: #f8f9fa;
    font-size: 15px;
    font-weight: bold;
  }

  button {
    border-radius: 5px;
    width: 280px;
    padding: 7px;
    border: none;
    margin-top: 25px;
    font-size: 15px;
    font-weight: bold;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 17px;

    input {
      display: flex;
      margin: 0 auto;
      width: 280px;
      padding: 5px;
      font-size: 15px;
      border-radius: 5px;
      border: none;
      height: 35px;
    }

    span {
      padding: 0;
    }

    p,
    span {
      font-size: 13px;
      color: #ff0000;
    }

    label {
      font-size: 15px;
      color: #f8f9fa;
    }
  }
`;
