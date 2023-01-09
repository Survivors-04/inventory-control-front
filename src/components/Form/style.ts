import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #15222c;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  border-radius: 5px;
  max-width: 350px;
  padding: 30px;
  margin-top: 100px;
  height: 420px;

  p,
  span {
    text-align: center;
    padding: 10px;
    color: #f1cf32;
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
    gap: 10px;

    label {
      display: flex;
      font-size: 11px;
      color: #f1cf32;
      justify-content: left;
    }

    input {
      height: 30px;
      width: 300px;
      border: 2px solid transparent;
      outline: none;
      border-bottom: 2px solid #3f3f3f;
      caret-color: #3f3f3f;
      background-color: #15222c;
      padding: 5px;
      transition: 0.5s linear;
      font-family: monospace;
      letter-spacing: 1px;
    }

    input:focus {
      border: 2px solid #f1cf32;
      caret-color: #f1cf32;
      color: #f1cf32;
      box-shadow: 4px 4px 10px #070707;
    }

    input::placeholder {
      font-size: 12px;
    }

    input:focus::placeholder {
      color: #f1cf32;
      font-size: 12px;
    }

    span {
      display: flex;
      justify-content: left;
      font-size: 14px;
      color: #f42626;
    }
  }
`;
