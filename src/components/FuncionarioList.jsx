import React, { useEffect, useState } from 'react';
import FuncionarioService from '../services/FuncionarioService';

const FuncionarioList = () => {
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    FuncionarioService.getFuncionarios().then((response) => {
      setFuncionarios(response.data);
    });
  }, []);

  const deleteFuncionario = (id) => {
    FuncionarioService.deleteFuncionario(id).then(() => {
      setFuncionarios(funcionarios.filter((funcionario) => funcionario.id !== id));
    });
  };

  return (
    <div>
      <h2>Lista de Funcionários</h2>
      <ul>
        {funcionarios.map((funcionario) => (
          <li key={funcionario.id}>
            {funcionario.nome} - {funcionario.status}
            <button onClick={() => deleteFuncionario(funcionario.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FuncionarioList;