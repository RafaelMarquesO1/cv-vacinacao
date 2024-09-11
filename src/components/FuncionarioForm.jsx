import React, { useState } from 'react';
import FuncionarioService from '../services/FuncionarioService';

const FuncionarioForm = () => {
  const [nome, setNome] = useState('');
  const [status, setStatus] = useState('');

  const saveFuncionario = (e) => {
    e.preventDefault();
    const funcionario = { nome, status };

    FuncionarioService.createFuncionario(funcionario).then(() => {
      setNome('');
      setStatus('');
    });
  };

  return (
    <div>
      <h2>Adicionar Funcionário</h2>
      <form onSubmit={saveFuncionario}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Status</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
};

export default FuncionarioForm;
