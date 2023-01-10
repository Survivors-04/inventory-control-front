import * as yup from "yup";

export const requestFormSchema = yup.object().shape({
  amount: yup.string().required("Quantidade obrigatória!"),
});
