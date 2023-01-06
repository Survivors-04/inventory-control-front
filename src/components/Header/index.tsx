import { ContainerHeader, StyledHeader, ModalHeaderStyled } from "./style";
import logoHeader from "../../../src/assets/imgs/Inventory control.png";
import logoCaixaHeader from "../../../src/assets/imgs/caixa.png";
import { useState } from "react";
import Button from "../Button";
import ModalBase from "../ModalBase";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <div>
          <img src={logoHeader} alt="imageInventoryControl" />
          <img src={logoCaixaHeader} alt="boxImage" />
        </div>
        {isOpenModal ? (
          <ModalBase
            setIs={setIsOpenModal}
            heigth="500px"
            width="250px"
            justifyContent="center"
            alignItems="center"
          >
            <ModalHeaderStyled>
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
