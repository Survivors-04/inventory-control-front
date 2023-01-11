import { Container } from "./style";
import Header from "../../components/Header";
import Orders from "../../components/Orders";
import AnimationPages from "../../components/AnimationPages";

const OrdersAccount = () => {
  return (
    <AnimationPages>
      <Container>
        <Header />
        <Orders />
      </Container>
    </AnimationPages>
  );
};

export default OrdersAccount;
