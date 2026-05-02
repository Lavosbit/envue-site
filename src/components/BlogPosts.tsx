import { useState } from "react";
import { motion } from "framer-motion";
import { posts } from "../data/posts";

export default function BlogPosts() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 480;
  const cardGap = 24;
  const slideAmount = cardWidth + cardGap;

  const visibleCards = 2;
  const maxIndex = posts.length - visibleCards;

  const nextPost = () => {
    setActiveIndex((current) => Math.min(current + 1, maxIndex));
  };

  const previousPost = () => {
    setActiveIndex((current) => Math.max(current - 1, 0));
  };

  return (
    <section className="blogSection" id="journal">
      <div className="container">
        <h2 className="blogSectionTitle">Blog Posts</h2>

        <div className="blogCarousel">
          <button
            type="button"
            className="blogArrow blogArrowLeft"
            onClick={previousPost}
            disabled={activeIndex === 0}
            aria-label="Previous blog post"
          >
            ←
          </button>

          <motion.div
            className="blogTrack"
            animate={{ x: -(activeIndex * slideAmount) }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {posts.map((post, index) => (
              <motion.article
                className="blogCard"
                key={post.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="blogCopy">
                  <h3>{post.title}</h3>

                  <p>{post.caption}</p>
                </div>

                <img src={post.image} alt={post.title} />
              </motion.article>
            ))}
          </motion.div>

          <button
            type="button"
            className="blogArrow blogArrowRight"
            onClick={nextPost}
            disabled={activeIndex === maxIndex}
            aria-label="Next blog post"
          >
            →
          </button>
        </div>

        <div className="blogButtonWrap">
          <a className="blogButton" href="#journal">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
}
