import React, { useEffect, useState } from 'react';
import VacinaService from '../services/VacinaService';

const VacinaList = () => {
  const [vacinas, setVacinas] = useState([]);

  useEffect(() => {
    VacinaService.getVacinas().then((response) => {
      setVacinas(response.data);
    });
  }, []);

  const deleteVacina = (id) => {
    VacinaService.deleteVacina(id).then(() => {
      setVacinas(vacinas.filter((vacina) => vacina.id !== id));
    });
  };

  return (
    <div>
      <h2>Lista de Vacinas</h2>
      <ul>
        {vacinas.map((vacina) => (
          <li key={vacina.id}>
            {vacina.nome} - {vacina.status}
            <button onClick={() => deleteVacina(vacina.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VacinaList;
