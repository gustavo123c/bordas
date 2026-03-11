export default function Pg263() {

  const calcados = [
    { nome: "Tênis Esportivo", preco: "R$ 199,90", img: "https://picsum.photos/id/237/200/300" },
    { nome: "Sapato Social", preco: "R$ 299,90", img: "https://picsum.photos/seed/picsum/200/300" },
    { nome: "Sandália", preco: "R$ 149,90", img: "https://picsum.photos/200/300?grayscale" },
    { nome: "Bota Casual", preco: "R$ 349,90", img: "https://picsum.photos/seed/shoe4/200/150" },
    { nome: "Chinelo", preco: "R$ 59,90", img: "https://picsum.photos/seed/shoe5/200/150" },
  ];

  const estiloContainer = {
    display: "flex",
    gap: "10px",
    padding: "20px"
  };

  const estiloCard = {
    backgroundColor: "green",
    padding: "10px",
    textAlign: "center",
    color: "white"
  };

  const estiloImagem = {
    width: "200px",
    height: "150px"
  };

  const estiloFooter = {
    backgroundColor: "gray",
    textAlign: "center",
    padding: "20px",
    color: "white"
  };

  return (
    <div>

      <div style={estiloContainer}>
        {calcados.map((item, index) => (
          <div key={index} style={estiloCard}>
            <img src={item.img} alt={item.nome} style={estiloImagem} />
            <p>{item.nome}</p>
            <p>{item.preco}</p>
          </div>
        ))}
      </div>

      <footer style={estiloFooter}>
        <p>Loja de Calçados PassoFirme</p>
      </footer>

    </div>
  );
}