import { Link } from "react-router";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <p className="eyebrow">WELCOME TO ARRD The home of quality product</p>

        <h1>Discover Products You'll Love</h1>

        <p className="home-description">
          Explore electronics, clothing, jewelry, and more.
          Find your next favorite product today.
        </p>

        <Link to="/products" className="primary-button">
          Explore Products
        </Link>
      </div>
    </section>
  );
}

export default Home;