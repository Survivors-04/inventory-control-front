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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { requestFormSchema } from "../../validations/requestsForm.validations";
import { UserContext } from "../../context/UserContext";
import { IProducts } from "../../components/Main";
import api from "../../services/api";

interface IForm {
  formSubmit: SubmitHandler<FieldValues>;
}

interface SubmitFunction {
  id?: string;
  amount?: string;
}

const DashboardAccount = ({ formSubmit }: IForm) => {
  const [isOpenModalRequests, setIsOpenModalRequests] = useState(false);
  const [productsList, setProductsList] = useState<IProducts[]>([]);
  const [productId, setProductId] = useState("");

  const { user } = useContext(UserContext);

  const [userInput, setUserInput] = useState("");
  const [productsFiltered, setProductsFiltered] = useState<IProducts[]>([]);

  useEffect(() => {
    const filteredInput = (str: string) => {
      let search = str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();

      const filter = productsList.filter((prod) => {
        let id = prod.id
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        let name = prod.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        let description = prod.description
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        let price = prod.price
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        let category = prod.category
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
        if (
          id.includes(search) ||
          name.includes(search) ||
          description.includes(search) ||
          price.includes(search) ||
          category.includes(search)
        ) {
          return prod;
        }
      });

      setProductsFiltered(filter);
    };

    filteredInput(userInput);
  }, [userInput, productsList]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFunction>({
    resolver: yupResolver(requestFormSchema),
  });

  useEffect(() => {
    api.get("api/products/").then((res) => {
      setProductsList(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <StyledMain>
        <section>
          <img src={robotLogo} alt="robotImage" />

          <p>Olá, {user.username}</p>
        </section>

        <StyledUl>
          <div>
            <span>Produtos</span>
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
            ? productsList.map((prod) => (
                <li key={prod.id}>
                  <span>Nome: {prod.name}</span>
                  <span>Descrição: {prod.description}</span>
                  <span>Preço: R${prod.price}</span>
                  <span>Categoria: {prod.category}</span>
                  <span>Quantidade: {prod.amount}</span>
                  <span>Registrado por: {prod.account_id}</span>
                </li>
              ))
            : productsFiltered.map((prod) => (
                <li key={prod.id}>
                  <span>Nome: {prod.name}</span>
                  <span>Descrição: {prod.description}</span>
                  <span>Preço: R${prod.price}</span>
                  <span>Categoria: {prod.category}</span>
                  <span>Quantidade: {prod.amount}</span>
                  <span>Registrado por: {prod.account_id}</span>
                </li>
              ))}

          {productsFiltered.length === 0 ? (
            <p>Não há produtos com as informações fornecidas</p>
          ) : null}

          {productsList.length === 0 ? (
            <p>Não há produtos cadastrados</p>
          ) : null}
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
    </>
  );
};

export default DashboardAccount;
