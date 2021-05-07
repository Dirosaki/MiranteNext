import Link from "next/link";
import { useEffect, useState } from "react";

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
      console.log(slideCount);
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
  );
}
