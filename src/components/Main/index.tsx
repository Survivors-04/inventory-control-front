import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import robotLogo from "../../assets/imgs/bot.png";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
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
  amount?: number;
  category?: string;
}

export interface IProducts {
  id: string;
  name: string;
  description: string;
  price: string;
  amount: number;
  category: string;
  account_id: number;
}

const Main = ({ formSubmit }: IForm) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productsList, setProductsList] = useState<IProducts[]>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    api.get("api/products/").then((res) => {
      setProductsList(res.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFunction>({
    resolver: yupResolver(productFormSchema),
  });

  return (
    <StyledMain>
      <section>
        <img src={robotLogo} alt="robotImage" />

        <p>Olá, {user.username}</p>
      </section>

      <StyledUl>
        <div>
          <span>Produtos</span>
          {productsList.length > 0 ? (
            <input type="text" placeholder="Pesquisar produto" />
          ) : null}
          <button
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            +
          </button>
        </div>

        {productsList.length > 0 ? (
          productsList.map((prod) => (
            <li key={prod.id}>
              <span>Nome: {prod.name}</span>
              <span>Descrição: {prod.description}</span>
              <span>Preço: {prod.price}</span>
              <span>Categoria: {prod.category}</span>
              <span>Quantidade: {prod.amount}</span>
              <span>Registrado por: {prod.account_id}</span>
            </li>
          ))
        ) : (
          <p>Não há produtos cadastrados</p>
        )}
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

              <label htmlFor="amount">Quantidade</label>
              <input
                type="number"
                {...register("amount")}
                placeholder="Digite a Quantidade"
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
