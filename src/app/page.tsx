import Image from "next/image";
import styles from './page.module.scss';
import Nav from "~/components/Nav";
import Hero from "~/components/Hero";

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={`containerFull ${styles.hero}`}>
        <div className="containerInner">
          <Nav/>

          <Hero/>
        </div>
      </div>
      <div className={`containerFull ${styles.services}`}>
        <div className="containerInner">
          <h2>Services</h2>
        </div>
      </div>
      <div className={`containerFull`}>
        <div className="containerInner">
          <h2>About the aircraft</h2>
        </div>
      </div>
    </div>
  );
}
