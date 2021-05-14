import { useRef } from "react";
import { ButtonPrimary } from "../components/ButtonPrimary";
import Input from "../components/Input";
import styles from "./styles/contato.module.scss";

export default function Contato() {
  const inputRef = useRef<HTMLInputElement>(null);

  function validate(value: string) {
    return value.replace(/\d/, "");
  }

  console.log(inputRef);

  return (
    <main className={ styles.main }>
      
        <form>
          <h1>Formulário de Contato</h1>

          <Input
            type="text"
            placeholder="Nome"
            name="nome"
            min={3}
            ref={inputRef}
            onChange={({ target }) => (target.value = validate(target.value))}
          />
          <Input type="email" placeholder="E-mail" name="email" />
          <Input type="text" placeholder="Assunto" name="assunto" />

          <textarea name="" placeholder="Mensagem"></textarea>

          <ButtonPrimary title="Enviar"/>
        </form>
      
    </main>
  );
}
