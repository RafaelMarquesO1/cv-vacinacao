import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FuncionarioList from './components/FuncionarioList';
import FuncionarioForm from './components/FuncionarioForm';
import VacinaList from './components/VacinaList';
import VacinaForm from './components/VacinaForm';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/funcionarios" element={<FuncionarioList />} />
      <Route path="/add-funcionario" element={<FuncionarioForm />} />
      <Route path="/vacinas" element={<VacinaList />} />
      <Route path="/add-vacina" element={<VacinaForm />} />
    </Routes>
  </Router>
);

export default AppRoutes;