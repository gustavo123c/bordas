import React from "react";

function App() {

  const estiloPagina = {
    height: "100vh",
    margin: "0",
    backgroundImage: "url('imagem.jpg')", 
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  };

  const estiloH1 = {
    backgroundColor: "blue",   
    border: "2px solid black", 
    padding: "10px",
    width: "fit-content",
    color: "white"
  };

  return (
    <div style={estiloPagina}>
      <h1 style={estiloH1}>Primeiro exercício de CSS</h1>
    </div>
  );
}

export default App;