export default function Home() {

  const estiloPagina = {
    padding: "40px",
    fontFamily: "Arial"
  };

  const estiloTitulo = {
    marginBottom: "20px"
  };

  const estiloLista = {
    listStyle: "none",
    padding: "0"
  };

  const estiloLink = {
    display: "block",
    marginBottom: "10px",
    textDecoration: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px",
    width: "250px",
    borderRadius: "5px"
  };

  return (
    <div style={estiloPagina}>

      <h1 style={estiloTitulo}>Atividades de React</h1>

      <ul style={estiloLista}>

        <li>
          <a href="/Pg210" style={estiloLink}>
            Atividade Pg210
          </a>
        </li>

        <li>
          <a href="/Pg231" style={estiloLink}>
            Atividade Pg231
          </a>
        </li>

        <li>
          <a href="/Pg246" style={estiloLink}>
            Atividade Pg246
          </a>
        </li>

        <li>
          <a href="/Pg263" style={estiloLink}>
            Atividade Pg263
          </a>
        </li>

      </ul>

    </div>
  );
}