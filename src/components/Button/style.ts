import styled from "styled-components";

interface IPropsStyleButton {
  height?: string;
  width?: string;
}

export const StyledButton = styled.button<IPropsStyleButton>`
  padding: 10px 25px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1em;
  background: transparent;
  outline: none !important;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;

  border: 2px solid transparent;
  z-index: 1;
  background-color: #f1cf32;
  color: #15222c;
  border-radius: 10%;

  :after {
    position: absolute;
    content: "";
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background: #15222c;
    transition: all 0.3s ease;
  }

  :hover {
    color: #f1cf32;
    border-radius: 10%;
  }

  :hover:after {
    top: 0;
    height: 100%;
    background-color: #15222c;
    border-radius: 10%;
  }

  :active {
    top: 2px;
  }
`;
