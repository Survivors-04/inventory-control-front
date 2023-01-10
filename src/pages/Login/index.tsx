import Form, { SubmitFunction } from "../../components/Form";
import Header from "../../components/Header";
import storageLogo from "../../../src/assets/imgs/caixas.png";
import { StyledDiv } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import ApiLogin from "../../services/apiLogin";
import api from "../../services/api";
import jwtDecode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const { user, setIsLogged } = useContext(UserContext);

  const onSubmitFunction = (data: SubmitFunction) => {
    ApiLogin(data)
      .then((res) => {
        window.localStorage.setItem("@TOKEN", res.data.access);
        const token = localStorage.getItem("@TOKEN") as string;
        const decoded = jwtDecode(token);
        const { user_id }: any = decoded;
        window.localStorage.setItem("@USERID", user_id);

        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        setIsLogged(true);
        if (user.is_superuser === false) {
          navigate("/dashboard-account", { replace: true });
        } else if (user.is_superuser === true) {
          navigate("/dashboard-manager", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Header />

      <StyledDiv>
        <img src={storageLogo} alt="storageImage" />
        <Form accountSubmit={onSubmitFunction} />
      </StyledDiv>
    </>
  );
};

export default Login;
