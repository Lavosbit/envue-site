import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CategoryGrid from "./components/CategoryGrid";
import FeaturedProducts from "./components/FeaturedProducts";
import BlogPosts from "./components/BlogPosts";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <BlogPosts />
      <Footer />
    </>
  );
}

export default App;
