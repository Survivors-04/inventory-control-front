import styled from "styled-components";

interface IPropsModalBase {
  width?: string;
  heigth?: string;
  justifyContent?: string;
  alignItems?: string;
}

export const StyledModalContainer = styled.div<IPropsModalBase>`
  position: fixed;

  display: flex;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  flex-direction: column;

  width: 100%;
  min-height: 100vh;

  background: rgba(0, 0, 0, 0.5);
  inset: 0;
`;

export const StyledModalBox = styled.div<IPropsModalBase>`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.heigth ? props.heigth : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;
