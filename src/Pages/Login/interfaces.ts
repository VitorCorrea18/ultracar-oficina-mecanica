export interface ILoginPresenterProps {
  handleLogin: (email: string, password: string) => void;
  email: string;
  setEmail: (name: string) => void;
  password: string;
  setPassword: (password: string) => void;
  loginFailed: boolean;
};