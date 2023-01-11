import { useContext, useEffect, useState } from "react";
import robotLogo from "../../assets/imgs/bot.png";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
import { IProducts } from "../Main";
import { StyledMain, StyledUl } from "./style";

interface IOrders {
  id: string;
  created_at: Date;
  is_active: boolean;
  amount: number;
  sent_at: Date;
  is_sent: boolean;
  account_id: number;
  total_price: number;
  product: IProducts[];
}

const Orders = () => {
  const [orders, setOrders] = useState<IOrders[]>([]);
  const { user } = useContext(UserContext);
  const [userInput, setUserInput] = useState("");
  const [ordersFiltered, setOrdersFiltered] = useState<IOrders[]>([]);

  useEffect(() => {
    const filteredInput = (str: string) => {
      let search = str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      const filter = orders.filter((order) => {
        let id = order.id
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        if (id.includes(search)) {
          return order;
        }
      });

      setOrdersFiltered(filter);
    };

    filteredInput(userInput);
  }, [userInput, orders]);

  useEffect(() => {
    api
      .get("api/orders/")
      .then((res) => {
        console.log(res);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [orders]);

  return (
    <StyledMain>
      <section>
        <img src={robotLogo} alt="robotImage" />

        <p>teste, {user.username}</p>
      </section>

      <StyledUl>
        <div>
          <span>Pedidos</span>
          <input
            type="text"
            placeholder="Pesquisar produto"
            value={userInput}
            onChange={(event) => {
              setUserInput(event.target.value);
            }}
          />
        </div>

        {userInput.trim().length === 0
          ? orders.map((prod) => (
              <li key={prod.id}>
                <span>Pedido no Número: {prod.id}</span>
                <span>Solicitante: {prod.account_id}</span>
                <span>Data do pedido: {`${prod.created_at}`}</span>
                <span>Produtos pedidos: {`${prod.product[0]}`}</span>
                <span>Quantidade produtos: {prod.amount}</span>
                <span>Preco total pedido: {prod.total_price}</span>
                <span>Data envio: {`${prod.sent_at}`}</span>
                <span>Enviado {prod.is_sent}</span>
                <span>Enviado por: Em desenvolvimento</span>
              </li>
            ))
          : ordersFiltered.map((prod) => (
              <li key={prod.id}>
                <span>Pedido no Número: {prod.id}</span>
                <span>Solicitante: {prod.account_id}</span>
                <span>Data do pedido: {`${prod.created_at}`}</span>
                <span>Produtos pedidos: {`${prod.product[0]}`}</span>
                <span>Quantidade produtos: {prod.amount}</span>
                <span>Preco total pedido: {prod.total_price}</span>
                <span>Data envio: {`${prod.sent_at}`}</span>
                <span>Enviado {prod.is_sent}</span>
                <span>Enviado por: Em desenvolvimento</span>
              </li>
            ))}

        {ordersFiltered.length === 0 ? (
          <p>Não há pedidos com as informações fornecidas</p>
        ) : null}

        {orders.length === 0 ? <p>Não há pedidos cadastrados</p> : null}
      </StyledUl>
    </StyledMain>
  );
};

export default Orders;
