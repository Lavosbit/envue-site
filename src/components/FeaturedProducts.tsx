import { motion } from "framer-motion";
import { products } from "../data/products";

export default function FeaturedProducts() {
  return (
    <section className="featuredSection">
      <div className="container">
        <h2 className="sectionTitle">Featured Products</h2>

        <div className="featuredGrid">
          {products.map((product, index) => (
            <motion.article
              className="productCard"
              key={product.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
