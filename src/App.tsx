import React from "react";

function App() {
  return (
    <>
      <button
        onClick={() => {
          alert("Exemplo inicializado com sucesso!");
        }}
      >
        Clique!
      </button>
      <p>Clique no botão e veja a mágica acontecer!</p>
    </>
  );
}

export default App;
