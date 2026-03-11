import React from "react";

function App() {

  const divVermelha = {
    backgroundColor: "red",
    width: "700px",
    padding: "0px",
    margin: "20px auto" // centraliza o bloco
  };

  const divVerde = {
    backgroundColor: "green",
    width: "700px",
    padding: "25px",
    margin: "20px auto" // centraliza o bloco
  };

  return (
    <div>
      <div style={divVermelha}>
        Div vermelha
      </div>

      <div style={divVerde}>
        Div verde
      </div>
    </div>
  );
}

export default App;