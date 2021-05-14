import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  active?: boolean;
}

export function ButtonSecondary({
  title,
  active = false,
  ...rest
}: ButtonSecondaryProps) {
  return (
    <button
      className={`${styles.buttonComponent} ${active && styles.active}`}
      {...rest}
    >
      {title}
    </button>
  );
}
