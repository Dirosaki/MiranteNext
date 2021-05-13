import { ButtonSecondary } from "../components/ButtonSecondary";
import { Card } from "../components/Card";
import styles from "./styles/produtos.module.scss";

export default function Produtos() {
  return (
    <main className={ styles.main }>
      <h1>Precisa de <span>Vidros?</span></h1>
      <h4>Você esta no lugar certo!</h4>

      <p>
      Somos especializados em projetos com vidro, 
      contamos com profissionais capacitados e treinados para dar vida ao seu projeto.
      </p>

      <div className={ styles.buttons }>
          <ButtonSecondary title='Conforto' active/>
          <ButtonSecondary title='Segurança'/>
          <ButtonSecondary title='Decoração'/>
      </div>

      <div className={ styles.cards }>
        <Card text='Acústico' imagem='/product1.jpg'/>
        <Card text='Autolimpante' imagem='/product1.jpg'/>
        <Card text='Privacy glass' imagem='/product1.jpg'/>
        <Card text='Controle solar' imagem='/product1.jpg'/>
        <Card text='Insulado' imagem='/product1.jpg'/>
        <Card text='Profilit' imagem='/product1.jpg'/>
      </div>

    </main>
  );
}
