import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ imgSrc, date, title, desc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image src={imgSrc} alt="post" fill className={styles.postImage} />
        </div>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
        <Link href="/blog/post" className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
