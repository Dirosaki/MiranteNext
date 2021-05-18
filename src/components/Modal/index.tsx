import Link from "next/link";
import { FiX } from "react-icons/fi";

import { ButtonPrimary } from "../ButtonPrimary";

import { useCard } from "../../contexts/CardContext";

import styles from "./styles.module.scss";

interface ModalProps {
  closeOverlay: () => void;
}

export function Modal({ closeOverlay }: ModalProps) {
  const { cardTitle, cardDescription, cardImage } = useCard();

  return (
    <>
      <div className={styles.border}>
        <div className={styles.modal}>
          <div
            className={styles.imagem}
            style={{
              background:
                "radial-gradient(100% 100% at 50% 0%, rgba(26, 26, 26, 0) 0%, var(--black) 100%), url(/product1.jpg) center",
            }}
          >
            <button type="button" onClick={closeOverlay} tabIndex={1}>
              <FiX className={styles.iconClose} title="Fechar" />
            </button>

            <img src={cardImage} alt="product" />
          </div>
          <h2>Vidro {cardTitle}</h2>
          <div dangerouslySetInnerHTML={{ __html: cardDescription }} />
          <Link href="/contato" passHref>
            <a>
              <ButtonPrimary title="Fazer orçamento" />
              Ir para contato
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.overlay} onClick={closeOverlay} />
    </>
  );
}
