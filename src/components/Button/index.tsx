import React from "react";
import { StyledButton } from "./style";

interface IButton {
  children: React.ReactNode;
}

const Button = ({ children }: IButton) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
