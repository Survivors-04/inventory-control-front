import styled from "styled-components";

interface IPropsStyledHeader {
  logged: boolean;
  isOpenModal: boolean;
}

export const StyledHeader = styled.header<IPropsStyledHeader>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #15222c;
  width: 100%;
  height: 100%;
  max-width: 1500px;

  div:nth-child(1) {
    width: 80%;
    max-width: 367px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  img {
    width: 70%;
    max-width: 200px;
  }

  img:nth-child(2) {
    width: 18%;
    max-width: 48px;
  }

  svg {
    color: #f1cf32;
    width: 100%;
    height: 100%;
  }
  > button {
    width: 63px;
    height: 60%;
    background: transparent;
    border: none;
  }

  nav {
    display: none;
  }

  a {
    color: #f1cf32;
  }

  @media (min-width: 950px) {
    svg {
      display: none;
    }

    > button {
      display: none;
    }

    nav {
      width: 30%;
      height: 100%;

      margin-right: 1.7%;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    nav > a {
      font-size: 1.1em;
    }
  }

  /* @media (min-width: 1024px) {
    img {
      width: 15em;
    }

    div {
      display: flex;
    }
  } */
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 65px;
  background-color: #15222c;

  display: flex;
  justify-content: center;
`;

export const ModalHeaderStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;

  display: block;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
