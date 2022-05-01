import React from "react";
import styles from "./Contato.module.css";
import foto from "../img/contato.jpg";
import Head from "./Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animationLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em Contato</h1>
        <ul>
          <li>guijsalesdg@outlook.com</li>
          <li>99999-9999</li>
          <li>Rua Logo Ali, 196</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
