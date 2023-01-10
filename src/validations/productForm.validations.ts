import * as yup from "yup";

export const productFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  description: yup.string().required("Descrição obrigatória!"),
  price: yup.string().required("Preço obrigatório!"),
  amount: yup.number().required("Montante obrigatório!"),
});
