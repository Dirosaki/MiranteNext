import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { ButtonPrimary } from "../components/ButtonPrimary";

import styles from "./styles/home.module.scss";

export default function Home() {
  const [slide, setSlide] = useState("/product1.jpg");
  const [slideName, setSlideName] = useState("Guarda Corpo");
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (slideCount < 2) {
        setSlideCount(slideCount + 1);
      } else {
        setSlideCount(0);
      }
    }, 3000);

    if (slideCount === 0) {
      setSlide("/product1.jpg");
      setSlideName("Guarda Corpo");
    }
    if (slideCount === 1) {
      setSlide("/product2.jpg");
      setSlideName("Escadas");
    }
    if (slideCount === 2) {
      setSlide("/product3.jpg");
      setSlideName("Divisórias");
    }
  }, [slideCount]);

  return (
    <>
      <Head>
        <title>
          Mirante Vidros | Vidraçaria | Transparência é o nosso negocio.
        </title>
      </Head>
      <main className={styles.container}>
        <div className={styles.content}>
          <h1>
            Transparência <br /> é o nosso <br />
            negócio!
          </h1>
          <h3>
            As melhores soluções em vidraçaria <br />
            da cidade, você só encontra aqui!
          </h3>
          <Link href="/contato" passHref>
            <a>
              <ButtonPrimary title="Fale conosco" classes={styles.button} />
              Ir para contato
            </a>
          </Link>
        </div>
        <div className={styles.slide}>
          <div className={styles.slideImage}>
            <img src={slide} alt="Imagem Banner" />
          </div>
          {/* <div className={styles.slideName}> */}
          <h4>{slideName}</h4>
          {/* </div> */}
        </div>
      </main>

      <section className={styles.sobre} id="sobre">
        <h1>Quem somos</h1>
        <p>
          A Mirante Vidros se baseia na satisfação de seus Clientes. Para tanto,
          procura garantir qualidade dos produtos, preços competitivos e ótimo
          atendimento, além de praticar uma política empresarial séria e
          consciente, reinvestindo os resultados no próprio negócio, buscando o
          crescimento sustentável e continuado e assumindo um compromisso com o
          meio ambiente e com a sociedade.
        </p>

        <div className={styles.visao}>
          <div>
            <h4>Visão</h4>
            <p>Ser reconhecida em todo território, como a "Marca do Vidro".</p>
          </div>

          <div>
            <h4>Missão</h4>
            <p>
              Contribuir para o sucesso do Setor Vidreiro, Clientes e Parceiros.
            </p>
          </div>

          <div>
            <h4>Valores</h4>
            <p>
              Surpreender o Cliente, Ser eficiente e disciplinado, Querer
              aprender sempre, trabalhar em equipe, Agir com responsabilidade e
              segurança.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
