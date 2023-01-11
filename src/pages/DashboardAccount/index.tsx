import {
  StyledMain,
  StyledUl,
  StyledButton,
  StyledDiv,
  StyledForm,
} from "./style";
import Header from "../../components/Header";
import robotLogo from "../../assets/imgs/bot.png";
import { useContext, useEffect, useState } from "react";
import ModalBase from "../../components/ModalBase";
import { MdClose } from "react-icons/md";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { requestFormSchema } from "../../validations/requestsForm.validations";
import { UserContext } from "../../context/UserContext";
import { IProducts } from "../../components/Main";
import api from "../../services/api";
import AnimationPages from "../../components/AnimationPages";

interface SubmitFunction {
  product?: string[];
  amount?: string;
}

const DashboardAccount = () => {
  const [isOpenModalRequests, setIsOpenModalRequests] = useState(false);
  const [productsList, setProductsList] = useState<IProducts[]>([]);
  const [productId, setProductId] = useState("");

  const { user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SubmitFunction>({
    resolver: yupResolver(requestFormSchema),
  });

  useEffect(() => {
    api.get("api/products/").then((res) => {
      setProductsList(res.data);
    });
  }, []);

  const formSubmit = (data: SubmitFunction) => {
    data.product = [productId];
    console.log(data);

    api
      .post("api/orders/", data)
      .then((res) => {
        setIsOpenModalRequests(false);
        setValue("product", []);
        setValue("amount", "");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AnimationPages>
      <Header />
      <StyledMain>
        <section>
          <img src={robotLogo} alt="robotImage" />

          <p>Olá, {user.username}</p>
        </section>

        <StyledUl>
          <div>
            <span>Produtos</span>
            <input type="text" placeholder="Pesquisar produto" />
          </div>

          {productsList.length > 0 ? (
            productsList.map((prod) => (
              <li key={prod.id}>
                <span>Nome: {prod.name}</span>
                <span>Descrição: {prod.description}</span>
                <span>Preço: {prod.price}</span>
                <span>Categoria: {prod.category}</span>
                <span>Quantidade; {prod.amount}</span>
                <StyledButton
                  onClick={() => {
                    setProductId(prod.id);
                    setIsOpenModalRequests(true);
                  }}
                >
                  Fazer Pedido
                </StyledButton>
              </li>
            ))
          ) : (
            <p>Não há produtos cadastrados</p>
          )}
        </StyledUl>

        {isOpenModalRequests ? (
          <ModalBase setIs={setIsOpenModalRequests}>
            <StyledDiv>
              <div>
                <p>Dados do Pedido</p>
                <button onClick={() => setIsOpenModalRequests(false)}>
                  <MdClose />
                </button>
              </div>
              <StyledForm onSubmit={handleSubmit(formSubmit)}>
                <label htmlFor="input">Id do produto</label>
                <input
                  type="text"
                  {...register("product")}
                  placeholder={productId as unknown as string}
                  disabled
                />
                <label htmlFor="description">Digite a Quantidade</label>
                <input
                  type="text"
                  {...register("amount")}
                  placeholder="Digite a Quantidade"
                />
                <span>{errors.amount?.message}</span>
                <button>Enviar Pedido</button>
              </StyledForm>
            </StyledDiv>
          </ModalBase>
        ) : null}
      </StyledMain>
    </AnimationPages>
  );
};

export default DashboardAccount;
