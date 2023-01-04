import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background-color: #1c1c1c;

  img {
    padding: 1em;
    width: 8em;
  }

  .test {
    display: none;
  }

  @media (min-width: 700px) {
    img {
      width: 14em;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 15em;
    }

    div {
      display: flex;
      position: relative;
      right: 35%;
    }

    .test {
      display: flex;
      width: 70px;
      margin: 0;
    }
  }

  /*@media (min-width: 320px) {
    button {
      display: none;
    }
  }*/
`;
