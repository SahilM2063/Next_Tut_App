import styles from "./contact.module.css";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/contact.png"
          alt="contact"
          fill
          className={styles.contactImage}
        />
      </div>
      <div className={styles.formContainer}>
        <form action="#" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea cols="30" rows="10" placeholder="Message"></textarea>
          <button className={styles.formButton}>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
