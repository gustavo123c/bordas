import Link from "next/link";

export default function Home() {

  const estiloLink = {
    display: "block",
    marginBottom: "10px",
    backgroundColor: "green",
    color: "white",
    padding: "10px",
    textDecoration: "none",
    width: "200px"
  };

  return (
    <div style={{ padding: "40px" }}>

      <h1>Atividades</h1>

      <Link href="/page210" style={estiloLink}>page210</Link>
      <Link href="/page231" style={estiloLink}>page231</Link>
      <Link href="/page246" style={estiloLink}>page246</Link>
      <Link href="/page263" style={estiloLink}>page263</Link>

    </div>
  );
}