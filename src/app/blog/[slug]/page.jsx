import styles from "./singlePost.module.css";
import Image from "next/image";

const SinglePagePost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/7363747/pexels-photo-7363747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="single post"
          fill
          className={styles.postImage}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <div className={styles.avatarContainer}>
            <Image
              src="https://images.pexels.com/photos/7363747/pexels-photo-7363747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="avatar"
              className={styles.avatar}
              fill
            />
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias sequi
          obcaecati nobis.
        </div>
      </div>
    </div>
  );
};

export default SinglePagePost;
