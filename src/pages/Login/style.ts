import styled from "styled-components";

export const StyledDiv = styled.div`
  img {
    display: none;
  }

  @media (min-width: 1024px) {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    margin-top: 70px;

    form {
      margin: 0px;
    }

    img {
      display: flex;
      width: 300px;
      height: 300px;
    }
  }

  @media (min-width: 1440px) {
    margin-top: 200px;
  }
`;
