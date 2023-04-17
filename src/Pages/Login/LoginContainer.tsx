import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import LoginPresenter from './LoginPresenter';

export default function LoginContainer() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: Implement login logic
    // For now, just redirect to the home page
    return <Navigate to="/dashboard" />;
  };

  return (
    <LoginPresenter
      handleLogin={handleLogin}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
    />
  );
}