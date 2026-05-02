import logo from "../assets/images/footer-logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footerInner">
        <a className="footerBrand" href="#" aria-label="Envue home">
          <img src={logo} alt="envue logo" />
        </a>

        <div className="footerLinks">
          <div>
            <h3>Shop by Category</h3>
            <a href="#shop">Shop All</a>
            <a href="#shop">Tops</a>
            <a href="#shop">Bottoms</a>
            <a href="#shop">Coveralls</a>
            <a href="#shop">Suits</a>
            <a href="#shop">Accessories</a>
            <a href="#shop">Giftcards</a>
          </div>

          <div>
            <h3>Help &amp; Info</h3>
            <a href="#help">Privacy &amp; FAQs</a>
            <a href="#help">Size Guide</a>
            <a href="#help">Returns &amp; Exchanges</a>
          </div>

          <div>
            <h3>About Us</h3>
            <a href="#about">Our Story</a>
            <a href="#about">Giving Back</a>
            <a href="#journal">Blog</a>
            <a href="#about">Careers</a>
            <a href="#about">Contact Us</a>
          </div>

          <div>
            <h3>Account</h3>
            <a href="#account">Log In</a>
            <a href="#account">Sign Up</a>
          </div>
        </div>

        <p className="footerCopyright">copyright envue 2026</p>
      </div>
    </footer>
  );
}
