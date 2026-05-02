import { motion, type Variants } from "framer-motion";
import hero from "../assets/hero.png";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 12 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  return (
    <section className="hero">
      <div className="container heroInner">
        <motion.div
          className="heroCopy"
          variants={fadeUp}
          initial="hidden"
          animate="show"
        >
          <h1>Quiet confidence, fluid essentials, and expressive style.</h1>

          <p>Essentials that adapt to style, identity, and modern life.</p>

          <a className="button" href="#shop">
            Shop Collection
          </a>
        </motion.div>

        <motion.div
          className="heroImageWrap"
          variants={imageReveal}
          initial="hidden"
          animate="show"
        >
          <img src={hero} alt="Two models wearing envue clothing and jewelry" />
        </motion.div>
      </div>
    </section>
  );
}
