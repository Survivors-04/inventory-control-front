import * as yup from "yup";

export const requestFormSchema = yup.object().shape({
  qtd: yup.string().required("Quantidade obrigatória!"),
});
