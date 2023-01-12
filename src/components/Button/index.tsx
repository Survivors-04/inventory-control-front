import React from "react";
import { StyledButton } from "./style";

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: IButton) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
