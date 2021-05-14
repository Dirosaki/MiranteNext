import { Card } from "../components/Card";
import styles from "./styles/servicos.module.scss";

export default function Service(){ 
    return(
        <main className={ styles.container }>
            <h1>Serviços</h1>

            <section>
                <Card text="Coberturas" imagem="/product1.jpg"/>
                <Card text="Coberturas" imagem="/product1.jpg"/>
                <Card text="Coberturas" imagem="/product1.jpg"/>

                <Card text="Coberturas" imagem="/product1.jpg"/>
                <Card text="Coberturas" imagem="/product1.jpg"/>
                <Card text="Coberturas" imagem="/product1.jpg"/>

                <Card text="Coberturas" imagem="/product1.jpg"/>
                <Card text="Coberturas" imagem="/product1.jpg"/>
                <Card text="Coberturas" imagem="/product1.jpg"/>

            </section>
        </main>
    )
}