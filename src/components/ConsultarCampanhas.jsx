import React, { useEffect, useState } from 'react';
import '../styles/ConsultarCampanhas.css'; // Adicione o CSS correspondente
import api from '../services/api';
import VaciniciFavicon from '../assets/img/favicon-vacinicigreen.svg';

function ConsultarCampanhas() {
  const [campanhas, setCampanhas] = useState([]);
  const [novaCampanha, setNovaCampanha] = useState({
    nomeCampanha: '',
    descricao: '',
    dataInicio: '',
    dataFim: ''
  });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  // Adiciona token ao cabeçalho
  const token = localStorage.getItem('token');

  // Função para buscar campanhas
  useEffect(() => {
    async function fetchCampanhas() {
      try {
        const response = await api.get('/api/campanhas', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data) {
          setCampanhas(response.data);
        } else {
          console.error('Dados de campanha não encontrados');
        }
      } catch (error) {
        console.error('Erro ao buscar campanhas:', error);
      }
    }
    fetchCampanhas();
  }, [token]);

  // Adicionar Campanhas
  const adicionarCampanha = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nomeCampanha', novaCampanha.nomeCampanha);
    formData.append('descricao', novaCampanha.descricao);
    formData.append('dataInicio', novaCampanha.dataInicio);
    formData.append('dataFim', novaCampanha.dataFim);
    try {
      const response = await api.post('/api/campanhas', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data) {
        setCampanhas([...campanhas, response.data]);
        setNovaCampanha({ nomeCampanha: '', descricao: '', dataInicio: '', dataFim: '' });
        setMostrarFormulario(false); // Fecha o formulário após o sucesso
      }
    } catch (error) {
      console.error('Erro ao adicionar campanha:', error);
    }
  };

  // Função para deletar uma campanha
  const deletarCampanha = async (id) => {
    try {
      await api.delete(`/api/campanhas/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCampanhas(campanhas.filter((campanha) => campanha.id !== id));
    } catch (error) {
      console.error('Erro ao deletar campanha:', error);
    }
  };

  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="logo">
          <img src={VaciniciFavicon} alt="Logo" />
        </div>
        <div className="greeting">
          <p>Bom dia,</p>
          <strong>{'Usuário!'}</strong>
        </div>
        <nav className="menu">
          <ul>
            <li>Consultar Campanhas</li>
            <li>Consultar Funcionários</li>
            <li>Consultar Pacientes</li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <h1>Campanhas Cadastradas</h1>
        <button onClick={() => setMostrarFormulario(true)}>Adicionar Nova Campanha</button>

        {mostrarFormulario && (
          <form onSubmit={adicionarCampanha} className="login-box" encType="multipart/form-data">
            <input
              type="text"
              placeholder="Nome da Campanha"
              value={novaCampanha.nomeCampanha}
              onChange={(e) => setNovaCampanha({ ...novaCampanha, nomeCampanha: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Descrição"
              value={novaCampanha.descricao}
              onChange={(e) => setNovaCampanha({ ...novaCampanha, descricao: e.target.value })}
              required
            />
            <input
              type="date"
              value={novaCampanha.dataInicio}
              onChange={(e) => setNovaCampanha({ ...novaCampanha, dataInicio: e.target.value })}
              required
            />
            <input
              type="date"
              value={novaCampanha.dataFim}
              onChange={(e) => setNovaCampanha({ ...novaCampanha, dataFim: e.target.value })}
              required
            />
            <button type="submit">Adicionar</button>
          </form>
        )}

        {campanhas.length > 0 ? (
          <div className="campanhas-list">
            {campanhas.map((campanha, index) => (
              <div key={index} className="campanha-card">
                <p><strong>Nome:</strong> {campanha.nomeCampanha || 'Nome não disponível'}</p>
                <p><strong>Descrição:</strong> {campanha.descricao || 'Descrição não disponível'}</p>
                {campanha.imagemUrl ? (
                  <img
                    src={`http://localhost:8080/${campanha.imagemUrl}`}
                    alt={`Imagem da campanha ${campanha.nomeCampanha}`}
                  />
                ) : (
                  <p>Imagem não disponível</p>
                )}
                <p><strong>Data de Início:</strong> {campanha.dataInicio || 'Data não disponível'}</p>
                <p><strong>Data de Finalização:</strong> {campanha.dataFim || 'Data não disponível'}</p>
                <button onClick={() => deletarCampanha(campanha.id)}>Deletar</button>
              </div>
            ))}
          </div>
        ) : (
          <p>Nenhuma campanha cadastrada. Cadastre uma nova campanha!</p>
        )}
      </div>
    </div>
  );
}

export default ConsultarCampanhas;
