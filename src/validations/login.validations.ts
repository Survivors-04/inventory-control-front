import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("Email Obrigatório!").email("Email inválido"),
  password: yup.string().required("Senha obrigatória!"),
});
