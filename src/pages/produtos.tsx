import { useState } from "react";
import { ButtonSecondary } from "../components/ButtonSecondary";
import { Card } from "../components/Card";
import styles from "./styles/produtos.module.scss";

export default function Produtos() {
  const [products, setProducts] = useState("confort");

  return (
    <main className={styles.main}>
      <h1>
        Precisa de <span>Vidros?</span>
      </h1>
      <h4>Você esta no lugar certo!</h4>

      <p>
        Somos especializados em projetos com vidro, contamos com profissionais
        capacitados e treinados para dar vida ao seu projeto.
      </p>

      <div className={styles.buttons}>
        <ButtonSecondary
          title="Conforto"
          active={products === "confort"}
          onClick={() => setProducts("confort")}
        />
        <ButtonSecondary
          title="Segurança"
          active={products === "security"}
          onClick={() => setProducts("security")}
        />
        <ButtonSecondary
          title="Decoração"
          active={products === "decoration"}
          onClick={() => setProducts("decoration")}
        />
      </div>

      <div className={styles.cards}>
        {products === "confort" ? (
          <>
            <Card text="Acústico" imagem="/product1.jpg" />
            <Card text="Autolimpante" imagem="/product1.jpg" />
            <Card text="Privacy glass" imagem="/product1.jpg" />
            <Card text="Controle solar" imagem="/product1.jpg" />
            <Card text="Insulado" imagem="/product1.jpg" />
            <Card text="Profilit" imagem="/product1.jpg" />
          </>
        ) : products === "security" ? (
          <>
            <Card text="Multilaminado" imagem="/product1.jpg" />
            <Card text="Temperado" imagem="/product1.jpg" />
            <Card text="Temperado-Laminado" imagem="/product1.jpg" />
            <Card text="Laminado" imagem="/product1.jpg" />
          </>
        ) : (
          <>
            <Card text="Plano" imagem="/product1.jpg" />
            <Card text="Impresso" imagem="/product1.jpg" />
            <Card text="Temperado-Laminado" imagem="/product1.jpg" />
            <Card text="Espelho" imagem="/product1.jpg" />
            <Card text="Blinds Glass" imagem="/product1.jpg" />
            <Card text="Profilit" imagem="/product1.jpg" />
          </>
        )}
      </div>
    </main>
  );
}
