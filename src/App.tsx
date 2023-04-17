import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from './Pages';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <LoginPage />} />
      <Route path="/" element={ <Navigate to="/login" /> } />
    </Routes>
  );
}

export default App;
