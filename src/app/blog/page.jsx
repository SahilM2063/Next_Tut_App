import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";

const posts = [
  {
    imgSrc:
      "https://images.pexels.com/photos/19927917/pexels-photo-19927917/free-photo-of-police-car-near-radio-city-music-hall-in-new-york.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "01.01.2024",
    title: "City Lights",
    desc: "Lorem, ipsum dolor sit assumenda facere est. Sunt, ipsa!",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/5501162/pexels-photo-5501162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "02.02.2024",
    title: "Japan Spoty",
    desc: "Tenetur assumenda Lorem, ipsum dolor sit ",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/12842333/pexels-photo-12842333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "04.04.2024",
    title: "Pelican Bro",
    desc: "Lorem, ipsum dolor sit",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/7363747/pexels-photo-7363747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "03.03.2024",
    title: "China Losts",
    desc: "dolor sit amet consectetur",
  },
];

const BlogPage = () => {
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.title}>
          <PostCard
            imgSrc={post.imgSrc}
            date={post.date}
            title={post.title}
            desc={post.desc}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
