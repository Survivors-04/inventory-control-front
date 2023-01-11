import {
  ContainerHeader,
  StyledHeader,
  ModalHeaderStyled,
  StyleLogoHeader,
} from "./style";
import logoHeader from "../../../src/assets/imgs/Inventory control.png";
import logoCaixaHeader from "../../../src/assets/imgs/caixa.png";
import { useContext, useState } from "react";
import Button from "../Button";
import ModalBase from "../ModalBase";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, isLogged, setIsLogged } = useContext(UserContext);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const logout = () => {
    localStorage.clear();

    setIsLogged(false);
    navigate("/", { replace: true });
  };

  return (
    <ContainerHeader>
      <StyledHeader
        logged={isLogged}
        isOpenModal={isOpenModal}
        className="test"
      >
        <StyleLogoHeader>
          <img src={logoHeader} alt="imageInventoryControl" />
          <img src={logoCaixaHeader} alt="boxImage" />
        </StyleLogoHeader>
        {isOpenModal ? (
          <ModalBase
            setIs={setIsOpenModal}
            heigth="100vh"
            width="200px"
            justifyContent="flex-start"
            alignItems="flex-end"
          >
            <ModalHeaderStyled
              as={motion.div}
              key={0}
              initial={{ x: "+100vh", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ y: "-100vw", opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {user.is_superuser ? (
                <>
                  <Link to="/dashboard-manager">Produtos</Link>
                  <Link to="/dashboard-manager/orders">Pedidos</Link>
                </>
              ) : (
                <>
                  <Link to="/dashboard-account">Produtos</Link>
                  <Link to="/dashboard-account/orders">Pedidos</Link>
                </>
              )}
              <Button onClick={logout}>Sair</Button>
            </ModalHeaderStyled>
          </ModalBase>
        ) : (
          <button onClick={() => setIsOpenModal(true)}>
            <GiHamburgerMenu />
          </button>
        )}

        {isLogged ? (
          <nav>
            {user.is_superuser ? (
              <>
                <Link to="/dashboard-manager">Produtos</Link>
                <Link to="/dashboard-manager/orders">Pedidos</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard-account">Produtos</Link>
                <Link to="/dashboard-account/orders">Pedidos</Link>
              </>
            )}
            <Button onClick={logout}>Sair</Button>
          </nav>
        ) : null}
      </StyledHeader>
    </ContainerHeader>
  );
};

export default Header;
