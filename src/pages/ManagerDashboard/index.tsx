import AnimationPages from "../../components/AnimationPages";
import Header from "../../components/Header";
import Orders from "../../components/Orders";

const ManagerDashboard = () => {
  return (
    <AnimationPages>
      <Header />
      <Orders />
    </AnimationPages>
  );
};

export default ManagerDashboard;
