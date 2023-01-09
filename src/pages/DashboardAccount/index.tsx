import { StyledMain, StyledUl, StyledButton } from "./style";
import Header from "../../components/Header";
import robotLogo from "../../assets/imgs/bot.png";

const DashboardAccount = () => {
  const products = [
    {
      id: 1,
      name: "Camisa preta",
      description: "camisa preta de qualidade da nike",
      price: 15.99,
      category: "Camisetas",
      manager: "enrique.barbosa@gmail.com",
    },
    {
      id: 2,
      name: "Camisa preta",
      description: "camisa preta de qualidade da nike",
      price: 15.99,
      category: "Camisetas",
      manager: "enrique.barbosa@gmail.com",
    },
    {
      id: 3,
      name: "Camisa preta",
      description: "camisa preta de qualidade da nike",
      price: 15.99,
      category: "Camisetas",
      manager: "enrique.barbosa@gmail.com",
    },
  ];

  return (
    <>
      <Header />
      <StyledMain>
        <section>
          <img src={robotLogo} alt="robotImage" />

          <p>Olá, manager.name</p>
        </section>

        <StyledUl>
          <div>
            <span>Produtos</span>
            <input type="text" placeholder="Pesquisar produto" />
          </div>

          {products.map((prod) => (
            <li key={prod.id}>
              <span>Nome: {prod.name}</span>
              <span>Descrição: {prod.description}</span>
              <span>Preço: {prod.price}</span>
              <span>Categoria: {prod.category}</span>
              <span>Registrado por: {prod.manager}</span>
              <StyledButton>Fazer Pedido</StyledButton>
            </li>
          ))}
        </StyledUl>
      </StyledMain>
    </>
  );
};

export default DashboardAccount;
