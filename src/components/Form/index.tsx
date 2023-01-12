import { StyledForm } from "./style";
import { loginSchema } from "../../validations/login.validations";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IForm {
  accountSubmit: SubmitHandler<FieldValues>;
}

export interface SubmitFunction {
  email?: string;
  password?: string;
}

const Form = ({ accountSubmit }: IForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitFunction>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(accountSubmit)}>
      <p>Faça login com o seu email e senha passados pela central.</p>
      <span>Login</span>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="Digite seu Email"
          {...register("email")}
        />
        <span>{errors.email?.message}</span>

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Digite sua Senha"
          {...register("password")}
        />
        <span>{errors.password?.message}</span>
      </div>

      <button>Entrar</button>
    </StyledForm>
  );
};

export default Form;
