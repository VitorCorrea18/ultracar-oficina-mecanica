export interface ILoginPresenterProps {
  handleLogin: () => void;
  email: string;
  setEmail: (name: string) => void;
  password: string;
  setPassword: (password: string) => void;
};