import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We're world's our
          special team best consulting & finance provider. Wide range of web and
          software development services.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1 className={styles.boxTitle}>10 K+</h1>
            <p className={styles.boxDesc}>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.boxTitle}>10 K+</h1>
            <p className={styles.boxDesc}>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1 className={styles.boxTitle}>10 K+</h1>
            <p className={styles.boxDesc}>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src="/about.png"
          alt="about"
          fill
          className={styles.aboutImage}
        />
      </div>
    </div>
  );
};

export default AboutPage;
