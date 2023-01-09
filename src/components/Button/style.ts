import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 25px;
  font-weight: 600;
  font-size: 15px;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-block;

  border: 2px solid transparent;
  border-radius: 5%;
  background-color: #f1cf32;
  color: #15222c;

  :hover {
    background-color: #4745bf;
    color: #f1cf32;
    border: 2px solid transparent;
    border-radius: 5%;
  }
`;
