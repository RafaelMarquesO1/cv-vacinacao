import React from 'react';
import '../styles/TelaPrincipal.css';
import VaciniciFavicon from '../assets/img/favicon-vacinicigreen.svg'

function TelaPrincipal() {
  return (
    <div className="main-container">
      <div className="sidebar">
        <div className="logo">
          <img src={VaciniciFavicon} alt="Logo" />
        </div>
        <div className="greeting">
          <p>Bom dia,</p>
          <strong>{'Admin!'}</strong>
        </div>
        <nav className="menu">
          <ul>
            <li>Consultar Pacientes</li>
            <li>Consultar Funcionários</li>
            <li>Consultar Campanhas</li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <h1>Clique em uma opção para</h1>
        <h2>EXIBIR</h2>
      </div>
    </div>
  );
}

export default TelaPrincipal;