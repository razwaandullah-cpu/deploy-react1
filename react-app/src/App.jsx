import { Routes, Route } from "react-router";
import NavLinks from "./component/NavLinks.jsx";
import Home from "./component/Home.jsx";
import Products from "./component/Products.jsx";
import Product from "./component/Product.jsx";
import About from "./component/About.jsx";
import NotFound from "./component/NotFound.jsx";
import Footer from "./component/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavLinks />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;