import React, { useEffect, useState } from 'react';
import '../styles/ConsultarFuncionarios.css'; // Adicione o CSS correspondente
import api from '../services/api';
import VaciniciFavicon from '../assets/img/favicon-vacinicigreen.svg';

function ConsultarFuncionarios() {
  const [funcionarios, setFuncionarios] = useState([]);
  const [novoFuncionario, setNovoFuncionario] = useState({ nome: '', email: '', senha: '' });
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    async function fetchFuncionarios() {
      try {
        const response = await api.get('/api/v1/funcionarios');
        setFuncionarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar funcionários:', error);
      }
    }
    fetchFuncionarios();
  }, []);

  const adicionarFuncionario = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/v1/funcionarios', novoFuncionario);
      setFuncionarios([...funcionarios, novoFuncionario]);
      setNovoFuncionario({ nome: '', email: '', senha: '' });
      setMostrarFormulario(false);
    } catch (error) {
      console.error('Erro ao adicionar funcionário:', error);
    }
  };

  const deletarFuncionario = async (id) => {
    try {
      await api.delete(`/api/v1/funcionarios/${id}`);
      setFuncionarios(funcionarios.filter((funcionario) => funcionario.id !== id));
    } catch (error) {
      console.error('Erro ao deletar funcionário:', error);
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
            <li>Consultar Funcionários</li>
            <li>Consultar Pacientes</li>
            <li>Consultar Campanhas</li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <h1>Funcionários Cadastrados</h1>
        <button onClick={() => setMostrarFormulario(true)}>Adicionar Novo Funcionário</button>

        {mostrarFormulario && (
          <form onSubmit={adicionarFuncionario} className="login-box">
            <input
              type="text"
              placeholder="Nome"
              value={novoFuncionario.nome}
              onChange={(e) => setNovoFuncionario({ ...novoFuncionario, nome: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={novoFuncionario.email}
              onChange={(e) => setNovoFuncionario({ ...novoFuncionario, email: e.target.value })}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={novoFuncionario.senha}
              onChange={(e) => setNovoFuncionario({ ...novoFuncionario, senha: e.target.value })}
              required
            />
            <button type="submit">Adicionar</button>
          </form>
        )}

        {funcionarios.length > 0 ? (
          <div className="funcionarios-list">
            {funcionarios.map((funcionario, index) => (
              <div key={index} className="funcionario-card">
                <p><strong>Nome:</strong> {funcionario.nome}</p>
                <p><strong>Email:</strong> {funcionario.email}</p>
                <p><strong>Senha:</strong> {funcionario.senha}</p>
                <button onClick={() => deletarFuncionario(funcionario.id)}>Deletar</button>
              </div>
            ))}
          </div>
        ) : (
          <p>Nenhum funcionário cadastrado. Cadastre um novo funcionário!</p>
        )}
      </div>
    </div>
  );
}

export default ConsultarFuncionarios;
