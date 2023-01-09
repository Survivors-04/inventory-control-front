import styled from "styled-components";

export const ContainerStyled = styled.div``;

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
      height: 30px;
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
  }

  li {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
    cursor: pointer;
    border-radius: 8px;
    background-color: #e9e9f7;

    span {
      font-size: 13px;
      font-weight: bold;
    }
  }

  li:hover {
    background-color: #f1cf32;
  }
`;

export const StyledDiv = styled.div`
  background-color: #15222c;
  border-radius: 5px;

  button {
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: space-around;
    gap: 80px;
    background: #f1cf32;
    border-radius: 5px 5px 0px 0px;
    padding: 10px;
    align-items: center;
    p {
      color: #15222c;
      font-size: 15px;
      font-weight: bold;
    }
    button {
      border: none;
      color: #15222c;
      background: #f1cf32;
      border-radius: 5px;
    }
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 10px;
  margin: auto;
  width: 85%;
  height: 80%;
  padding: 15px;

  max-width: 357px;

  @media (min-width: 700px) {
    width: 400px;
  }

  label {
    display: flex;
    font-size: 11px;
    color: #f8f9fa;
    justify-content: left;
  }

  input {
    height: 30px;
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
  select {
    border: 1px solid #f1cf32;
    border-radius: 5px;
    background-color: #15222c;
    height: 20%;
    padding: 5px;
    color: #f8f9fa;
  }
  button {
    background-color: #f1cf32;
    color: #15222c;
    border: none;
    border-radius: 5px;
    font-size: 15px;
    font-weight: bold;
    padding: 5px;
    height: 35px;
    cursor: pointer;
    margin-top: 15px;
  }
`;

export const StyledButton = styled.button`
  max-width: 150px;
  padding: 10px 25px;
  font-weight: 600;
  font-size: 15px;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;

  border: 2px solid transparent;
  background-color: #15222c;
  color: #f1cf32;
  border-radius: 5%;

  :hover {
    background-color: #4745bf;
    color: #f1cf32;
    border-radius: 5%;
  }
`;
