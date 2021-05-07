import React, { InputHTMLAttributes, forwardRef } from "react";
import styles from "./styles.module.scss";

const Input: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
> = ({ ...rest }, ref) => {
  return (
    <input className={styles.inputComponent} required ref={ref} {...rest} />
  );
};

export default forwardRef(Input);
