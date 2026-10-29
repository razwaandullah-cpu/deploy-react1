import { Link } from "react-router";

function ProductList({ product }) {
  return (
    <article className="product-card">
      <Link
        to={`/products/${product.id}`}
        className="product-image-link"
        aria-label={`View ${product.title}`}
      >
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
      </Link>

      <div className="product-card-content">
        <p className="product-category">
          {product.category}
        </p>

        <h2 className="product-title">
          <Link to={`/products/${product.id}`}>
            {product.title}
          </Link>
        </h2>

        <p className="product-description">
          {product.description.length > 90
            ? `${product.description.slice(0, 90)}...`
            : product.description}
        </p>

        <div className="product-card-bottom">
          <span className="product-price">
            ${product.price.toFixed(2)}
          </span>

          <Link
            to={`/products/${product.id}`}
            className="view-button"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProductList;