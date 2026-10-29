import { Link } from "react-router";

function About() {
  return (
    <section className="about-page">
      <div className="about-content">
        <p className="eyebrow">ABOUT US</p>

        <h1>About ARRD</h1>

        <p>
          ARRD is a demonstration e-commerce application
          built with React. It uses the Fake Store API to
          retrieve and display sample product information.
        </p>

        <p>
          Explore products, read descriptions, check prices,
          and learn how API integration and React Router work
          together in a web application.
        </p>

        <Link to="/products" className="primary-button">
          Browse Products
        </Link>
      </div>
    </section>
  );
}

export default About;