import styles from "./styles.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mapContainer}>
        <div></div>
      </div>
      <div></div>
      <div className={styles.copy}></div>
    </footer>
  );
}
