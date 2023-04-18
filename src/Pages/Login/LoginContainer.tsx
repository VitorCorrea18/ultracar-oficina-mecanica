import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginPresenter from './LoginPresenter';
import { loginRequest } from '../../Api/loginRequest';

export default function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLogin = async (email: string, password: string) => {
    const login = await loginRequest(email, password);
    if(login.password === password) {
      Navigate({ to: '/dashboard' })
    } else setLoginFailed(true)
  };
  
  

  return (
    <LoginPresenter
      handleLogin={handleLogin}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      loginFailed={loginFailed}
    />
  );
}