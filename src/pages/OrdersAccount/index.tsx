import { Container } from "./style";
import Header from "../../components/Header";
import Orders from "../../components/Orders";

const OrdersAccount = () => {
  return (
    <Container>
      <Header />
      <Orders formSubmit={() => {}} />
    </Container>
  );
};

export default OrdersAccount;
