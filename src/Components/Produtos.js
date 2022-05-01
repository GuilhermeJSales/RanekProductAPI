import React from "react";
import { NavLink } from "react-router-dom";
import Head from "./Head";
import styles from "./Produtos.module.css";
const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch(`https://ranekapi.origamid.dev/json/api/produto`)
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null;

  console.log(produtos);
  return (
    <section className={`${styles.produtos} animationLeft`}>
      <Head title="Ranek" description="descrição do site" />
      {produtos.map((produto) => (
        <NavLink
          key={produto.id}
          className={styles.nome}
          to={`produto/${produto.id}`}
        >
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1>{produto.nome}</h1>
        </NavLink>
      ))}
    </section>
  );
};

export default Produtos;
