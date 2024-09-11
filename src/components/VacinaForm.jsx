import React, { useState } from 'react';
import VacinaService from '../services/VacinaService';

const VacinaForm = () => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('');

  const saveVacina = (e) => {
    e.preventDefault();
    const vacina = { nome, descricao, status };

    VacinaService.createVacina(vacina).then(() => {
      setNome('');
      setDescricao('');
      setStatus('');
    });
  };

  return (
    <div>
      <h2>Adicionar Vacina</h2>
      <form onSubmit={saveVacina}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>Descrição</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
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

export default VacinaForm;
