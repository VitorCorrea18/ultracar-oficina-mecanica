import { Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './Context/AppContext';
import { LoginPage } from './Pages';
import { DashboardPage } from './Pages';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <LoginPage />} />
      <Route path="/" element={ <Navigate to="/login" /> } />
      <Route path="/dashboard" element={ <AppProvider><DashboardPage /></AppProvider> } />
    </Routes>
  );
}

export default App;
