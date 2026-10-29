import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function Product() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProduct() {
      try {
        setLoading(true);
        setError("");
        setProduct(null);

        const response = await fetch(
          `https://fakestoreapi.com/products/${id}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        if (!data || !data.id) {
          throw new Error("Product not found");
        }

        setProduct(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Unable to load this product.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProduct();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return (
      <div className="status-message">
        <div className="spinner"></div>
        <p>Loading product details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-message error-message">
        <p>{error}</p>

        <Link to="/products" className="primary-button">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="product-detail-page">
      <Link to="/products" className="back-link">
        &larr; Back to Products
      </Link>

      <div className="product-detail">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-detail-info">
          <p className="product-category">
            {product.category}
          </p>

          <h1>{product.title}</h1>

          <div className="rating">
            <span>
              ★ {product.rating?.rate ?? "N/A"}
            </span>

            <span className="rating-count">
              ({product.rating?.count ?? 0} reviews)
            </span>
          </div>

          <p className="detail-price">
            ${product.price.toFixed(2)}
          </p>

          <h2>Description</h2>

          <p className="detail-description">
            {product.description}
          </p>

          <Link to="/products" className="primary-button">
            Continue Shopping
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Product;