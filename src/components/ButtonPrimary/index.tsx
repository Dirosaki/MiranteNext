import { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

interface ButtonPrimaryProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  classes?: string;
}

export function ButtonPrimary({ title, classes, ...rest }: ButtonPrimaryProps) {
  return (
    <button
      className={`${styles.buttonComponent} ${classes}`}
      {...rest}
      type="button"
    >
      {title}
    </button>
  );
}
