import styles from "./styles.module.scss";

interface CardProps {
  text: string;
  imagem: string;
  description: string;
  onClick?: () => void;
  service?: boolean;
}

export function Card({
  text,
  imagem,
  description,
  onClick,
  service = false,
}: CardProps) {
  return (
    <div
      className={`${styles.cardComponent} ${service && styles.service}`}
      onClick={onClick}
    >
      <img src={imagem} alt={description} />
      <p>{text}</p>
    </div>
  );
}
