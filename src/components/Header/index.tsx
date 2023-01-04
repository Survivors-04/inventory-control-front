import { StyledHeader } from "./style";
import logoHeader from "../../../src/assets/imgs/Inventory control.png";
import logoCaixaHeader from "../../../src/assets/imgs/caixa.png";
import { useState } from "react";
import Button from "../Button";

const Header = () => {
  const [isLogged] = useState(false);
  return (
    <StyledHeader>
      <div>
        <img src={logoHeader} alt="imageInventoryControl" />
        <img src={logoCaixaHeader} alt="boxImage" className="test" />
      </div>

      {isLogged ? <Button>Sair</Button> : null}
    </StyledHeader>
  );
};

export default Header;
