import {
  StyledMain,
  StyledUl,
  StyledButton,
  StyledDiv,
  StyledForm,
} from "./style";
import Header from "../../components/Header";
import robotLogo from "../../assets/imgs/bot.png";
import { useState } from "react";
import ModalBase from "../../components/ModalBase";
import { MdClose } from "react-icons/md";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { requestFormSchema } from "../../validations/requestsForm.validations";

interface IForm {
  formSubmit: SubmitHandler<FieldValues>;
}

interface SubmitFunction {
  id?: string;
  qtd?: string;
}

const DashboardAccount = ({ formSubmit }: IForm) => {
  const [isOpenModalRequests, setIsOpenModalRequests] = useState(false);
  const [productId, setProductId] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFunction>({
    resolver: yupResolver(requestFormSchema),
  });

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
              <StyledButton
                onClick={() => {
                  setProductId(prod.id);
                  setIsOpenModalRequests(true);
                }}
              >
                Fazer Pedido
              </StyledButton>
            </li>
          ))}
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
                  {...register("id")}
                  placeholder={productId as unknown as string}
                  disabled
                />
                <label htmlFor="description">Digite a Quantidade</label>
                <input
                  type="text"
                  {...register("qtd")}
                  placeholder="Digite a Quantidade"
                />
                <span>{errors.qtd?.message}</span>
                <button>Enviar Pedido</button>
              </StyledForm>
            </StyledDiv>
          </ModalBase>
        ) : null}
      </StyledMain>
    </>
  );
};

export default DashboardAccount;
