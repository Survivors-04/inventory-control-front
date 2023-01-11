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
  }, []);

  return (
    <StyledMain>
      <section>
        <img src={robotLogo} alt="robotImage" />

        <p>teste, {user.username}</p>
      </section>

      <StyledUl>
        <div>
          <span>Pedidos</span>
          <input type="text" placeholder="Pesquisar produto" />
          {user.is_superuser ? null : <button onClick={() => {}}>+</button>}
        </div>

        {orders.length > 0 ? (
          orders.map((prod) => (
            <li key={prod.id}>
              <span>Solicitante: {prod.account_id}</span>
              <span>Data do pedido: {`${prod.created_at}`}</span>
              <span>Produtos pedidos: {`${prod.product[0]}`}</span>
              <span>Quantidade produtos: {prod.amount}</span>
              <span>Preço total do pedido: {prod.total_price}</span>
              <span>
                Data envio: {prod.sent_at ? `${prod.sent_at}` : "Não enviado"}
              </span>
              <span>Enviado: {prod.is_sent ? "Sim" : "Não"}</span>
              <span>Enviado por: Em desenvolvimento</span>
            </li>
          ))
        ) : (
          <p>Não há pedidos cadastrados</p>
        )}
      </StyledUl>
    </StyledMain>
  );
};

export default Orders;
