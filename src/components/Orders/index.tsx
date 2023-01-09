import robotLogo from "../../assets/imgs/bot.png";
import { StyledMain, StyledUl } from "./style";

const Orders = () => {
  const manager = {
    name: "Manager",
  };

  const products = [
    {
      order_id: 1,
      order_account_name: "Solicitante",
      order_created_at: "Data pedido",
      order_products: "Produtos pedidos",
      order_amount: "Quantidade produtos",
      order_total_price: "Preco total pedido",
      order_is_active: "Status",
      order_sent_at: "Data envio",
      order_is_sent: "Enviado",
      order_name_dispatcher: "Enviado por",
    },
    {
      order_id: 2,
      order_account_name: "Solicitante2",
      order_created_at: "Data pedido2",
      order_products: "Produtos pedidos2",
      order_amount: "Quantidade produtos2",
      order_total_price: "Preco total pedido2",
      order_is_active: "Status2",
      order_sent_at: "Data envio2",
      order_is_sent: "Enviado2",
      order_name_dispatcher: "Enviado por2",
    },
    {
      order_id: 3,
      order_account_name: "Solicitante3",
      order_created_at: "Data pedido3",
      order_products: "Produtos pedidos3",
      order_amount: "Quantidade produtos3",
      order_total_price: "Preco total pedido3",
      order_is_active: "Status3",
      order_sent_at: "Data envio3",
      order_is_sent: "Enviado3",
      order_name_dispatcher: "Enviado por",
    },
  ];

  return (
    <StyledMain>
      <section>
        <img src={robotLogo} alt="robotImage" />

        <p>teste, {manager.name}</p>
      </section>

      <StyledUl>
        <div>
          <span>Pedidos</span>
          <input type="text" placeholder="Pesquisar produto" />
        </div>

        {products.map((prod) => (
          <li key={prod.order_id}>
            <span>Solicitante: {prod.order_account_name}</span>
            <span>Data do pedido: {prod.order_created_at}</span>
            <span>Produtos pedidos: {prod.order_products}</span>
            <span>Quantidade produtos: {prod.order_amount}</span>
            <span>Preco total pedido: {prod.order_total_price}</span>
            <span>Status: {prod.order_is_active}</span>
            <span>Data envio: {prod.order_sent_at}</span>
            <span>Enviado {prod.order_is_sent}</span>
            <span>Enviado por {prod.order_name_dispatcher}</span>
          </li>
        ))}
      </StyledUl>
    </StyledMain>
  );
};

export default Orders;
