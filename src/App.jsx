import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import TelaPrincipal from "./components/TelaPrincipal"
import ConsultarPacientes from "./components/ConsultarPacientes";
import ConsultarFuncionarios from "./components/ConsultarFuncionarios";
import ConsultarCampanhas from "./components/ConsultarCampanhas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/consultar-funcionarios" element={<ConsultarFuncionarios />} />
        <Route path="/tela-principal" element={<TelaPrincipal />} />
        <Route path="/consultar-pacientes" element={<ConsultarPacientes />} />
        <Route path='/consultar-campanhas' element={<ConsultarCampanhas />} />
      </Routes>
    </Router>
  );
}

export default App;