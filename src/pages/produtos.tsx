import { useState } from "react";

import { CardContextProvider } from "../contexts/CardContext";

import { ButtonSecondary } from "../components/ButtonSecondary";
import { Card } from "../components/Card";
import { Modal } from "../components/Modal";

import cardsProduct from "../service/products.json";

import styles from "./styles/produtos.module.scss";

export default function Produtos() {
  const [products, setProducts] = useState("confort");
  const [modalIsActive, setModalIsActive] = useState(false);

  const productApi = cardsProduct.cards;

  function openModal() {
    setModalIsActive(true);
  }

  return (
    <CardContextProvider>
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
          {products === "confort"
            ? productApi.confort.map((card) => (
                <Card
                  key={card.id}
                  text={card.title}
                  imagem={card.imagem}
                  description={card.description}
                  onClick={openModal}
                />
              ))
            : products === "security"
            ? productApi.security.map((card) => (
                <Card
                  key={card.id}
                  text={card.title}
                  imagem={card.imagem}
                  description={card.description}
                  onClick={openModal}
                />
              ))
            : productApi.decoration.map((card) => (
                <Card
                  key={card.id}
                  text={card.title}
                  imagem={card.imagem}
                  description={card.description}
                  onClick={openModal}
                />
              ))}
        </div>
      </main>

      {modalIsActive && <Modal closeOverlay={() => setModalIsActive(false)} />}
    </CardContextProvider>
  );
}
