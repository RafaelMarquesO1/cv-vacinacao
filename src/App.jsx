import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import CadastroVacinas from './components/CadastroVacinas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro-vacinas" element={<CadastroVacinas />} />
      </Routes>
    </Router>
  );
}

export default App;