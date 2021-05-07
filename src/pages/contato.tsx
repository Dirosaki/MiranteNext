import { useRef } from "react";
import Input from "../components/Input";

export default function Contato() {
  const inputRef = useRef<HTMLInputElement>(null);

  function validate(value: string) {
    return value.replace(/\d/, "");
  }

  console.log(inputRef);

  return (
    <>
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
      <button onClick={() => inputRef.current.focus()}>BLUR</button>
    </>
  );
}
