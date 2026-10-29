import { Link } from "react-router";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <Link to="/" className="footer-logo">
            ARRD
          </Link>

          <p>
            Discover products and explore our online store demo.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} ARRD.
          React learning project.
        </p>
      </div>
    </footer>
  );
}

export default Footer;