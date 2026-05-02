import { motion } from "framer-motion";
import { categories } from "../data/categories";

export default function CategoryGrid() {
  return (
    <section className="categorySection" id="shop">
      <div className="container">
        <h2 className="sectionTitle">Shop by Category</h2>

        <div className="categoryGrid">
          {categories.map((category, index) => (
            <motion.article
              className="categoryCard"
              key={category.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <img src={category.image} alt={category.title} />
              <h3>{category.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
