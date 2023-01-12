import Form, { SubmitFunction } from "../../components/Form";
import Header from "../../components/Header";
import storageLogo from "../../../src/assets/imgs/caixas.png";
import { StyledDiv } from "./style";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import jwtDecode from "jwt-decode";
import AnimationPages from "../../components/AnimationPages";
import { toastError } from "../../components/ToastfyConfig";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const { setIsLogged, setUser } = useContext(UserContext);

  const onSubmitFunction = (data: SubmitFunction) => {
    api
      .post("api/accounts/login/", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        window.localStorage.clear();
        window.localStorage.setItem("@TOKEN", res.data.access);
        const token = localStorage.getItem("@TOKEN") as string;
        const decoded = jwtDecode(token);
        const { user_id }: any = decoded;
        window.localStorage.setItem("@USERID", user_id);
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setIsLogged(true);

        api
          .get(`api/accounts/${user_id}/`)
          .then((res) => {
            setUser(res.data);
            if (res.data.is_superuser === false) {
              navigate("/dashboard-account", { replace: true });
            } else if (res.data.is_superuser === true) {
              navigate("/dashboard-manager", { replace: true });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        toastError("Email ou senha incorreto(s)");
        console.log(err);
      });
  };

  return (
    <AnimationPages>
      <Header />
      <StyledDiv>
        <img src={storageLogo} alt="storageImage" />
        <Form accountSubmit={onSubmitFunction} />
      </StyledDiv>
    </AnimationPages>
  );
};

export default Login;
