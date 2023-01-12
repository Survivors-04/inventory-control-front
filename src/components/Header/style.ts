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
    transition: 0.3s;
  }

  a:hover {
    color: #4745bf;
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
`;

export const ContainerHeader = styled.div`
  width: 100%;
  height: 65px;
  background-color: #15222c;

  display: flex;
  justify-content: center;
`;

export const StyleLogoHeader = styled.div`
  width: 80%;
  max-width: 367px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const ModalHeaderStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #15222c;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  font-size: 18px;

  a {
    margin-bottom: 10%;
  }

  a:nth-child(1) {
    margin-top: 10%;
  }
`;
