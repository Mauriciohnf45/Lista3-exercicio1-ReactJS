import React from 'react';
import NameList from './NameList'; // Verifique o caminho do arquivo

function App() {
  const names = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];

  return (
    <div>
      <h1>Lista Dinâmica de Nomes</h1>
      <NameList names={names} />
    </div>
  );
}

export default App;
