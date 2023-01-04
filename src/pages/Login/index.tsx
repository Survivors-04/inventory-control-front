import Form from "../../components/Form";
import Header from "../../components/Header";
import storageLogo from "../../../src/assets/imgs/caixas.png";
import { StyledDiv } from "./style";

const Login = () => {
  return (
    <>
      <Header />

      <StyledDiv>
        <img src={storageLogo} alt="storageImage" />
        <Form accountSubmit={() => {}} />
      </StyledDiv>
    </>
  );
};

export default Login;
