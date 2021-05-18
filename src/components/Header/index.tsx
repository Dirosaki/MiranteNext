import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "./styles.module.scss";

export function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const router = useRouter();

  return (
    <header className={styles.headerComponent}>
      <Link href="/" passHref>
        <a>
          <img
            className={styles.logo}
            src="/logotipo-horizontal.svg"
            alt="logotipo mirante vidros"
          />
        </a>
      </Link>
      <nav className={`${isOpenMenu ? styles.active : ""}`}>
        <ul>
          <li className={router.pathname === "/" ? styles.active : ""}>
            <Link href="/" passHref>
              <a>Início</a>
            </Link>
          </li>
          <li className={router.pathname === "/#sobre" ? styles.active : ""}>
            <Link href="/#sobre" passHref>
              <a>Quem Somos</a>
            </Link>
          </li>
          <li className={router.pathname === "/produtos" ? styles.active : ""}>
            <Link href="/produtos" passHref>
              <a>Produtos</a>
            </Link>
          </li>
          <li className={router.pathname === "/servicos" ? styles.active : ""}>
            <Link href="/servicos" passHref>
              <a>Serviços</a>
            </Link>
          </li>
          <li className={router.pathname === "/contato" ? styles.active : ""}>
            <Link href="/contato" passHref>
              <a>Contato</a>
            </Link>
          </li>
        </ul>
        <div
          className={`${styles.socialsHeader} ${
            isOpenMenu ? styles.active : ""
          }`}
        >
          <a
            href="https://www.facebook.com/mirantevidros"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link do Facebook da Mirante Vidros"
          >
            <img src="/facebook.svg" alt="Facebook da Mirante" />
            Facebook
          </a>
          <a
            href="https://www.instagram.com/mirantevidros/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link do Instagram da Mirante Vidros"
          >
            <img src="/instagram.svg" alt="Instagram da Mirante" />
            Instagram
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5511930008010"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link do Whatsapp da Mirante Vidros"
          >
            <img src="/whatsapp.svg" alt="Whatsapp da Mirante" />
            Whatsapp
          </a>
        </div>
      </nav>
      <button
        type="button"
        className={styles.menu}
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <span className={`${isOpenMenu ? styles.active : ""}`}></span>
        <span className={`${isOpenMenu ? styles.active : ""}`}></span>
        <span className={`${isOpenMenu ? styles.active : ""}`}></span>
      </button>
    </header>
  );
}
