import styles from "./styles.module.scss";

interface ButtonSecondaryProps {
  title: string;
  active?: boolean;
}

export function ButtonSecondary({
  title,
  active = false,
}: ButtonSecondaryProps) {
  return (
    <button className={`${styles.buttonComponent} ${active && styles.active}`}>
      {title}
    </button>
  );
}
