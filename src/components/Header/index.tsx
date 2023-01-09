import {
  ContainerHeader,
  StyledHeader,
  ModalHeaderStyled,
  StyleLogoHeader,
} from "./style";
import logoHeader from "../../../src/assets/imgs/Inventory control.png";
import logoCaixaHeader from "../../../src/assets/imgs/caixa.png";
import { useState } from "react";
import Button from "../Button";
import ModalBase from "../ModalBase";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

const Header = () => {
  const [isLogged] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);
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
              <Link to="/">Produtos</Link>
              <Link to="/dashboard-account">Pedidos</Link>
              <Button>Sair</Button>
            </ModalHeaderStyled>
          </ModalBase>
        ) : (
          <button onClick={() => setIsOpenModal(true)}>
            <GiHamburgerMenu />
          </button>
        )}

        {isLogged ? (
          <nav>
            <Link to="/">Produtos</Link>
            <Link to="/dashboard-account">Pedidos</Link>
            <Button>Sair</Button>
          </nav>
        ) : null}
      </StyledHeader>
    </ContainerHeader>
  );
};

export default Header;
