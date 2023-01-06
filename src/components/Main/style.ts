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

export const StyledDiv = styled.div`
  background-color: #212529;
  border-radius: 5px;

  button {
    cursor: pointer;
  }

  div {
    display: flex;
    justify-content: space-around;
    gap: 80px;
    background: #aab5bf;
    border-radius: 5px 5px 0px 0px;
    padding: 10px;
    align-items: center;
    p {
      color: #ffffff;
      font-size: 15px;
      font-weight: bold;
    }
    button {
      border: none;
      color: #ffffff;
      background: #aab5bf;
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
    border: none;
    border: 1px solid #f8f9fa;
    border-radius: 5px;
    background-color: #343b41;
    height: 20%;
    padding: 5px;
    color: #f8f9fa;
  }
  span {
    display: flex;
    justify-content: left;
    font-size: 14px;
    color: #f42626;
  }
  select {
    border: 1px solid #f8f9fa;
    border-radius: 5px;
    background-color: #343b41;
    height: 20%;
    padding: 5px;
    color: #f8f9fa;
  }
  button {
    background-color: #4a4afc;
    color: #ffffff;
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
