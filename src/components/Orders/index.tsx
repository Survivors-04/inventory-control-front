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

const Orders = ({ formSubmit }: IForm) => {
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
      order_id: 1,
      order_account_name: "Solicitante",
      order_created_at: "Data pedido",
      order_products: "Produtos pedidos",
      order_amount: "Quantidade produtos",
      order_total_price: "Preco total pedido",
      order_is_active: "Status",
      order_sent_at: "Data envio",
      order_is_sent: "Enviado",
      order_name_dispatcher: "Enviado por"
    },
    {
      order_id: 2,
      order_account_name: "Solicitante2",
      order_created_at: "Data pedido2",
      order_products: "Produtos pedidos2",
      order_amount: "Quantidade produtos2",
      order_total_price: "Preco total pedido2",
      order_is_active: "Status2",
      order_sent_at: "Data envio2",
      order_is_sent: "Enviado2",
      order_name_dispatcher: "Enviado por2"
    
    },
    {
      order_id: 3,
      order_account_name: "Solicitante3",
      order_created_at: "Data pedido3",
      order_products: "Produtos pedidos3",
      order_amount: "Quantidade produtos3",
      order_total_price: "Preco total pedido3",
      order_is_active: "Status3",
      order_sent_at: "Data envio3",
      order_is_sent: "Enviado3",
      order_name_dispatcher: "Enviado por"
    
    },
  ];

  return (
    <StyledMain>
      <section>
        <img src={robotLogo} alt="robotImage" />

        <p>teste, {manager.name}</p>
      </section>

      <StyledUl>
        <div>
          <span>Pedidos</span>
          <input type="text" placeholder="Pesquisar produto" />
          {/* <button
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            +
          </button> */}
        </div>

        {products.map((prod) => (
          <li key={prod.order_id}>
            <span>Solicitante: {prod.order_account_name}</span>
            <span>Data do pedido: {prod.order_created_at}</span>
            <span>Produtos pedidos: {prod.order_products}</span>
            <span>Quantidade produtos: {prod.order_amount}</span>
            <span>Preco total pedido: {prod.order_total_price}</span>
            <span>Status: {prod.order_is_active}</span>
            <span>Data envio: {prod.order_sent_at}</span>
            <span>Enviado {prod.order_is_sent}</span>
            <span>Enviado por {prod.order_name_dispatcher}</span>

          </li>
        ))}
      </StyledUl>

      {/* {isOpenModal ? (
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
      ) : null} */}
    </StyledMain>
  );
};

export default Orders;
