import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import robotLogo from "../../assets/imgs/bot.png";
import { UserContext } from "../../context/UserContext";
import api from "../../services/api";
import { productFormSchema } from "../../validations/productForm.validations";
import ModalBase from "../ModalBase";
import { toastSuccess } from "../ToastfyConfig";
import { StyledDiv, StyledForm, StyledMain, StyledUl } from "./style";

interface SubmitFunction {
  name?: string;
  description?: string;
  price?: number;
  amount?: number;
  category?: string;
}

export interface IProducts {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  category: ICategories;
}

export interface ICategories {
  id: string;
  name: string;
}

const Main = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [productsList, setProductsList] = useState<IProducts[]>([]);
  const [categoriesList, setCategorieList] = useState<ICategories[]>([]);
  const { user } = useContext(UserContext);

  const updateProductList = () => {
    api.get("api/products/").then((res) => {
      console.log(res.data);
      setProductsList(res.data);
    });
  };

  useEffect(() => {
    updateProductList();

    api.get("api/categories/").then((res) => {
      setCategorieList(res.data);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<SubmitFunction>({
    resolver: yupResolver(productFormSchema),
  });

  const formSubmit = async (data: SubmitFunction) => {
    console.log(data);
    api
      .post("api/products/", data)
      .then((res) => {
        setIsOpenModal(false);
        updateProductList();
        setValue("name", "");
        setValue("description", "");
        setValue("amount", 0);
        setValue("price", 0);
        toastSuccess("Produto criado com sucesso!");
      })
      .catch((err) => console.log(err));
  };

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
        if (
          id.includes(search) ||
          name.includes(search) ||
          description.includes(search)
        ) {
          return prod;
        }
      });

      setProductsFiltered(filter);
    };

    filteredInput(userInput);
  }, [userInput, productsList]);

  return (
    <StyledMain>
      <section>
        <img src={robotLogo} alt="robotImage" />

        <p>Ol??, {user.username}</p>
      </section>

      <StyledUl>
        <div>
          <span>Produtos</span>
          {productsList.length > 0 ? (
            <input
              type="text"
              placeholder="Pesquisar produto"
              value={userInput}
              onChange={(event) => {
                setUserInput(event.target.value);
              }}
            />
          ) : null}
          <button
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
            +
          </button>
        </div>

        {userInput.trim().length === 0
          ? productsList.map((prod) => (
              <li key={prod.id}>
                <span>Nome: {prod.name}</span>
                <span>Descri????o: {prod.description}</span>
                <span>Pre??o: R${prod.price}</span>
                <span>Categoria: {prod.category.name}</span>
                <span>Quantidade: {prod.amount}</span>
              </li>
            ))
          : productsFiltered.map((prod) => (
              <li key={prod.id}>
                <span>Nome: {prod.name}</span>
                <span>Descri????o: {prod.description}</span>
                <span>Pre??o: R$ {prod.price}</span>
                <span>Categoria: {prod.category.name}</span>
                <span>Quantidade: {prod.amount}</span>
              </li>
            ))}

        {productsList.length === 0 ? <p>N??o h?? produtos cadastrados</p> : null}
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

              <label htmlFor="description">Descri????o</label>
              <input
                type="text"
                {...register("description")}
                placeholder="Digite a descri????o"
              />
              <span>{errors.description?.message}</span>

              <label htmlFor="price">Pre??o</label>
              <input
                type="number"
                {...register("price")}
                placeholder="Digite o pre??o"
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
                {categoriesList.length > 0
                  ? categoriesList.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))
                  : null}
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
