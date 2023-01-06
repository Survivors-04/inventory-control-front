import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import robotLogo from "../../assets/imgs/bot.png";
import { productFormSchema } from "../../validations/productForm.validations";
import ModalBase from "../ModalBase";
import { StyledDiv, StyledForm, StyledMain, StyledUl } from "./style";

interface IForm {
  formSubmit: SubmitHandler<FieldValues>;
}

interface SubmitFunction {
  name?: string;
  description?: string;
  price?: string;
  amount?: string;
  category?: string;
}

const Main = ({ formSubmit }: IForm) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFunction>({
    resolver: yupResolver(productFormSchema),
  });

  const manager = {
    name: "Manager",
  };

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
    <StyledMain>
      <section>
        <img src={robotLogo} alt="robotImage" />

        <p>Olá, {manager.name}</p>
      </section>

      <StyledUl>
        <div>
          <span>Produtos</span>
          <input type="text" placeholder="Pesquisar produto" />
          <button
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            +
          </button>
        </div>

        {products.map((prod) => (
          <li key={prod.id}>
            <span>Nome: {prod.name}</span>
            <span>Descrição: {prod.description}</span>
            <span>Preço: {prod.price}</span>
            <span>Categoria: {prod.category}</span>
            <span>Registrado por: {prod.manager}</span>
          </li>
        ))}
      </StyledUl>

      {isOpenModal ? (
        <ModalBase setIs={setIsOpenModal}>
          <StyledDiv>
            <div>
              <p>Cadastrar Produto</p>
              <button onClick={() => setIsOpenModal(false)}>
                <MdClose />
              </button>
            </div>

            <StyledForm onSubmit={handleSubmit(formSubmit)}>
              <label htmlFor="input">Nome</label>
              <input
                type="text"
                {...register("name")}
                placeholder="Digite o nome do produto"
              />
              <span>{errors.name?.message}</span>

              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                {...register("description")}
                placeholder="Digite a descrição"
              />
              <span>{errors.description?.message}</span>

              <label htmlFor="price">Preço</label>
              <input
                type="text"
                {...register("price")}
                placeholder="Digite o preço"
              />
              <span>{errors.price?.message}</span>

              <label htmlFor="amount">Amount</label>
              <input
                type="text"
                {...register("amount")}
                placeholder="Digite o amount"
              />
              <span>{errors.amount?.message}</span>

              <label htmlFor="select">Selecionar Categoria</label>
              <select id="" {...register("category")}>
                <option value="Iniciante">Camisetas</option>
                <option value="Intermediário">Calças</option>
                <option value="Avançado">Sapato</option>
              </select>

              <button>Cadastrar Produto</button>
            </StyledForm>
          </StyledDiv>
        </ModalBase>
      ) : null}
    </StyledMain>
  );
};

export default Main;
