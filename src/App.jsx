import React from 'react';
import AppRoutes from './routes';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Gestão de Carteirinhas de Vacinação</h1>
      </header>
      <AppRoutes />
    </div>
  );
};

export default App;
