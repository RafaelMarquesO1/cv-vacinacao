import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CadastroFuncionarios from "./components/CadastroFuncionarios";
import CadastroVacinas from './components/CadastroVacinas';
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro-funcionarios" element={<CadastroFuncionarios />} />
        <Route path="/cadastro-vacinas" element={<CadastroVacinas />} />
      </Routes>
    </Router>
  );
}

export default App;