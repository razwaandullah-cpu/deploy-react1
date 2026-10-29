import { useEffect, useState } from "react";
import ProductList from "./ProductList";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://fakestoreapi.com/products/",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Unable to load products. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, []);

  if (loading) {
    return (
      <div className="status-message">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="status-message error-message">
        <p>{error}</p>

        <button
          className="primary-button"
          onClick={() => window.location.reload()}
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="products-page">
      <div className="section-heading">
        <p className="eyebrow">OUR COLLECTION</p>
        <h1>All Products</h1>
        <p>Explore our available products.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <ProductList
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;