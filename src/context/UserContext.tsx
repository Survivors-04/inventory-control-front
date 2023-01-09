import {
  createContext,
  Dispatch,
  //MouseEventHandler,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import api from "../services/api";

interface IUserProvider {
  children: ReactNode;
}
export interface IUserContext {
  user: iUser;
  setUser: React.Dispatch<React.SetStateAction<iUser>>;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
  isLogged: boolean;
}

export interface iUser {
  id: number;
  gold: number;
  email: string;
  name: string;
  password: string;
  dateRoll: number;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<iUser>({} as iUser);
  const [isLogged, setIsLogged] = useState(false);

  //Exemplo de autenticação
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN");
      const userID = localStorage.getItem("@USERID");

      if (token) {
        try {
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          setIsLogged(true);

          const { data } = await api.get(`/Users/${userID}`);

          setUser(data);
        } catch (err) {
          console.log(err);
        }
      }
    };

    loadUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, isLogged, setUser, setIsLogged }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
